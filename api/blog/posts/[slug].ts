import type { VercelRequest, VercelResponse } from "@vercel/node";

import { getBlogPostBySlug } from "../../lib/blog.js";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const { slug } = req.query;

  if (typeof slug !== "string") {
    return res.status(400).json({ error: "Missing slug parameter" });
  }

  try {
    const post = await getBlogPostBySlug(slug);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ error: "Failed to fetch blog post" });
  }
}

