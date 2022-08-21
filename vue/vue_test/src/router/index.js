import VueRouter from "vue-router";
import AboutVue from "../pages/AboutVue";
import HomeVue from "../pages/HomeVue";
import messageVue from "../pages/messageVue";
import newsVue from "../pages/newsVue";
import detailsVue from "../pages/detailsVue";
const router = new VueRouter({
  routes: [
    {
      path: "/about",
      component: AboutVue,
      meta: { isAuth: true, title: "关于" },
    },
    {
      name: "zhuye",
      path: "/home",
      component: HomeVue,
      meta: { title: "主页" },
      children: [
        {
          name: "xiaoxi",
          path: "message",
          component: messageVue,
          meta: { isAuth: true, title: "主页" },
          children: [
            {
              name: "xiangqing",
              path: "details/:id/:title",
              component: detailsVue,
              props: true,
              meta: { title: "详情" },
            },
          ],
        },
        {
          name: "xinwen",
          path: "news",
          component: newsVue,
          meta: { title: "新闻" },
        },
      ],
    },
  ],
});
/* router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.meta.isAuth) {
    if (localStorage.getItem("school") == "atguigu") {
      next();
    } else alert("无权限");
  } else {
    next();
  }
}); */
router.afterEach((to, from) => {
  document.title = to.meta.title || "硅谷系统";
});
export default router;
