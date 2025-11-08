import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  /* config options here */
  // Expirmental means that it's a expirmental feature and they are
  // improving it so you use it at your own risk.
  experimental: {
    // Firstly understand about Turbopack - our NextJS builder

    // 1. Without turbopackFileSystemCacheForDev
    // When we start server by npm run dev
    // then it will build
    // when we will make changes in code then it will build only that code(not from scratch)
    // then we close the server
    // then we start server
    // Now it will build from scratch

    // 2. With turbopackFileSystemCacheForDev
    // When we start server by npm run dev
    // then it will build
    // when we will make changes in code then it will build only that code not from scratch
    // then we close the server
    // but it will save in memory
    // then we start server
    // Now it will build where we left in local disk not from scratch

    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
