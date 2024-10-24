import React from 'react';
import { useParams } from 'react-router-dom';
import { BlogPost } from '@/types/BlogPost';

// This would typically come from an API
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Choose the Right Disc for Your Play Style",
    excerpt: "Understanding the different types of discs and how they complement your throwing technique is crucial for improving your game.",
    content: "Lorem ipsum dolor sit amet... [Full article content here]",
    imageUrl: "/discgolfblog1.jpg",
    date: "2024-02-15",
    author: "John Smith"
  },
  {
    id: "2",
    title: "Disc Golf Throwing Techniques for Beginners",
    excerpt: "Master the basic throwing techniques that will help you build a strong foundation in disc golf.",
    content: "Lorem ipsum dolor sit amet... [Full article content here]",
    imageUrl: "/discgolfblog2.jpg",
    date: "2024-02-10",
    author: "Sarah Johnson"
  },
  {
    id: "3",
    title: "Top 5 Disc Golf Courses in the Pacific Northwest",
    excerpt: "Discover the most scenic and challenging disc golf courses that the Pacific Northwest has to offer.",
    content: "Lorem ipsum dolor sit amet... [Full article content here]",
    imageUrl: "/discgolfblog3.jpg",
    date: "2024-02-05",
    author: "Mike Wilson"
  }
];

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-muted-foreground mb-8">
        {post.date} • {post.author}
      </div>
      <div className="prose max-w-none">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPostPage;