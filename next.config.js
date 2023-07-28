/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
  images: {
    domains: ["play-lh.googleusercontent.com"],
  },
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        // Add the PWA configuration options here
        pwa: {
          dest: "public",
          register: true,
          skipWaiting: true,
        },
      },
    ],
  ],
  nextConfig
);
