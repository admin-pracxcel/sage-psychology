import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // Legacy Wix URLs → new equivalents
      { source: "/faq-1", destination: "/faq/", permanent: true },
      { source: "/contact-3", destination: "/contact/", permanent: true },
      { source: "/services", destination: "/", permanent: true },

      // www → apex host
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.sagepsychservices.com.au",
          },
        ],
        destination: "https://sagepsychservices.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
