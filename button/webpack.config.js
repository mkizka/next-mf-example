const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "button",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/index",
      },
    }),
  ],
  devServer: {
    port: 3001,
  },
};
