/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_CLIENT_URL,
  },
};

export default nextConfig;
