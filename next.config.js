/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    transpilePackages: ['three'],
    webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
