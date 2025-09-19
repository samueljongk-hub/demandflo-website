import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog/posts", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center" data-testid="loading-blog-post">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center" data-testid="blog-post-not-found">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog">
            <Button className="gradient-primary text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date | string) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "lead generation":
        return "text-accent bg-accent/10";
      case "analytics":
        return "text-primary bg-primary/10";
      case "growth":
        return "text-secondary bg-secondary/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="min-h-screen pt-16" data-testid="page-blog-post">
      {/* Back Button */}
      <div className="bg-muted py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="hover:bg-background transition-colors" data-testid="button-back-to-blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="aspect-[2/1] lg:aspect-[3/1] overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover"
          data-testid="blog-post-hero-image"
        />
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${getCategoryColor(post.category)}`} data-testid="blog-post-category">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground" data-testid="blog-post-read-time">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
                <div className="flex items-center text-sm text-muted-foreground" data-testid="blog-post-date">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(post.createdAt || new Date())}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-6" data-testid="blog-post-title">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8" data-testid="blog-post-excerpt">
                {post.excerpt}
              </p>

              {/* Share Button */}
              <div className="flex items-center gap-4">
                <Button variant="outline" className="flex items-center gap-2" data-testid="button-share-article">
                  <Share2 className="h-4 w-4" />
                  Share Article
                </Button>
              </div>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none" data-testid="blog-post-content">
              <div className="text-foreground leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-muted rounded-2xl text-center">
              <h3 className="text-2xl font-semibold mb-4" data-testid="blog-post-cta-title">
                Ready to Transform Your Lead Generation?
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="blog-post-cta-description">
                Let's discuss how these strategies can be implemented for your business.
              </p>
              <Link href="/contact">
                <Button className="gradient-primary text-white hover:scale-105 transition-all duration-300" data-testid="button-book-consultation">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
