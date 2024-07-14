<template>
  <el-row :gutter="20" style="margin-bottom: 20px">
    <el-col :span="7">
      <el-date-picker
          v-model="value"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="YYYY-MM-DD"
          date-format="YYYY/MM/DD"
      />
    </el-col>
    <el-col :span="7">
      <el-button type="primary">上传数据</el-button>
    </el-col>
  </el-row>
  <el-table :data="tableData" border style="width: 100%" >
    <el-table-column type="selection" width="55" align="center"/>
    <el-table-column type="index" label="id" width="55" align="center"/>
    <el-table-column prop="user_id" label="用户id" width="250"  align="center"/>
    <el-table-column prop="date" label="日期" width="200"  align="center"/>
    <el-table-column prop="project" label="运动项目" width="250"  align="center"/>
    <el-table-column prop="data" label="运动成绩" width="250"  align="center"/>
    <el-table-column label="操作"  align="center">
      <el-button type="success">修改</el-button>
      <el-button type="danger">删除</el-button>
    </el-table-column>
  </el-table>
  <div class="pagination-block">
    <el-pagination
        v-model:current-page="currentPage2"
        :page-sizes="[10, 20, 30, 40]"
        :size="size"
        :disabled="disabled"
        :background="background"
        layout="sizes, prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import {Download} from "@element-plus/icons-vue";
import { ref } from 'vue'
import type { ComponentSize } from 'element-plus'
const currentPage2 = ref(5)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

const tableData = [
  {
    id:'1',
    user_id:'001',
    date: '2016-05-03',
    project:'跨栏',
    data:'9s',
  },
  {
    id:'1',
    user_id:'001',
    date: '2016-05-03',
    project:'跨栏',
    data:'9s',
  },
  {
    id:'1',
    user_id:'001',
    date: '2016-05-03',
    project:'跨栏',
    data:'9s',
  },
  {
    id:'1',
    user_id:'001',
    date: '2016-05-03',
    project:'跨栏',
    data:'9s',
  },
  {
    id:'1',
    user_id:'001',
    date: '2016-05-03',
    project:'跨栏',
    data:'9s',
  },

]


const value = ref('')
</script>

<style>
.download{
  border: none;

}

.pagination-block{
  margin-top: 10px;
}
</style>