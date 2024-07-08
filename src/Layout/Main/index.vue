<template>
  <router-view></router-view>
</template>

<script setup>
import {RouterView} from 'vue-router'
import router from "@/router/index.js";
import {ref} from "vue";


// 选中
function gotoTab(path) {
  // 路由页面
  router.push(path);
}

// 移除
function closeTab(path) {

}
</script>

<style scoped>

</style>