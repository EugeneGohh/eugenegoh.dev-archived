/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.hashnode.com"],
  },
  env: {
    GITHUB_ACCESS_TOKEN: `${process.env.GITHUB_ACCESS_TOKEN}`,
  },
};
