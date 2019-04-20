module.exports = {
  module: {
    rules: [
      {
        test: /\.js|tsx|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
