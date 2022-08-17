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
          button: "button@http://localhost:3001/remoteEntry.js",
        },
      }),
    ];
    return config;
  },
};

module.exports = nextConfig;
