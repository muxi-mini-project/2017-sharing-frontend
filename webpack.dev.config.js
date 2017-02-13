const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'login.js': ['./src/login.js', 'webpack-hot-middleware/client'],
        'feed.js': ['./src/feed.js', 'webpack-hot-middleware/client'],
        'toshare.js': ['./src/toshare.js', 'webpack-hot-middleware/client'],
        vendor: ["Backbone", "underscore", "jquery", "./src/style/reset.scss"]
    },
    output: {
        path: '/',
        publicPath: 'http://localhost:3000/dist/',
        filename: '[name]'
    },
    devtool: '#eval-source-map',
    module: {
        loaders: [{
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        },{
          test:/\.html$/,
          loader: "html-loader"
        }],
    },
    resolve: {
        extensions: ['', '.js','.scss'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ]
};
