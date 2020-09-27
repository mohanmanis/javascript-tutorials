var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    watchContentBase: true
  },
  watchOptions: {
    ignored: ['__test__/**','build/**','config/**','coverage/**','dist/**','static/**','public/**', 'node_modules/**']
},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

  ],
  performance: { hints: false }
};
