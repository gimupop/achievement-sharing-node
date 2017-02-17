const webpack = require("webpack")
const testApiHost = process.env.TEST_API_HOST

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: './public',
    filename: 'app.cross.browser.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('crossBrowser'),
      'process.env.TEST_API_HOST': JSON.stringify(testApiHost)
    })
  ]
}
