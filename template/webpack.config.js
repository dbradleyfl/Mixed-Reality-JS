const path = require('path');

module.exports = {
  entry: "./src/app.js",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
