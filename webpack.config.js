var path = require("path");
var webpack = require("webpack");
var merge = require("webpack-merge");

var config = {
  output: {
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".json"]
  },
  externals: {
    vue: "vue"
  },
  devtool: "#source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      mangle: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + "/src/main.js"),
    output: {
      filename: "keep-ratio.min.js",
      libraryTarget: "window"
    }
  })
];
