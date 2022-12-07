/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",

      use: "js-yaml-loader",
    });
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
