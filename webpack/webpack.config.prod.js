const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return webpackMerge.merge(baseWebpackConfig, {
    mode: process.env.NODE_ENV || 'production',
    plugins: [
      new MiniCssExtractPlugin({
        filename: "assets/css/[name]_[contenthash:8].css",
      }),
    ],
  });
};
