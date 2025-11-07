import type { VercelRequest, VercelResponse } from '@vercel/functions';
import { db } from '@/server/db';
import { blogPosts } from '@shared/schema';
import { eq } from 'drizzle-orm';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  try {
    const posts = await db.select().from(blogPosts).where(eq(blogPosts.published, true));
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
}
