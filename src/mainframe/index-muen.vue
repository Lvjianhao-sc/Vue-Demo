
<template>
	<div >
		<el-menu
		  class="el-menu-demo"
		  mode="horizontal"
		  background-color="#4DA3FB"
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
		name:'muen',
		created:function(){
			this.$message('正在初始化菜单数据..');
		    this.GlobalFunc.log('---初始化菜单---')
			this.$message({
				message: '初始化菜单成功',
				type: 'success',
				showClose:true
			});			
		},
		methods:{
			createMenu(){
				
			},
		}
		
	}
</script>

<style>


</style>
