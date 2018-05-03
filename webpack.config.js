const path = require('path');

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
      }
    ]
  }
};