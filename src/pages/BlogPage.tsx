import React from 'react';
import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/types/BlogPost';

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

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Disc Golf Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;