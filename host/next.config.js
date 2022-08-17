/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;
    config.plugins = [
      ...config.plugins,
      new ModuleFederationPlugin({
        remotes: {
          button1: "button1@http://localhost:3001/remoteEntry.js",
          button2: "button2@http://localhost:3002/remoteEntry.js",
        },
      }),
    ];
    return config;
  },
};

module.exports = nextConfig;
