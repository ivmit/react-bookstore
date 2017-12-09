const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HTMLWebpackPlugin({
    inject: true,
    templateContent: templateContent()
  })
];

module.exports = require('./webpack.shared.config')({
  entry: [
    'react-hot-loader/patch',
    path.join(process.cwd(), 'src/index.tsx')
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  loaders: [
		{
			enforce: 'pre',
			test: /\.js$/,
			loader: 'source-map-loader'
		}
  ],
  resolve: {
    modules: ['app', 'src', 'node_modules'],
    alias: {
      'src': path.join(process.cwd(), 'src')
    }
  },
  plugins: plugins,
  devtool: 'source-map',
	devServer: {
		host: 'localhost',
		port: 3000,
		historyApiFallback: true,
		hot: true
  }
});

function templateContent() {
  return fs.readFileSync(
    path.resolve(process.cwd(), 'index.html')
  ).toString();
}