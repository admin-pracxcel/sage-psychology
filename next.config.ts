import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
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
