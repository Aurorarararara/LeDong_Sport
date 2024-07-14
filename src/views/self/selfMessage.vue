<template>
  <el-card class="user-info-card">
    <div slot="header" class="clearfix">
      <span style="margin-right: 20px">个人信息</span>
      <!-- 编辑、保存和取消按钮 -->
      <el-button type="primary" @click="editMode = true" v-if="!editMode">编辑</el-button>
      <el-button type="success" @click="saveUserInfo" v-if="editMode">保存</el-button>
      <el-button type="info" @click="cancelEdit" v-if="editMode">取消</el-button>
    </div>
    <div class="user-info">
      <el-row :gutter="20">
        <el-col :span="8">
          <!-- 头像区域 -->
          <div class="avatar-container">
            <el-avatar :size="100" :src="avatarUrl"></el-avatar>
            <el-upload
                class="avatar-uploader"
                action="//jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
              <el-button size="small" type="primary">点击上传头像</el-button>
            </el-upload>
          </div>
          <!-- 表单区域 -->
          <el-form :model="userInfo" :rules="rules" ref="userInfoForm" label-width="80px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="userInfo.username" :disabled="!editMode"></el-input>
            </el-form-item>
            <el-form-item label="学校" prop="school">
              <el-input v-model="userInfo.school" :disabled="!editMode"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
              <el-select v-model="userInfo.gender" :disabled="!editMode">
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="female"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="身高" prop="height">
              <el-input v-model="userInfo.height" :disabled="!editMode"></el-input>
            </el-form-item>
            <el-form-item label="体重" prop="weight">
              <el-input v-model="userInfo.weight" :disabled="!editMode"></el-input>
            </el-form-item>
            <el-form-item label="学号" prop="studentId">
              <el-input v-model="userInfo.studentId" :disabled="!editMode"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="userInfo.email" :disabled="!editMode"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="userInfo.phone" :disabled="!editMode"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from 'vue';

const userInfo = ref({
  username: '张三',
  school: '东南大学成贤学院',
  gender: 'male',
  height: '175cm',
  weight: '70kg',
  studentId: '20230001',
  email: 'zhangsan@example.com',
  phone: '18812345678'
});

const editMode = ref(false);

const rules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  school: [
    { required: true, message: '请输入学校名称', trigger: 'blur' }
  ],
  gender: [
    { required: true, message: '请选择性别', trigger: 'blur' }
  ],
  height: [
    { required: true, message: '请输入身高', trigger: 'blur' }
  ],
  weight: [
    { required: true, message: '请输入体重', trigger: 'blur' }
  ],
  studentId: [
    { required: true, message: '请输入学号', trigger: 'blur' }
  ],
  email: [
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' }
  ]
});

const avatarUrl = ref('https://example.com/avatar.jpg');

const handleAvatarSuccess = (response, file) => {
  avatarUrl.value = URL.createObjectURL(file.raw);
  console.log('上传成功:', response);
};

const beforeAvatarUpload = (file) => {
  const isJPG = file.type === 'image/jpeg';
  const isPNG = file.type === 'image/png';
  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isJPG && !isPNG) {
    console.error('上传头像图片只能是 JPG 或 PNG 格式');
    return false;
  }
  if (!isLt2M) {
    console.error('上传头像图片大小不能超过 2MB');
    return false;
  }
  return isJPG || isPNG && isLt2M;
};

const saveUserInfo = () => {
  $refs.userInfoForm.validate((valid) => {
    if (valid) {
      console.log('保存用户信息:', userInfo.value);
      editMode.value = false;
      $message.success('保存成功');
    } else {
      $message.error('表单验证失败');
      return false;
    }
  });
};

const cancelEdit = () => {
  userInfo.value = {
    username: '张三',
    school: '东南大学成贤学院',
    gender: 'male',
    height: '175cm',
    weight: '70kg',
    studentId: '20230001',
    email: 'zhangsan@example.com',
    phone: '18812345678'
  };
  editMode.value = false;
};
</script>

<style scoped>
.user-info-card {
  max-width: 800px;
  margin: 20px auto;
}

.user-info {
  padding: 20px;
}

.avatar-container {
  text-align: center;
  margin-bottom: 20px;
}

.avatar-uploader {
  margin-top: 10px;
}
</style>
