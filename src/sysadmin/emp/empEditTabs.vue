<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="基本信息"  name="first"><empInfo></empInfo></el-tab-pane>
    <el-tab-pane label="角色信息"  name="second">配置管理</el-tab-pane>
    <el-tab-pane label="岗位信息"  name="third">角色管理</el-tab-pane>
  </el-tabs>
</template>
<script>
  import empInfo from "./empInfo"
  import empPosition from "./empPosition"
  import empRole from "./empRole"
  export default {
	components:{
		"empInfo":empInfo
	},
	name:'empEditTabs',
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>