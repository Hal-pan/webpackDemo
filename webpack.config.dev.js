/**
 * Created by huangpan on 2017/4/4.
 */
const {resolve, join} = require("path");
const config = require("./webpack.config.base.js");
const webpack = require("webpack");

const port = 9000;

config.module.rules.push({
  enforce: "pre",
    test: /\.js(x)?$/,
  include: [resolve(__dirname, "src/js")],
  use: "eslint-loader",
});

config.devtool =  "eval-source-map";

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("development")
  })
);

config.entry.unshift("react-hot-loader/patch", `webpack-dev-server/client?http://localhost:${port}`, "webpack/hot/only-dev-server");
config.devServer = {
  contentBase: join(__dirname, "src"),
  compress: true,
  port: port,
  historyApiFallback: true,
  hot: true,
  open: true,
  inline: true,
  publicPath: "/assets/"
};

module.exports = config;