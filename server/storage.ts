import { db } from "./db";
import { blogPosts, contactSubmissions } from "@shared/schema";
import { eq } from "drizzle-orm";
import type { InsertBlogPost, InsertContactSubmission } from "@shared/schema";

export const storage = {
  // Get all published blog posts (matches routes.ts)
  async getBlogPosts() {
    return await db.select().from(blogPosts).where(eq(blogPosts.published, true));
  },

  // Get a single blog post by slug (matches routes.ts)
  async getBlogPost(slug: string) {
    const posts = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return posts[0] || null;
  },

  // Get all published blog posts (alternative method name)
  async getPublishedBlogPosts() {
    return await db.select().from(blogPosts).where(eq(blogPosts.published, true));
  },

  // Get a single blog post by slug (alternative method name)
  async getBlogPostBySlug(slug: string) {
    const posts = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return posts[0] || null;
  },

  // Get all blog posts (published and unpublished) - for admin
  async getAllBlogPosts() {
    return await db.select().from(blogPosts);
  },

  // Create a new blog post
  async createBlogPost(data: InsertBlogPost) {
    const result = await db.insert(blogPosts).values(data).returning();
    return result[0];
  },

  // Update a blog post
  async updateBlogPost(id: string, data: Partial<InsertBlogPost>) {
    const result = await db
      .update(blogPosts)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return result[0] || null;
  },

  // Delete a blog post
  async deleteBlogPost(id: string) {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id)).returning();
    return result.length > 0;
  },

  // Create a contact submission
  async createContactSubmission(data: InsertContactSubmission) {
    const result = await db.insert(contactSubmissions).values(data).returning();
    return result[0];
  },

  // Get all contact submissions - for admin
  async getAllContactSubmissions() {
    return await db.select().from(contactSubmissions);
  },
};