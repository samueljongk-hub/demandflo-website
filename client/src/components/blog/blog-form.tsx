import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Save, Eye, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertBlogPostSchema, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { z } from "zod";

const blogFormSchema = insertBlogPostSchema.extend({
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  readTime: z.string().min(1, "Read time is required"),
});

type BlogFormData = z.infer<typeof blogFormSchema>;

interface BlogFormProps {
  post?: BlogPost;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function BlogForm({ post, onSuccess, onCancel }: BlogFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: post?.title || "",
      content: post?.content || "",
      excerpt: post?.excerpt || "",
      category: post?.category || "",
      readTime: post?.readTime || "",
      imageUrl: post?.imageUrl || "",
      slug: post?.slug || "",
      published: post?.published ?? false,
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: InsertBlogPost) => apiRequest("POST", "/api/blog/posts", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog/posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      toast({
        title: "Success!",
        description: "Blog post created successfully.",
      });
      form.reset();
      onSuccess?.();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create blog post.",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: Partial<InsertBlogPost>) => 
      apiRequest("PUT", `/api/admin/blog/posts/${post?.id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog/posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog/posts", post?.slug] });
      toast({
        title: "Success!",
        description: "Blog post updated successfully.",
      });
      onSuccess?.();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update blog post.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: BlogFormData) => {
    setIsSubmitting(true);
    try {
      if (post) {
        await updateMutation.mutateAsync(data);
      } else {
        await createMutation.mutateAsync(data);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleTitleChange = (title: string) => {
    form.setValue("title", title);
    if (!post) {
      const slug = generateSlug(title);
      form.setValue("slug", slug);
    }
  };

  const categories = [
    "Lead Generation",
    "Analytics", 
    "Growth",
    "Marketing",
    "Sales",
    "Strategy",
    "Technology",
    "Case Studies"
  ];

  return (
    <Card className="p-8" data-testid="blog-form-card">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <FileText className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-display font-bold">
            {post ? "Edit Blog Post" : "Create New Blog Post"}
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          {onCancel && (
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              data-testid="button-cancel-blog-form"
            >
              Cancel
            </Button>
          )}
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="blog-form">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter blog post title"
                      {...field}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                      data-testid="input-blog-title"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="blog-post-slug"
                      {...field}
                      className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                      data-testid="input-blog-slug"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Excerpt</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Brief description of the blog post..."
                    rows={3}
                    {...field}
                    className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none"
                    data-testid="textarea-blog-excerpt"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                        data-testid="select-blog-category"
                      >
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="readTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Read Time</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="5 min read"
                      {...field}
                      className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                      data-testid="input-blog-read-time"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Featured Image URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/image.jpg"
                    {...field}
                    className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                    data-testid="input-blog-image-url"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your blog post content here..."
                    rows={12}
                    {...field}
                    className="focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                    data-testid="textarea-blog-content"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="published"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Published</FormLabel>
                  <div className="text-sm text-muted-foreground">
                    Make this post visible to the public
                  </div>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    data-testid="switch-blog-published"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between pt-6 border-t border-border">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Eye className="h-4 w-4" />
              <span>Preview available after saving</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                data-testid="button-save-blog-post"
              >
                <Save className="mr-2 h-4 w-4" />
                {isSubmitting ? "Saving..." : post ? "Update Post" : "Create Post"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </Card>
  );
}
