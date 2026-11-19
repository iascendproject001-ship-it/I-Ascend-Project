import { cache } from "react";
import { asc, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { articles, socialPosts } from "@/db/schema";
import { ensureSeeded } from "@/db/seed";

export const getPublishedArticles = cache(async (limit = 6) => {
  await ensureSeeded();
  return db
    .select()
    .from(articles)
    .where(eq(articles.status, "published"))
    .orderBy(desc(articles.publishedAt), desc(articles.id))
    .limit(limit);
});

export const getArticleBySlug = cache(async (slug: string) => {
  await ensureSeeded();
  const [row] = await db
    .select()
    .from(articles)
    .where(eq(articles.slug, slug))
    .limit(1);
  if (!row || row.status !== "published") return null;
  return row;
});

export const getVisibleSocialPosts = cache(async (limit = 6) => {
  await ensureSeeded();
  return db
    .select()
    .from(socialPosts)
    .where(eq(socialPosts.visible, 1))
    .orderBy(asc(socialPosts.sortOrder), desc(socialPosts.id))
    .limit(limit);
});
