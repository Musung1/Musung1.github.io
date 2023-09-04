const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // 환경 변수 값을 포함시킬 수 있도록 DefinePlugin을 사용
    config.plugin('define').tap((definitions) => {
      definitions[0]['process.env'].VUE_APP_API_KEY = JSON.stringify(process.env.VUE_APP_API_KEY);
      return definitions;
    });
  },
})
// vue.config.js

