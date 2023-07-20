const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/calc-card/'
  //   : '/',
    publicPath:'/calc-card',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import @/assets/styles/main.scss",
      },
    },
  },
})
