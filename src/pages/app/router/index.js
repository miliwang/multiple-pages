/*
 * @Author: mili
 * @Date: 2019-11-26 16:09:30
 * @LastEditTime: 2019-11-28 11:15:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /source_code/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import app from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "app",
    component: app
  }
];

const router = new VueRouter({
  routes
});

export default router;
