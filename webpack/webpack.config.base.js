const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve("../dist"),
    filename: "js/[name].[hash].js",
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // minify:{
      //   removeComments: true,
      // }
    }),
  ],
};
