const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  output: {
      filename: 'bundle.js',
      publicPath: '/static/',
      path: `${__dirname}/dist`
  },
  devtool: 'source-map',
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
      rules: [
          { 
            test: /\.tsx?$/, 
            exclude: /node_modules/,
            loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader', 'tslint-loader']
          },
          { 
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
          }
      ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    hot: true
  }
};