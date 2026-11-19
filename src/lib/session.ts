import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { eq } from "drizzle-orm";
import { createHmac, timingSafeEqual } from "node:crypto";
import { db } from "@/db";
import { learners, type Learner } from "@/db/schema";
import { ensureSeeded } from "@/db/seed";

export const LEARNER_COOKIE = "iascend_learner";
export const DEMO_EMAIL = "demo@iascend.ng";

// Use an environment secret, with a fallback for local dev
const SECRET = process.env.SESSION_SECRET || "fallback-dev-secret-please-change-in-production";

// This signs the learner ID so it can't be guessed
export function signLearnerId(id: number | string) {
  const stringId = String(id);
    const signature = createHmac("sha256", SECRET).update(stringId).digest("hex");
      return `${stringId}.${signature}`;
      }

      // This checks the signature and extracts the real ID
      function verifyLearnerToken(token: string) {
        const [id, signature] = token.split(".");
          if (!id || !signature) return null;
            
              const expectedSignature = createHmac("sha256", SECRET).update(id).digest("hex");
                
                  try {
                      const valid = timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
                          if (!valid) return null;
                            } catch {
                                return null; // Length mismatch
                                  }
                                    
                                      const parsedId = Number(id);
                                        return Number.isFinite(parsedId) ? parsedId : null;
                                        }

                                        export const getCurrentLearner = cache(async (): Promise<Learner | null> => {
                                          const store = await cookies();
                                            const raw = store.get(LEARNER_COOKIE)?.value;
                                              
                                                if (!raw) return null;
                                                  
                                                    // Verify the signature instead of just reading the number
                                                      const id = verifyLearnerToken(raw);
                                                        if (!id) return null;

                                                          await ensureSeeded();
                                                            const [learner] = await db.select().from(learners).where(eq(learners.id, id));
                                                              return learner ?? null;
                                                              });

                                                              export async function requireLearner(): Promise<Learner> {
                                                                const learner = await getCurrentLearner();
                                                                  if (!learner) redirect("/start");
                                                                    return learner;
                                                                    }