<template>
  <div class="header_container">
    <!-- 右侧用户名、头像 -->
    <div class="header_right">
      <!-- 头像 -->
      <div class="avatar">
        <el-image :src="avatar" class="avatar_img"/>
      </div>
      <!-- 用户名 -->
      <div>
        <el-dropdown>
                    <span class="el-dropdown-link">
                    {{ nickname }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                    </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click.native="handleSelf">个人中心</el-dropdown-item>
              <el-dropdown-item>管理</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {ArrowDown} from "@element-plus/icons-vue";
import router from "@/router/index.js";
const nickname = ref("nickname")
const avatar = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')

function handleSelf(){
  router.push('/self')
}



</script>

<style scoped>
.header_container {
  display: flex;
  justify-content: right;
  align-items: center;
  box-sizing: border-box;
  height: 100%;

  .header_right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .avatar {
      cursor: pointer;
      margin-right: 12px;
      .avatar_img {
        width: 30px;
        height: 30px;
      }
    }
    .el-dropdown-link {
      cursor: pointer;
      display: flex;
      align-items: center;
      border: none;
      outline: none;
    }
  }
}
</style>