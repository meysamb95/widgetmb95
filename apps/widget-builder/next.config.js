/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@superfluid-finance/widget"],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/superfluid-finance/**/*",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_FONTS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY,
  },
};
