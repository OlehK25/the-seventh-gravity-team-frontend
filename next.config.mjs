/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60,
  },
  env: {
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: 'pk.eyJ1Ijoib2xlaC1kZXYyNSIsImEiOiJjbGlibGM4cjcwMnlvM21tcWprN2ttaTMwIn0.OnJLxBIaHjfqENXUbDgW1A',
  }
};

export default nextConfig;
