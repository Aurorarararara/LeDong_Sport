<template>
  <div class="head">公告栏</div>
  <el-card class="announcement-board">
    <el-timeline>
      <el-timeline-item
          v-for="item in items"
          :key="item.id"
          :timestamp="item.date"
          placement="top"
      >
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 1, date: '2024-07-07', title: '跨栏盛宴', content: '这里是公告内容 1...' },
  { id: 2, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 3, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 4, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 5, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 6, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 7, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 8, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 9, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 10, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 11, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 12, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 13, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 14, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 15, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 2...' },
  { id: 16, date: '2024-05-14', title: '公告标题 2', content: '这里是公告内容 10...' },
])

// 对 items 按 id 进行降序排列
items.value.sort((a, b) => b.id - a.id);
</script>

<style>
.head{
  margin-left: 40px;
  font-size: 20px;
}

.announcement-board {
  margin: 30px;
  max-height: 700px; /* 设置最大高度 */
  overflow-y: auto; /* 启用垂直滚动条 */
}
</style>
