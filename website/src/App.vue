<template>
  <div id="app">
    <Menu/>
    <a href="https://drive.google.com/file/d/1laPQoE0X7eOC3Ba1BaE6Na_akBZbpA8t/view" target="_blank" class="get-resume">Get My Resume</a>
    <el-container>
      <el-main>
        <Content />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/partials/Menu.vue'
import Content from './components/Content.vue'

export default {
  name: 'app',
  data() {
    return {
      currentDate: new Date()
    };
  },
  components: {
    Menu,
    Content
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i');
body {
  font-family: 'Nunito', 'Avenir',Helvetica, Arial, sans-serif;
  margin: 0;
  background: #efefef
}
.get-resume {
  padding: 2px;background: #1ba39c;display: block;text-align: center;color: white;font-weight: bold;
}
</style>
