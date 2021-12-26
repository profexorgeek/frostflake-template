const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/start.ts',
    output: {
        filename: './game.min.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts"]
    },
    watch: false,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 5000
    },
    devServer: {
        hot: true,
        port: 8080,
        static: {
            directory: __dirname,
            publicPath: "/"
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },{
                test: /\.js$/,
                exclude:[
                    (/node_modules/)
                ],
                loader: "source-map-loader"
            }
        ]
    }
}