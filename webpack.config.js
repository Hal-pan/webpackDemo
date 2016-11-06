/**
 * Created by huangpan on 2016/11/5.
 */

var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [`${__dirname}/src/index.js`],
  output: {
      path:path.resolve(__dirname, "bundle"),
      publicPath:"/js/",
      filename: "bundle.js"
   },
  module: {
  loaders: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'babel'
      // },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "postcss", "sass?sourceMap"]
      }
    ]
  },
  resolve:{
    extensions:["", ".js", ".jsx", ".scss", ".css"]
  },
  devtool:"eval-source-map",
  node:{
    console: true
  }
}
