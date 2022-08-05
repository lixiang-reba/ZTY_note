const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  // 开启代理服务器（方式一） 缺点：1、无法代理多个端口 2、无法决定是否走代理
  /*  devServer: {
    proxy: "http://localhost:5000",
  }, */
});
