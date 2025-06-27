import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://github.com/sarbosarcar/sarbosarcar.github.io/blob/main/resources/')],  
    localPatterns: [{
      pathname: '/projects/*',
    }]
  },
};

export default nextConfig;
