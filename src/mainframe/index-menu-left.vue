<template>
<div style = 'height:400px;border:1px solid #cccccc;'>
	<el-dialog
	  title="朱发营的诞生记录"
	  :visible.sync="drawer"
	   v-if='drawer'
	  :direction="direction"
	  :before-close="dialogClose"
	  top="20px"
	>
	  <!-- 表单内容 -->·
	  <template>
		  <el-calendar :v-if="key==2" v-model="value">
		  </el-calendar>
	  </template>
	</el-dialog>
	<!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
	  <el-radio-button :label="false">展开</el-radio-button>
	  <el-radio-button :label="true">收起</el-radio-button>
	</el-radio-group>-->
	<el-menu default-active="1-4-1" style="margin-top:0;border: none;" class="el-menu-vertical-demo" @select="clickMenu" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
	  <el-submenu index="1">
		<template slot="title">
		  <i class="el-icon-location"></i>
		  <span slot="title">导航一</span>
		</template>
		<el-menu-item-group>
		  <span slot="title">分组一</span>
		  <el-menu-item index="1-1">选项1</el-menu-item>
		  <el-menu-item index="1-2">选项2</el-menu-item>
		</el-menu-item-group>
		<el-menu-item-group title="分组2">
		  <el-menu-item index="1-3">选项3</el-menu-item>
		</el-menu-item-group>
		<el-submenu index="1-4">
		  <span slot="title">选项4</span>
		  <el-menu-item index="1-4-1">选项1</el-menu-item>
		</el-submenu>
	  </el-submenu>
	  <el-menu-item index="2">
		<i class="el-icon-date"></i>
		<span slot="title">朱发营的纪念日</span>
	  </el-menu-item>
	  
	  <el-menu-item index="3">
		<i class="el-icon-setting"></i>
		<span slot="title">导航四</span>
	  </el-menu-item>
	  <el-menu-item index="4">
	  		<i class="el-icon-menu"></i>
	  		<span slot="title">导航二</span>
	  </el-menu-item>
	  <el-menu-item index="5">
	  		<i class="el-icon-setting"></i>
	  		<span slot="title">导航四</span>
	  </el-menu-item>
	  <el-menu-item index="6">
	  		<i class="el-icon-setting"></i>
	  		<span slot="title">导航四</span>
	  </el-menu-item>
	</el-menu>
</div>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-vertical-demo{
	
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
		selectIndex:0,
		drawer: false,//面板状态
		direction: 'rtl',//滑出方式
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        window.console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        window.console.log(key, keyPath);
      },
	  clickMenu(key, keyPath){
		  this.drawer = true;//打开面板
		  this.selectIndex = key;//传递选中
	  },
	  dialogClose(done) {
	          this.$confirm('确认关闭？')
	            .then(_ => {
	              done();
	            })
	            .catch(_ => {});
	  }
    }
  }
</script>