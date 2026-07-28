import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"]
    }
  },
  serverExternalPackages: ["pdf-parse", "pdfjs-dist"]
};

export default nextConfig;
