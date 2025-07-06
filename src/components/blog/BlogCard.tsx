import { BlogPost } from '@/lib/blog';
import { Link } from 'next-view-transitions';
import React from 'react';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{post.description}</p>
        <p className="text-xs text-gray-500">{post.publishedAt}</p>
      </Link>
    </div>
  );
};
