const path = require('path');
const WebpackOnBuildPlugin = require('on-build-webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const shell = require('shelljs');

module.exports = {
  mode: "development",
  entry: {
    main: "./app/src/js/index.js",
    styles: "./app/src/sass/styles.scss"
  },
  output: {
    path: path.resolve(__dirname, "app/dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        // use: [
        //   { loader: "style-loader" },
        //   { loader: "css-loader"   },
        //   { loader: "sass-loader"  }
        // ]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader"   },
            { loader: "sass-loader"  }
          ]
        })
      },
      {
        test: /\.pug$/,
        use: {
          loader: "raw-loader"
        }
      }
    ]
  },
  plugins: [
    new WebpackOnBuildPlugin(stats => {
      shell.exec('npm run views');
    }),
    new ExtractTextPlugin("styles.css")
  ]
};