import { eq } from "drizzle-orm";

import { db } from "./db.js";
import { blogPosts } from "../../shared/schema.js";

export async function getPublishedBlogPosts() {
  return db.select().from(blogPosts).where(eq(blogPosts.published, true));
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
  return posts[0] ?? null;
}


