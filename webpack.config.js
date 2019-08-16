var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // optimization: {
    //     splitChunks: {
    //         name: 'common'
    //     }
    // },
    plugins: [

    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    }
};