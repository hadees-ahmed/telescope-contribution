const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
      publicPath: '/src',  
      watch: true
    },
  }
});
