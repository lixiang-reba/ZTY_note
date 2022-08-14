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
      // 包含此请求前缀才会帮你转发 这样可以灵活控制是否走代理
      "/atguigu": {
        target: "http://localhost:5000",
        // 保证代理服务器转发的时候不带/atguigu路径
        pathRewrite: { "^/atguigu": "" },
        ws: true, //用于支持websocket
        // 用于跨域伪造 代理服务器告诉真正的服务器：‘我是5000端口’
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
