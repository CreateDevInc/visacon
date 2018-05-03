const path = require('path');
const WebpackOnBuildPlugin = require('on-build-webpack');
const shell = require('shelljs');

module.exports = {
  mode: "development",
  entry: "./app/src/js/index.js",
  output: {
    path: path.resolve(__dirname, "app/dist"),
    filename: "main.js"
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
        use: [
          { loader: "style-loader" },
          { loader: "css-loader"   },
          { loader: "sass-loader"  }
        ]
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
    })
  ]
};