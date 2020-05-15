const path = require('path');

module.exports = {
    mode: 'production',
    entry: './start.js',
    output: {
        filename: 'game.min.js',
        path: path.resolve(__dirname)
    },
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 5000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'start.js'),
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules/frostflake')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-private-methods',
                            '@babel/plugin-transform-runtime'
                        ]
                    }   
                }
            }
        ]
    },
    devServer: {
        hot: true,
        port: 8080,
        publicPath: '/',
        stats: {
            hash: false,
            chunks: false,
            warnings: false
        }
    }
}