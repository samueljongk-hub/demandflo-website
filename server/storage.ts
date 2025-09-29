import { db } from "./db";
import { blogPosts } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function getAllBlogPosts() {
  return await db.select().from(blogPosts).where(eq(blogPosts.published, true));
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
  return posts[0] || null;
}