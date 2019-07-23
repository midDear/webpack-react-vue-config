const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        hot: true,
        inline: true,
        historyApiFallback: true,
        host: "localhost",
        https: false,
        index: 'index.html',
        // proxy: {
        //     "/api": "http://localhost:3000"
        //   }
        // https: {
        //     key: fs.readFileSync("/path/to/server.key"),
        //     cert: fs.readFileSync("/path/to/server.crt"),
        //     ca: fs.readFileSync("/path/to/ca.pem"),
        //   }
    }
});