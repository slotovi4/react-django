const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = './leadmanager/frontend';

module.exports = {
  entry: `${root}/src/index.tsx`,
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, `${root}/static/frontend`),
    filename: 'main.min.js'
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${root}/templates/frontend/index.html`
    })
  ]
};
