import type { MetadataRoute } from "next";
import { POSTS } from "@/app/blog/posts";

const SITE = "https://www.sagepsychservices.com.au";

const STATIC_PAGES: {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
}[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
  { path: "/fees", priority: 0.9, changeFrequency: "yearly" },
  { path: "/book", priority: 0.9, changeFrequency: "yearly" },
  { path: "/cbt-therapy-perth", priority: 0.9, changeFrequency: "monthly" },
  { path: "/emdr-therapy-perth", priority: 0.9, changeFrequency: "monthly" },
  { path: "/anxiety-therapy-perth", priority: 0.9, changeFrequency: "monthly" },
  { path: "/trauma-therapy-perth", priority: 0.9, changeFrequency: "monthly" },
  { path: "/depression-counselling-perth", priority: 0.8, changeFrequency: "monthly" },
  { path: "/telehealth-psychologist-perth", priority: 0.8, changeFrequency: "monthly" },
  { path: "/how-therapy-works", priority: 0.7, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((p) => ({
    url: `${SITE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
