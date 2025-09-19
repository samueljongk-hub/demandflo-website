import { Link } from "wouter";
import { Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@shared/schema";
import AnimatedCard from "@/components/ui/animated-card";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
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

  const formatDate = (date: Date | string) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <AnimatedCard data-testid={`blog-card-${post.slug}`}>
      <article className="overflow-hidden h-full flex flex-col">
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            data-testid={`blog-image-${post.slug}`}
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-sm font-medium px-2 py-1 rounded-full ${getCategoryColor(post.category)}`} data-testid={`blog-category-${post.slug}`}>
              {post.category}
            </span>
            <div className="flex items-center text-xs text-muted-foreground" data-testid={`blog-meta-${post.slug}`}>
              <Clock className="h-3 w-3 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 leading-tight line-clamp-2" data-testid={`blog-title-${post.slug}`}>
            {post.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 flex-grow" data-testid={`blog-excerpt-${post.slug}`}>
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground" data-testid={`blog-date-${post.slug}`}>
              {formatDate(post.createdAt || new Date())}
            </span>
            <Link href={`/blog/${post.slug}`}>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-200 group"
                data-testid={`button-read-more-${post.slug}`}
              >
                Read More
                <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </AnimatedCard>
  );
}
