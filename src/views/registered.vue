<template>
  <!-- 根div -->
  <div class="login_container">
    <!-- 登陆表单 -->
    <div class="login_form">
      <h3 class="title">乐动体育</h3>
      <el-form ref="formRef" :model="loginForm">
        <!-- 用户名 -->
        <el-form-item>
          <el-input v-model="loginForm.account" placeholder="请输入账号">
            <template #prefix>
              <el-icon class="el-input__icon">
                <User/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码">
            <template #prefix>
              <el-icon class="el-input__icon">
                <Lock/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <!--确认密码-->
        <el-form-item>
          <el-input v-model="loginForm.password" type="password" placeholder="请确认密码">
            <template #prefix>
              <el-icon class="el-input__icon">
                <Lock/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <!-- 按钮 -->
          <el-button style="width: 100%;" type="primary" @click="handleRegistered">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {Lock, User} from "@element-plus/icons-vue";
// 导入 ref
import {ref} from 'vue';
import router from "@/router/index.js";
// 声明表单绑定值
const loginForm = ref({
  account: undefined,
  password: undefined,
  rememberMe: undefined
})


// 声明登录录方法
function handleRegistered() {
  alert("注册成功！")
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.login_container {
  // 背景图
  background-image: url('../assets/background/1.jpg');
  background-size: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;

  .login_form {
    display: flex;
    justify-content: center;
    align-items: center;
    //设置换行
    flex-direction: column;
    width: 40%;
    background-color: #fff;

    .title {
      margin-bottom: 20px;
    }
  }
}

// 设置form的宽度
.el-form {
  width: 60%;
}

.el-form-item {
  width: 100%;
}


</style>