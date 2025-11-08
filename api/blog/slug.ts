import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getBlogPostBySlug } from '../_lib/blog.js';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const { slug } = req.query;

  try {
    const post = await getBlogPostBySlug(slug as string);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
}
