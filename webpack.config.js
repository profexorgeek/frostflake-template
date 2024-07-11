const path = require('path');

module.exports = {
  entry: './src/start.ts',  // Entry point of your application
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',  // Adjust this based on your server setup
  },
  devtool: 'source-map',  // Generate sourcemaps
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
