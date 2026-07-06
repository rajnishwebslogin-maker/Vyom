import BlogDetailClient from "./BlogDetailClient";
import { getPostBySlug } from "@/app/data/blogs";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }
  
  return {
    title: `${post.title} | Vyom Regency Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  return <BlogDetailClient post={post} />;
}