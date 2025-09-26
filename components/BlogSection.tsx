import React from 'react';
import { blogPosts } from '../data';
import type { BlogPost } from '../types';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300">
    <div className="overflow-hidden">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <p className="text-purple-400 text-sm font-medium mb-2">{post.category}</p>
      <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
      <div className="flex items-center mt-4">
        <img src={post.authorAvatarUrl} alt={post.authorName} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="text-white font-semibold">{post.authorName}</p>
          <p className="text-gray-500 text-xs">{post.date}</p>
        </div>
      </div>
    </div>
  </div>
);

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Insights & Ideas</h2>
          <p className="text-lg text-gray-400 mt-2">Exploring the frontiers of Web3 creativity and strategy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;