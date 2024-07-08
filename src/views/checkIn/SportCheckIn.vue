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
      <el-button>批量下载</el-button>
    </el-col>
  </el-row>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="selection" width="55"/>
    <el-table-column prop="name" label="文件名" width="250" header-align="center" align="center"/>
    <el-table-column prop="date" label="日期" width="200" header-align="center" align="center"/>
    <el-table-column prop="context" label="概述" width="600" header-align="center"/>
    <el-table-column prop="download" label="下载" width="80" header-align="center" align="center"/>
    <el-table-column label="操作" header-align="center" align="center">
      <el-button class="download">
        <el-icon><Download /></el-icon>
      </el-button>
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
    date: '2016-05-03',
    name: 'Tom',
    context: '这是概述',
    download: '991'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    context: '这是概述',
    download: '991'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    context: '这是概述',
    download: '991'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    context: '这是概述',
    download: '991'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    context: '这是概述',
    download: '991'
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