const webpack = require("webpack")

module.exports = {
  entry: [
    './views/js/feed.js',
  ],
  output: {
    path: './public',
    filename: 'app.js',
    publicPath: 'http://localhost:8888'
  },
  watch: true,  
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    contentBase: 'public'
  },
  devtool: 'source-map'
}
