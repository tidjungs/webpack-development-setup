const path = resolve('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      './index'
    ]
  },
  modules: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}