<!--
 * @Author: your name
 * @Date: 2019-11-26 16:09:30
 * @LastEditTime: 2019-11-28 18:02:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /multiple-pages/src/pages/app/views/Home.vue
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
