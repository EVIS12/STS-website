/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'clipground.com',
      },
      {
        protocol: 'https',
        hostname: 'server.thespacetravelsummit.com',
      },
    ],
  },
};

module.exports = nextConfig;
