const withSvgr = require("next-plugin-svgr");
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "rational-unity-e3171a749a.strapiapp.com",
    //     port: "1337",
    //     pathname: "/uploads/**",
    //   },
    // ],
    domains: ["rational-unity-e3171a749a.media.strapiapp.com", "localhost"],
  },
};

export default withSvgr(nextConfig);
