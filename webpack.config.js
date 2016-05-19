// webpack configuration file
// this config file is modified from source retrieved from: https://www.npmjs.com/package/webpack-config

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: __dirname + "/src/js/scripts.js",
    module: {
      loaders: [
        { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" ,
            query: {
                presets: ['react', 'es2015', 'stage-0']
            }
        }
      ]
    },
    output: {
        path: __dirname + "/build/",
        filename: "scripts.min.js"
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    plugins: [
        new webpack.ProvidePlugin({
          "$":"jquery",
          "jQuery":"jquery",
          "window.jQuery":"jquery"
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};