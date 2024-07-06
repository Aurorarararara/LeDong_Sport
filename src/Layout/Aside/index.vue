<template>
  <div>
    <h3 class="ledong_title">乐动体育</h3>
    <el-menu
        background-color="#304157"
        class="el-menu"
        default-active="2"
        text-color="#b1becd"
        active-text-color="#336cab"
        :router = "true"
    >
      <el-menu-item v-for="item in ld">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>{{item.name}}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import {Location} from "@element-plus/icons-vue";
import {ref} from "vue";
import router from "@/router/index.js";

const ld = ref([
  {
    path:'/notice',
    name:'公告'
  },
  {
    path:'/notice',
    name:'运动打卡'
  },
  {
    path:'/notice',
    name:'成绩计算'
  }
])


</script>

<style scoped>
.ledong_title{
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>