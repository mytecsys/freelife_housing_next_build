/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: "build",
  images: {
    domains: ["images.pexels.com", "images.unsplash.com"],
  },
  env: {
    DB_HOST: "localhost",
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
          },
        },
      });
    }
    return config;
  },
};

export default nextConfig;
