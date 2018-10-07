const path = require('path');

module.exports = {

  entry: [
    './iframe/iframe.js'
  ],

  output: {
    filename: 'iframe.js',
    path: path.join(__dirname, '../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json'],
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'react', "stage-0"]
        }
      }
    ]
  }
};
