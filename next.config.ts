const withSvgr = require("next-plugin-svgr");
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
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
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/images/[name].[hash][ext]",
      },
    });

    return config;
  },
};

export default withSvgr(nextConfig);
