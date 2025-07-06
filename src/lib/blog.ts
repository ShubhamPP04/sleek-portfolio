// Placeholder blog library - blog functionality not implemented
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  image?: string;
  tags?: string[];
}

export function getPublishedBlogPosts(): BlogPost[] {
  // Return empty array since blog functionality is not implemented
  return [];
}

export function getBlogPost(slug: string): BlogPost | null {
  // Return null since blog functionality is not implemented
  console.log('Blog post requested:', slug); // Keep parameter to avoid unused warning
  return null;
}
