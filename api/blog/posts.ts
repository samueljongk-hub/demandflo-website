import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getPublishedBlogPosts } from '../_lib/blog';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  try {
    const posts = await getPublishedBlogPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
}
