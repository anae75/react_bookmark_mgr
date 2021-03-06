var path = require('path');

module.exports = {

  entry: {
    bundle: './public/script.js'
  },

  output: {
    path: __dirname + '/public',
    filename: "[name].js"
  },

  resolve: {
    root: [path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ["react", "es2015"] }
      },
      { test: /\.css$/,
        loader: 'style!css'     // run css-loader followed by style-loader
      }
    ]
  }

};
