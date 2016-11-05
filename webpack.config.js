/**
 * Created by huangpan on 2016/11/5.
 */

import webpack from "webpack";
import path from "path";

export default {
  entry: [`${__dirname}/src/index.js`],
  output: {
      path:path.resolve(__dirname, "bundle"),
      publicPath:"/js/"
      filename: "bundle.js"
   },
  module: {
  loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "postcss", "sass"]
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
