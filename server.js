/**
 * Created by huangpan on 2016/11/5.
 */
 import WebpackDevServer from "webpack-dev-server";
 import webpack from "webpack";
 import config from "./webpack.config";

 const port = 9000;

 config.entry.unshift('react-hot-loader/patch', `webpack-dev-server/client?http://localhost:${port}`, 'webpack/hot/only-dev-server')

 var server = new WebpackDevServer(webpack(config), {
   contentBase: "./src",
   hot: true,
   historyApiFallback: true,
   compress: true,
   publicPath: config.output.publicPath,
   headers: {
     "X-Custom-Header": "yes"
   },
   stats: {
     colors: true
   }
 });
 server.listen(port, "localhost", function() {
   console.log(`listener to http://localhost:${port}`);
 });
