const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { dependencies } = require("./package.json");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "button1",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/index",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
      },
    }),
  ],
};
