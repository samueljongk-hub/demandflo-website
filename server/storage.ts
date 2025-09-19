import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog posts
  getAllBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;
  
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.contactSubmissions = new Map();
    
    // Initialize with sample blog posts
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const samplePosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "5 Advanced Strategies to Double Your Lead Conversion Rate",
        content: "Discover proven techniques used by top-performing businesses to dramatically improve their lead conversion rates. In this comprehensive guide, we'll explore data-driven strategies that can transform your business.",
        excerpt: "Discover proven techniques used by top-performing businesses to dramatically improve their lead conversion rates.",
        category: "Lead Generation",
        readTime: "5 min read",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        slug: "5-advanced-strategies-double-lead-conversion-rate",
        published: true,
        createdAt: new Date("2024-12-15"),
        updatedAt: new Date("2024-12-15"),
      },
      {
        id: randomUUID(),
        title: "How to Track ROI from Your Lead Generation Campaigns",
        content: "A comprehensive guide to measuring and optimizing the return on investment from your marketing efforts. Learn the metrics that matter most.",
        excerpt: "A comprehensive guide to measuring and optimizing the return on investment from your marketing efforts.",
        category: "Analytics",
        readTime: "8 min read",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        slug: "track-roi-lead-generation-campaigns",
        published: true,
        createdAt: new Date("2024-12-12"),
        updatedAt: new Date("2024-12-12"),
      },
      {
        id: randomUUID(),
        title: "Case Study: How We Generated $100K in 90 Days",
        content: "Real results from a client who scaled from startup to six-figure revenue using our proven methodology. See the exact strategies we used.",
        excerpt: "Real results from a client who scaled from startup to six-figure revenue using our proven methodology.",
        category: "Growth",
        readTime: "12 min read",
        imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        slug: "case-study-generated-100k-90-days",
        published: true,
        createdAt: new Date("2024-12-10"),
        updatedAt: new Date("2024-12-10"),
      },
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime()
    );
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
  }

  async getBlogPostById(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const post: BlogPost = {
      ...insertPost,
      id,
      published: insertPost.published ?? false,
      createdAt: now,
      updatedAt: now,
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) return undefined;

    const updatedPost: BlogPost = {
      ...existingPost,
      ...updateData,
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      phone: insertSubmission.phone ?? null,
      revenueRange: insertSubmission.revenueRange ?? null,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime()
    );
  }
}

export const storage = new MemStorage();
