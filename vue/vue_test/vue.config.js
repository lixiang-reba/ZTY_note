const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  // 开启代理服务器（方式一） 缺点：1、无法代理多个端口 2、无法灵活控制是否走代理
  /*  devServer: {
    proxy: "http://localhost:5000",
  }, */
  // 开启代理服务器（方式一）
  devServer: {
    proxy: {
      "/atguigu": {
        target: "http://localhost:5000",
        pathRewrite: { "^/atguigu": "" },
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头的host值
      },
      "/demo": {
        target: "http://localhost:5001",
        pathRewrite: { "^/demo": "" },
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头的host值
      },
    },
  },
});
