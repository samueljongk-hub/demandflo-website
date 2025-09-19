import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema, insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog routes
  app.get("/api/blog/posts", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching blog posts: " + error.message });
    }
  });

  app.get("/api/blog/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      if (!post.published) {
        return res.status(404).json({ message: "Blog post not published" });
      }

      res.json(post);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching blog post: " + error.message });
    }
  });

  app.post("/api/blog/posts", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Error creating blog post: " + error.message });
    }
  });

  // Contact form route
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ message: "Contact submission received successfully", id: submission.id });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Error processing contact submission: " + error.message });
    }
  });

  // Admin routes for blog management
  app.get("/api/admin/blog/posts", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching all blog posts: " + error.message });
    }
  });

  app.put("/api/admin/blog/posts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertBlogPostSchema.partial().parse(req.body);
      const updatedPost = await storage.updateBlogPost(id, validatedData);
      
      if (!updatedPost) {
        return res.status(404).json({ message: "Blog post not found" });
      }

      res.json(updatedPost);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Error updating blog post: " + error.message });
    }
  });

  app.delete("/api/admin/blog/posts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteBlogPost(id);
      
      if (!deleted) {
        return res.status(404).json({ message: "Blog post not found" });
      }

      res.json({ message: "Blog post deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: "Error deleting blog post: " + error.message });
    }
  });

  // Contact submissions admin route
  app.get("/api/admin/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching contact submissions: " + error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
