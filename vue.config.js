module.exports = {
  devServer: {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api' : '/'
        }
      }
    }
  }
}