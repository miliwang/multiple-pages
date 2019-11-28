/*
 * @Author: mili
 * @Date: 2019-11-26 16:09:30
 * @LastEditTime: 2019-11-28 18:02:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /source_code/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/app",
    name: "app",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
