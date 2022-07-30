import Vue from "vue";
import App from "./App.vue";
// 全局混入
/* import { mixin1, mixin2 } from "./mixin";
Vue.mixin(mixin1);
Vue.mixin(mixin2); */
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  render: (h) => h(App),
});
