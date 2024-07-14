<!-- src/views/AnnouncementPage.vue -->
<template>
  <el-container>
    <el-header>
      <h2>公告</h2>
    </el-header>
    <el-main>
      <div class="announcement-container">
        <el-card v-for="announcement in announcements" :key="announcement.id" class="announcement-card" shadow="hover">
          <h3 class="announcement-title">{{ announcement.title }}</h3>
          <p class="announcement-content">{{ announcement.content }}</p>
          <el-divider></el-divider>
          <el-row>
            <el-col :span="12">
              <el-tag type="info">{{ announcement.date }}</el-tag>
            </el-col>
            <el-col :span="12" class="author">
              <el-tag type="success">{{ announcement.author }}</el-tag>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'AnnouncementPage',
  data() {
    return {
      announcements: [
        {
          id: 1,
          title: '系统维护通知',
          content: '由于系统维护，本周六将暂停服务。',
          date: '2024-07-15',
          author: '管理员'
        },{
          id: 1,
          title: '系统维护通知',
          content: '由于系统维护，本周六将暂停服务。',
          date: '2024-07-15',
          author: '管理员'
        },{
          id: 1,
          title: '系统维护通知',
          content: '由于系统维护，本周六将暂停服务。',
          date: '2024-07-15',
          author: '管理员'
        },{
          id: 1,
          title: '系统维护通知',
          content: '由于系统维护，本周六将暂停服务。',
          date: '2024-07-15',
          author: '管理员'
        },{
          id: 1,
          title: '系统维护通知',
          content: '由于系统维护，本周六将暂停服务。',
          date: '2024-07-15',
          author: '管理员'
        },{
          id: 1,
          title: '系统维护通知',
          content: '由于系统维护，本周六将暂停服务。',
          date: '2024-07-15',
          author: '管理员'
        },{
          id: 1,
          title: '系统维护通知',
          content: '由于系统维护，本周六将暂停服务。',
          date: '2024-07-15',
          author: '管理员'
        },{
          id: 1,
          title: '系统维护通知',
          content: '由于系统维护，本周六将暂停服务。',
          date: '2024-07-15',
          author: '管理员'
        },{
          id: 1,
          title: '系统维护通知',
          content: '由于系统维护，本周六将暂停服务。',
          date: '2024-07-15',
          author: '管理员'
        },
        // 其他公告内容...
      ]
    }
  }
}
</script>

<style scoped>
.announcement-container {
  padding: 20px;
}

.announcement-card {
  margin-bottom: 20px;
  transition: box-shadow 0.3s ease; /* 添加过渡效果 */
}

.announcement-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.announcement-title {
  font-size: 1.5rem;
  color: #333;
}

.announcement-content {
  line-height: 1.6;
}

.author {
  text-align: right;
}
</style>
