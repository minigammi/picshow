var path = require('path')
var webpack = require('webpack')

var mode = process.env.NODE_ENV || 'development'

var config = {
    entry: [
        path.join(__dirname, 'src') + '/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/public/',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(mode)
            }
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ]
    },
}

if (mode == 'production') {
    config.devtool = 'cheap-module-source-map'
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compressor: {
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            warnings: false,
            screw_ie8: false
        },
        mangle: {
            screw_ie8: false
        },
        output: {
            screw_ie8: false
        }
    }))
    config.module.loaders.unshift({
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [
            path.resolve(__dirname, 'src'),
        ],
    })
}
else {
    config.devtool = 'cheap-module-eval-source-map'
    config.entry.unshift('webpack-hot-middleware/client')
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    config.module.loaders.unshift({
        test: /\.js$/,
        loaders: ['react-hot', 'babel-loader'],
        include: [
            path.resolve(__dirname, 'src'),
        ],
    })
}

module.exports = config

