/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Tüm görseller yereldir (public/images), dış görsel servisi kullanılmaz.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
