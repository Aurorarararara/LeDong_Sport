<template>
  <el-form :model="form" label-width="auto" class="form-container">
    <el-form-item label="姓名：" class="form-item">
      <el-input v-model="form.name" placeholder="请输入姓名"/>
    </el-form-item>

    <el-form-item label="性别：" class="form-item">
      <el-radio-group v-model="form.resource">
        <el-radio value="man">男</el-radio>
        <el-radio value="feman">女</el-radio>
      </el-radio-group>
    </el-form-item>

    <div v-for="(item, index) in form.sports" :key="index" class="sport-row">
      <el-form-item label="体育项目：" class="inline-item">
        <el-select v-model="item.project" placeholder="请选择体育项目" style="width: 240px">
          <el-option
              v-for="option in options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="体育成绩：" class="inline-item">
        <el-input v-model="item.score" placeholder="请输入体育成绩"/>
      </el-form-item>
      <el-form-item label="分值：" class="inline-item">
        <el-input v-model="item.value" placeholder="请输入分值"/>
      </el-form-item>
      <div class="button-container">
        <el-button type="danger" @click="removeSport(index)" class="inline-item" :disabled="form.sports.length === 1">删除</el-button>
      </div>
    </div>

    <div class="action-buttons">
      <el-button type="primary" @click="addSport" class="add-button">添加一行</el-button>
      <el-button type="success" @click="showDialog" class="inline-item">计算成绩</el-button>
    </div>

    <el-dialog :visible.sync="dialogVisible" title="计算结果">
      <div v-for="(item, index) in form.sports" :key="index">
        <p>{{ item.project }}: {{ item.achievement }}</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </el-form>
</template>

<script setup>
import {ref} from 'vue'

const form = ref({
  name: '',
  resource: '',
  sports: [
    {project: '', score: '', value: '', achievement: ''}
  ]
})

const options = [
  {value: 'Option1', label: '100米'},
  {value: 'Option2', label: '肺活量'},
  {value: 'Option3', label: '1000米'},
  {value: 'Option4', label: '跨栏'},
  {value: 'Option5', label: '篮球'},
  {value: 'Option6', label: '足球'},
  {value: 'Option7', label: '坐位体前屈'},
]

const dialogVisible = ref(false)

const addSport = () => {
  form.value.sports.push({project: '', score: '', value: '', achievement: ''})
}

const removeSport = (index) => {
  if (form.value.sports.length > 1) {
    form.value.sports.splice(index, 1)
  }
}

const calculateAchievement = (item) => {
  item.achievement = item.score * item.value
}

const calculateAllAchievements = () => {
  form.value.sports.forEach(item => {
    calculateAchievement(item)
  })
}

const showDialog = () => {
  calculateAllAchievements()
  dialogVisible.value = true
}
</script>

<style lang="scss" scoped>
.form-container {
  max-width: 1300px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.sport-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;

  .inline-item {
    flex: 1;
    margin-right: 20px;
    margin-bottom: 10px;

    &:last-child {
      margin-right: 0;
    }

    input {
      width: 100%;
    }
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

.form-item {
  margin-bottom: 20px;
  width: 300px;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  .add-button, .inline-item {
    padding: 10px 20px;
    border-radius: 4px;
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
      background-color: #409eff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    &:active {
      background-color: #66b1ff;
    }
  }
}

.el-dialog {
  .el-dialog__footer {
    display: flex;
    justify-content: center;
  }
}
</style>
