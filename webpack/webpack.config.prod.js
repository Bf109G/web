const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.base");

module.exports = (env) => {
  return webpackMerge.merge(baseWebpackConfig, {
    mode: process.env.NODE_ENV || 'production',
    plugins: [],
  });
};
