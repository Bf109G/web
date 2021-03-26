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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // minify:{
      //   removeComments: true,
      // }
    }),
  ],
};
