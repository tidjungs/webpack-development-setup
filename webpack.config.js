const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      'react-hot-loader/patch',
      './index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      Containers: './containers'
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}