<!--
 * @Author: your name
 * @Date: 2019-11-26 16:08:35
 * @LastEditTime: 2019-11-28 17:46:17
 * @LastEditors: your name
 * @Description: In User Settings E
 * @FilePath: /multiple-pages/src/pages/app/App.vue
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/app">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
</style>
