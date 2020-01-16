
<template>
	<div >
		<el-row :gutter="5">
			<el-col :span="8" >
				<div class="grid-content "> Corporation-Logo</div>
			</el-col>
			<el-col :span="5" >
				<div class="grid-content ">等美工做UI设计</div>
			</el-col>
			<el-col :span="5">
				<div class="grid-content ">role/posi</div>
			</el-col>
		    <el-col :span="6">
				<msg></msg>			
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import msg from './index-head-msg.vue'
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
		components:{
			'msg':msg
		}
		
	}
</script>

<style>
.el-row {
    margin-bottom: 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.grid-content {
	border-radius: 4px;
	height:70px;
	background: #CCCCCC;
	text-align: center;
	line-height: 70px;
	font-size: 18px;
	font-weight: bold;
	z-index: 0;
}

</style>
