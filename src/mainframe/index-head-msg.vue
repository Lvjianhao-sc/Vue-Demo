<template>
	<div id = "msg">
		<el-badge is-dot  class="item"><!-- 这个是红点标记 is-dot存在代表需要红点 -->
		<el-dropdown bottom  type="primary" @command="msgClick">
		  
		  <el-button type="primary" size="small">
			  <span style="font-">通知</span>
			  <i class="el-icon-arrow-down el-icon--right"></i>
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
		data(){
			return {
				
			}
		},
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
		
		
	}
</style>
