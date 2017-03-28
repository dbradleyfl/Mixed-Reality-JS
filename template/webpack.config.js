const path = require('path');

module.exports = {
  entry: "./src/app.js",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  devServer: {
    contentBase: [path.join(__dirname), path.join(__dirname, "public")],
    publicPath: "/"
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
