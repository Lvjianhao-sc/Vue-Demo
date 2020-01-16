<template>
	<el-badge is-dot="true"  class="item">
	<el-dropdown  type="primary" @click="msgClick">
	  
	  <el-button type="primary">
	      消息提醒<i class="el-icon-arrow-down el-icon--right"></i>
	  </el-button>
	  
	  <el-dropdown-menu slot="dropdown">
	      <el-dropdown-item class="clearfix">
	        评级
	        <el-badge class="mark" :value="12" />
	      </el-dropdown-item>
	      <el-dropdown-item class="clearfix">
	        流程
	        <el-badge class="mark" :value="3" />
	      </el-dropdown-item>
		  <el-dropdown-item class="clearfix">
		    流程到达
		    <el-badge class="mark" :value="3" />
		  </el-dropdown-item>
	    </el-dropdown-menu>
	</el-dropdown>
	</el-badge>
</template>

<script>
</script>

<style>
</style>
