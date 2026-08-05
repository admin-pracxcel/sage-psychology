import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/BlogPostLayout";
import { POSTS, POST_BODIES, getPost, getRelated } from "@/app/blog/posts";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";

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
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
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

  const article = articleSchema({
    headline: post.metaTitle,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.publishedAt,
    url: `/blog/${post.slug}`,
  });

  const crumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={article} />
      <JsonLd data={crumbs} />
      <BlogPostLayout post={post} related={related}>
        {renderBody()}
      </BlogPostLayout>
    </>
  );
}
