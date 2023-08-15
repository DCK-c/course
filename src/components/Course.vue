<template>
  <div class="full-page">
    <div class="split-pane">
      <div class="left-pane">
        <ul class="options">
          <li v-for="option in options" :key="option.value" :class="{ active: option.value === activeType }">
            <router-link :to="{ path: '/course', query: { type: option.value } }" :exact="true">{{ option.label }}</router-link>
          </li>
        </ul>
      </div>
      <div class="right-pane">
        <div class="content" v-html="renderedContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'; // 导入marked库用于渲染Markdown
import axios from "axios";
export default {
  name: 'Course',
  data() {
    return {
      activeType: parseInt(this.$route.query.type) || 1,
      options: [
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
        { label: '选项3', value: 3 },
        { label: '选项4', value: 4 },
        { label: '选项5', value: 5 },
        { label: '选项6', value: 6 },
      ],
      contentMap: {
        1: `# 内容1\n## 二级标题\nMarkdown内容1`,
        2: `# 内容2\nMarkdown内容2`,
        3: `# 内容3\nMarkdown内容3`,
        4: `# 内容4\nMarkdown内容4`,
        5: `# 内容5\nMarkdown内容5`,
        6: `# 内容6\nMarkdown内容6`,
      },
    };
  },
  computed: {
    renderedContent() {
      return marked(this.contentMap[this.activeType] || ''); // 使用marked库渲染Markdown内容
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        this.activeType = parseInt(route.query.type) || 1;
      },
    },
  },
  mounted(){
    setInterval(()=>{
      console.log("./auth/login,学号+123456")
      axios.get("http://localhost:29719/test?type=1");
    },3000)
  }
};
</script>

<style scoped>
.full-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.split-pane {
  display: flex;
  align-items: stretch;
  border: 1px solid #ccc;
  width: 100%; /* 充满屏幕 */
  height: 100%; /* 充满屏幕 */
}

.left-pane {
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
}

.right-pane {
  flex: 4;
  overflow-y: auto;
  padding: 20px;
}

.options {
  list-style: none;
  padding: 0;
}

.options li {
  margin-bottom: 10px;
}

.options li a {
  text-decoration: none;
  color: #333;
  cursor: pointer; /* 添加鼠标指针样式 */
}

.options li.active {
  font-weight: bold;
}

.content {
  line-height: 1.6;
  font-size: 16px;
  color: #333;
}
</style>
