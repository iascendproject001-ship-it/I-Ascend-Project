import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { and, eq, gt, lt } from "drizzle-orm";
import { db } from "@/db";
import { staffSessions, staffUsers } from "@/db/schema";
import { ensureSeeded } from "@/db/seed";

export const STAFF_COOKIE = "iascend_staff";
export const STAFF_SESSION_HOURS = 8;

const scrypt = promisify(scryptCallback);

export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const derived = (await scrypt(password, salt, 64)) as Buffer;
  return `v1$${salt}$${derived.toString("hex")}`;
}

export async function verifyPassword(password: string, stored: string) {
  try {
    const [, salt, hash] = stored.split("$");
    if (!salt || !hash) return false;
    const derived = (await scrypt(password, salt, 64)) as Buffer;
    const expected = Buffer.from(hash, "hex");
    return derived.length === expected.length && timingSafeEqual(derived, expected);
  } catch {
    return false;
  }
}

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function createStaffSession(userId: number) {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + STAFF_SESSION_HOURS * 3_600_000);
  await db.delete(staffSessions).where(lt(staffSessions.expiresAt, new Date()));
  await db.insert(staffSessions).values({ userId, tokenHash: hashToken(token), expiresAt });
  return { token, expiresAt };
}

export async function destroyStaffSession(token: string) {
  await db.delete(staffSessions).where(eq(staffSessions.tokenHash, hashToken(token)));
}

export type StaffIdentity = { id: number; name: string; email: string; role: string };

export const getStaffUser = cache(async (): Promise<StaffIdentity | null> => {
  const store = await cookies();
  const token = store.get(STAFF_COOKIE)?.value;
  if (!token) return null;
  await ensureSeeded();
  const [row] = await db
    .select({
      id: staffUsers.id,
      name: staffUsers.name,
      email: staffUsers.email,
      role: staffUsers.role,
      isActive: staffUsers.isActive,
    })
    .from(staffSessions)
    .innerJoin(staffUsers, eq(staffUsers.id, staffSessions.userId))
    .where(and(eq(staffSessions.tokenHash, hashToken(token)), gt(staffSessions.expiresAt, new Date())))
    .limit(1);
  if (!row || row.isActive !== 1) return null;
  return { id: row.id, name: row.name, email: row.email, role: row.role };
});

export async function requireStaff(): Promise<StaffIdentity> {
  const user = await getStaffUser();
  if (!user) redirect("/staff/login");
  return user;
}

export async function requireAdmin(): Promise<StaffIdentity> {
  const user = await requireStaff();
  if (user.role !== "admin") redirect("/staff");
  return user;
}

export async function countActiveStaff() {
  await ensureSeeded();
  const rows = await db
    .select({ id: staffUsers.id })
    .from(staffUsers)
    .where(eq(staffUsers.isActive, 1));
  return rows.length;
}

/* ------------------------------------------------------------------ */
/* Login brute-force protection (in-memory; single-instance safe).    */
/* For multi-instance production, move this to Redis or the database.*/
/* ------------------------------------------------------------------ */

const loginFailures = new Map<string, number[]>();
const LOGIN_LIMIT = 5;
const LOGIN_WINDOW_MS = 10 * 60 * 1000;

export function isLoginBlocked(email: string) {
  const key = email.toLowerCase();
  const now = Date.now();
  const attempts = (loginFailures.get(key) ?? []).filter((t) => now - t < LOGIN_WINDOW_MS);
  loginFailures.set(key, attempts);
  return attempts.length >= LOGIN_LIMIT;
}

export function recordLoginFailure(email: string) {
  const key = email.toLowerCase();
  loginFailures.set(key, [...(loginFailures.get(key) ?? []), Date.now()]);
}

export function clearLoginAttempts(email: string) {
  loginFailures.delete(email.toLowerCase());
}
