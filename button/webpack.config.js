const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");

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
      shared: {
        react: {
          requiredVersion: dependencies.react,
        },
      },
    }),
  ],
  devServer: {
    port: 3001,
  },
};
