import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const productionOrigin = process.env.NEXT_PUBLIC_APP_URL || "https://www.mydopaclass.com";
    const allowedOrigin =
      process.env.NODE_ENV === "development" ? "*" : productionOrigin;
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: allowedOrigin },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ],
      },
    ];
  },
};

export default nextConfig;
