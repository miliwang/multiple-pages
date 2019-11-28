/*
 * @Author: your name
 * @Date: 2019-11-26 16:09:30
 * @LastEditTime: 2019-11-28 11:17:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /source_code/src/main.js
 */
import "../../style/index.scss";
import "normalize.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "lib-flexible/flexible";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
