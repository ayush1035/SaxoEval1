var path = require('path');
var webpack = require('webpack');
const  HtmlWebpackPlugin  =  require('html-webpack-plugin');


module.exports = {
  devtool: 'eval',
  devServer: { historyApiFallback: true },

  entry: './src/index.js',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new  HtmlWebpackPlugin({
                  title:  'My App',
                  template:  './public/index.html'
            }),


  ],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test:  /\.css$/,

                        loader:  [{
                              loader:  'style-loader'
                        },
        {
                              loader:  'css-loader'
                        }
        ]

      }

    ]
  },
};