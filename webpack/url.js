module.exports = () => {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        }
      ]
    }
  }