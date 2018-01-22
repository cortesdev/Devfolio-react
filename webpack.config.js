var path = require('path');
var webpack = require('webpack');
var merge = require('merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebPackPlugin = require ('html-webpack-plugin');

var dest = path.join(__dirname, 'dist');
console.log(dest);

var webpackConfig = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
    // publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

if (process.env.NODE_ENV === 'production') {

  webpackConfig = merge(webpackConfig,{
    devtool: "source-map",
    entry : [
      './src/client/index.js'
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname
      },
      { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192&name=images/[name].[ext]'},
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap') },
      // fonts for IE and android < 4.4
      { test: /\.(ttf|eot|otf|woff|woff2)(\?.*)?$/,
        loader:  'file-loader?name=fonts/[name].[ext]'

      },
      { test: /\.(svg)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'

      },
    ]},
    plugins : [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new HtmlWebPackPlugin({
        filename: 'index.html',
        template: 'template/index.html'
      }),
      new ExtractTextPlugin("app.css"),
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
  });

}else{

  webpackConfig = merge(webpackConfig,{
    devtool: 'inline-source-map',
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          optional: ['runtime'],
          stage: 2,
          env: {
            development: {
              plugins: [
                'react-transform'
              ],
              extra: {
                'react-transform': {
                  transforms: [{
                    transform:  'react-transform-hmr',
                    imports: ['react'],
                    locals:  ['module']
                  }]
                }
              }
            }
          }
        }
      },
      { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/
        , loader: 'url?limit=100000&name=[name].[ext]'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }

    ]},
    entry : [
      'webpack-hot-middleware/client',
      './src/client/index.js'
    ],
    plugins : [
      new webpack.HotModuleReplacementPlugin()
    ]
  });

}

module.exports = webpackConfig;
