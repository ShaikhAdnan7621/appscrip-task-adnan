/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/fake-products",
        destination: "https://fakestoreapi.com/products",
      },
    ];
  },
};

export default nextConfig;
