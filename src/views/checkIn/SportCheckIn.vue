<template>
  <div class="content-container">
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
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55" align="center"/>
      <el-table-column type="index" label="ID" width="55" align="center"/>
      <el-table-column prop="user_id" label="用户ID" width="250" align="center"/>
      <el-table-column prop="date" label="日期" width="200" align="center"/>
      <el-table-column prop="project" label="运动项目" width="250" align="center"/>
      <el-table-column prop="data" label="运动成绩" width="250" align="center"/>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button type="success">修改</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-block">
      <el-pagination
          v-model:current-page="currentPage2"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          :background="background"
          layout="sizes, prev, pager, next"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue';

const currentPage2 = ref(1);
const size = ref('default');
const background = ref(true);
const disabled = ref(false);

const handleSizeChange = (val) => {
  console.log(`${val} items per page`);
};

const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`);
};

const tableData = [
  {id: '1', user_id: '001', date: '2016-05-03', project: '跨栏', data: '9s'},
  {id: '2', user_id: '002', date: '2016-05-03', project: '跳高', data: '1.8m'},
  {id: '3', user_id: '003', date: '2016-05-03', project: '跑步', data: '12s'},
  {id: '4', user_id: '004', date: '2016-05-03', project: '游泳', data: '1m'},
  {id: '5', user_id: '005', date: '2016-05-03', project: '跳远', data: '5m'}
];

const value = ref('');
</script>
<style scoped>
.content-container {
  padding: 20px;
  background-color: #f9f9f9;
}

.download {
  border: none;
  color: #409EFF;
}

.pagination-block {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
