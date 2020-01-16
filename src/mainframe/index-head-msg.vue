<template>
	<div id = "msg">
		<el-badge is-dot  class="item">
		<el-dropdown size="small"  type="primary" @command="msgClick">
		  
		  <el-button type="primary">
			  消息提醒<i class="el-icon-arrow-down el-icon--right"></i>
		  </el-button>
		  
		  <el-dropdown-menu slot="dropdown">
			  <el-dropdown-item command="评级" class="clearfix">
				评级
				<el-badge class="mark" :value="12" />
			  </el-dropdown-item>
			  <el-dropdown-item command="流程" class="clearfix">
				流程
				<el-badge class="mark" :value="3" />
			  </el-dropdown-item>
			  <el-dropdown-item command="流程到达" class="clearfix">
				流程到达
				<el-badge class="mark" :value="3" />
			  </el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		</el-badge>
	</div>
</template>

<script>
	export default {
		methods:{
			msgClick(obj){
				this.$message({
					message: '点击了'+obj,
					type: 'warning',
					showClose:true
				});	
			}
		},
		
		
	}
</script>

<style>
	#msg{
		position: absolute;
		bottom: 0;
		right: 5px;
	}
</style>
