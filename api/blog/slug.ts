import type { VercelRequest, VercelResponse } from '@vercel/functions';
import { db } from '@/server/db';
import { blogPosts } from '@shared/schema';
import { eq } from 'drizzle-orm';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const { slug } = req.query;

  try {
    const posts = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug as string));

    if (!posts.length) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(posts[0]);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
}
