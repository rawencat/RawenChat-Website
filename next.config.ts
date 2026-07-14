import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set the root to the project directory to prevent Turbopack
    // from picking up pnpm-lock.yaml from the user's home directory.
    root: process.cwd(),
  },
};

export default nextConfig;
