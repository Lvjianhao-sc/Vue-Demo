
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
		    <el-col :span="6" >
				<el-row :gutter="0">
					<el-col :span="13" class="userInfo" >
						<el-row :span="7">
							<span>登录人：朱发营</span>
						</el-row>
						<el-row :span="7">
							<span>登录机构：总行金融市场部</span>
						</el-row>
						<el-row :span="7">
							<span>现有角色：系统管理员</span>
						</el-row>	
					</el-col>
					<el-col :span="11" class="userInfo2">
						<el-row :gutter="5">
							<el-col :span="12">
								<el-avatar :size="60" :src="url.url"></el-avatar>
							</el-col>
							<el-col :span="12">
								<msg></msg>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
						
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import msg from './index-head-msg.vue'
	export default {
		data(){
			return {
				url: {url: require('./images/zfy.gif')},
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
    };
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


.userInfo{
	border:1px solid #cccccc;
	text-align:center;
	margin-left:0px;
	height:70px
}

.userInfo .el-row{
	line-height:23px;
	font-size:12px;
	margin-bottom: 0px;
	&:last-child {
	  margin-bottom: 0;
	};
}

.userInfo2{
	
	text-align:center;
	height:70px
}

</style>
