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
  resolve: {
    alias: { "@": path.resolve("./src") },
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
          },
          // {
          //   loader: "ts-loader",
          // },
        ],
        exclude: /node_modules/,
      },
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
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            minimize: true,
            name: "assets/images/[name].[hash:8].[ext]",
            esModule: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc)ss$/,
        use: !isProd
          ? [
              { loader: "classnames-loader" },
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
              },
              {
                loader: "sass-loader",
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
              {
                loader: "sass-loader",
              },
            ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      title: "react-app",
      // minify:{
      //   removeComments: true,
      // }
    }),
  ],
};
