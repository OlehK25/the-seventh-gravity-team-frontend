/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    minimumCacheTTL: 60,
    remotePatterns:[
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: 'https://a806-176-100-4-90.ngrok-free.app',
    NEXTAUTH_SECRET: 'qQJIr7QKBPs8mkkcsFbwl4eQCHNcQTg091vvSJYd5qI=',
    NEXTAUTH_URL: 'http://localhost:3000',
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: 'pk.eyJ1Ijoib2xlaC1kZXYyNSIsImEiOiJjbGlibGM4cjcwMnlvM21tcWprN2ttaTMwIn0.OnJLxBIaHjfqENXUbDgW1A',
  }
};

export default nextConfig;
