<template>
  <div id="app">
    <Menu/>
    <el-container>
      <el-main>
        main
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/partials/Menu.vue'

export default {
  name: 'app',
  data() {
    return {
      currentDate: new Date()
    };
  },
  components: {
    Menu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i');
body {
  font-family: 'Nunito', 'Avenir',Helvetica, Arial, sans-serif;
  margin: 0
}
#app {
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
