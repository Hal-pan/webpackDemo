/**
 * Created by huangpan on 2016/11/5.
 */
const {resolve} = require("path");
const webpack = require("webpack");

require("babel-polyfill");

let config = {
  entry: ["whatwg-fetch", "babel-polyfill", `${__dirname}/src/js/component/index.jsx`],
  output: {
    path: resolve(__dirname, "bundle"),
    publicPath: "/assets/",
    filename: "bundle.js",
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        include: [resolve(__dirname, "src/js")],
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss", ".less"]
  },
  node: {
    console: true
  },
  stats: "verbose",
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      "name": "['react', 'antd']",
      "filename": "common.js"
    })
  ]
};

module.exports = config;
