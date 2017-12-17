const path = require('path');

const rootPath = './src';

module.exports = {
  entry: {
    app_js: [
      rootPath + '/app.js'
    ],
    playwidget: [
      rootPath + '/PlayWidget.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|static)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};
