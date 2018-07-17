workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    module: './src/index.js'
  },
  output: {
    path: __dirname + '/dist/js',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new workboxPlugin.GenerateSW({
      cacheId: 'shachiku-chan',
      swDest: 'sw.js',
      importsDirectory: '.',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('./image/'),
          handler: 'cacheFirst'
        }
      ]
    })
  ],
  devServer: {
    contentBase: 'dist/',
    watchContentBase: true,
    inline: true,
    host: '127.0.0.1',
    port: 3001
  }
};
