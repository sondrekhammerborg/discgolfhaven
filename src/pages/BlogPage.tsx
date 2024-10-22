import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Tips to Improve Your Disc Golf Drive",
      excerpt: "Learn how to add distance and accuracy to your drives with these expert tips.",
      date: "2023-05-15"
    },
    {
      id: 2,
      title: "Choosing the Right Disc for Different Shots",
      excerpt: "Understand the characteristics of different discs and when to use them for optimal performance.",
      date: "2023-05-22"
    },
    {
      id: 3,
      title: "Mastering Putting Techniques",
      excerpt: "Improve your short game with these proven putting strategies and practice drills.",
      date: "2023-05-29"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Disc Golf Tips & Tricks</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;