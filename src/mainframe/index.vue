<template>
  <div class="hello">
	
    <div class="line"></div>
	
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#409EFF"
      text-color="#ffffff"
      active-text-color="#ffffff"
	  >
      <el-menu-item index="1">我的工作</el-menu-item>
	  <el-submenu index="2">
	    <template slot="title">系统管理</template>
	    <el-menu-item index="2-1">机构人员管理</el-menu-item>
	    <el-menu-item index="2-2">参数配置</el-menu-item>
	    <el-menu-item index="2-3">品种配置</el-menu-item>
	    <el-submenu index="2-4">
	      <template slot="title">选项4</template>
	      <el-menu-item index="2-4-1">选项1</el-menu-item>
	      <el-menu-item index="2-4-2">选项2</el-menu-item>
	      <el-menu-item index="2-4-3">选项3</el-menu-item>
	    </el-submenu>
	  </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        window.console.log(key, keyPath);
      }
    }
  }



</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/*.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #E6A23C !important;;
}*/
</style>
