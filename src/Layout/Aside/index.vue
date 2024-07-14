<template>
  <div>
    <h3 class="ledong_title">乐动体育</h3>
    <el-menu
        background-color="#304157"
        class="el-menu"
        default-active="2"
        text-color="#b1becd"
        active-text-color="#336cab"
        :router="true"
        default-openeds="['1','2']"
    >
      <!-- 一级菜单 -->
      <el-sub-menu :index="item.id+''" v-for="item in menulist" :key="item.id">
        <!-- 一级菜单模板区域 -->
        <template #title>
          <span>{{item.authName}}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id">
          <template #title>
            <span>{{subItem.authName}}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import {ref} from "vue";



const menulist = ref([
  {
    id: 1,
    authName: '公告',
    children: [
      {
        id:11,
        path:'lesson',
        authName: '课程安排'
      },
      {
        id: 12,
        path: 'notice',
        authName: '课程通知',
      },
      {
        id: 13,
        path: 'teachingMaterials',
        authName: '教学资料',
      },
    ],
  },
  {
    id: 2,
    authName: '体育打卡',
    children: [
      {
        id: 21,
        path: 'sportCheckIn',
        authName: '运动打卡',
      },
      {
        id: 22,
        path: 'gradeCalculate',
        authName: '成绩计算',
      },
    ],
  },
])


</script>

<style scoped>
.ledong_title {
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>