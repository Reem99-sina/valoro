const withSvgr = require("next-plugin-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "rational-unity-e3171a749a.strapiapp.com",
    //     port: "1337",
    //     pathname: "/uploads/**",
    //   },
    // ],
    domains: [
      "rational-unity-e3171a749a.media.strapiapp.com"
    ],
  },
};

module.exports = withSvgr(nextConfig);
