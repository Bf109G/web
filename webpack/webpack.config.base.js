const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProd = process.env.NODE_ENV === "production";
console.log("isProd", isProd);

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve("../dist"),
    filename: "assets/js/[name].[contenthash].js",
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
      {
        test: /\.html$/,
        use: {
          loader: "raw-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: !isProd
          ? [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
              },
            ]
          : [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: false,
                },
              },
              {
                loader: "css-loader",
              },
            ],
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
