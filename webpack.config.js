const path = resolve('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      './index'
    ]
  }
}