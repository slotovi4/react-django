const path = require('path');
const root = './leadmanager/frontend';

module.exports = {
  entry: `${root}/src/index.tsx`,
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, `${root}/static/frontend`),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      }
    ]
  }
};
