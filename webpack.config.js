const path = require('path');
module.exports = {
  entry: './index.jsx',
  output: {
    path: path.resolve('./build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: { presets: ['react', 'es2015', 'stage-0'] }
      }
    ]
  },
  resolve: { extensions: ['', '.js', '.jsx'] }
};
