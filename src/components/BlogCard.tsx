import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlogPost } from '@/types/BlogPost';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <div className="text-sm text-muted-foreground mb-2">
          {post.date} • {post.author}
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={`/blog/${post.id}`}>
          <Button variant="outline">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;