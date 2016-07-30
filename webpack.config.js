var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client?http://localhost:9000/',
        './client/main/main.js'
    ],
    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: path.join(__dirname, '/node_modules/'),
            include: [
                path.join(__dirname, '/client/'),
                path.join(__dirname, '/shared/')
            ]
        }]
    },
    resolve: {
      modulesDirectories: [
        'modules',
        'node_modules',
        'web_modules',
      ],
    }
}
