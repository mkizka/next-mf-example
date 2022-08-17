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
  devServer: {
    port: 3001,
  },
};
