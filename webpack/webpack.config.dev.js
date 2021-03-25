const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.base");

module.exports = (env) => {
  console.log("env", process.env.NODE_ENV);
  return webpackMerge.merge(baseWebpackConfig, {
    mode: process.env.NODE_ENV || 'development',
    plugins: [],
    devServer: {
      historyApiFallback: true,
      port: 8888,
    },
  });
};
