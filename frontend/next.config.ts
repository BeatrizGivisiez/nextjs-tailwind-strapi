/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["localhost"], // 👈 this allows images from http://localhost:1337
  },
};

module.exports = nextConfig;
