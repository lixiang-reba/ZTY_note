import VueRouter from "vue-router";
import AboutVue from "../pages/AboutVue";
import HomeVue from "../pages/HomeVue";
import messageVue from "../pages/messageVue";
import newsVue from "../pages/newsVue";
import detailsVue from "../pages/detailsVue";
export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: AboutVue,
    },
    {
      path: "/home",
      component: HomeVue,
      children: [
        {
          path: "message",
          component: messageVue,
          children: [
            {
              name: "xiangqing",
              path: "details",
              component: detailsVue,
            },
          ],
        },
        {
          path: "news",
          component: newsVue,
        },
      ],
    },
  ],
});
