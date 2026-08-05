import type { MetadataRoute } from "next";

const SITE = "https://www.sagepsychservices.com.au";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/contact-thank-you", "/booking-thank-you", "/api/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
