import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/BlogPostLayout";
import { POSTS, POST_BODIES, getPost, getRelated } from "@/app/blog/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const renderBody = POST_BODIES[slug];
  if (!post || !renderBody) notFound();

  const related = getRelated(slug, 3);

  return (
    <BlogPostLayout post={post} related={related}>
      {renderBody()}
    </BlogPostLayout>
  );
}
