const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  resolve: {
    extensions: [".webpack.js", ".js", ".vue", ".ts"]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  optimization: {
    concatenateModules: true //ModuleConcatenationPlugin
  }
};
