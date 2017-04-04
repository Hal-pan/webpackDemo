/**
 * Created by huangpan on 2017/4/4.
 */
const config = require("./webpack.config.base.js");
const webpack = require("webpack");

config.devtool =  "source-map";

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production")
  })
);

module.exports = config;