
<template>
	
	<el-container id ="nmsl" style="height:100%" direction="vertical">
		<el-header class="Iheader" style="margin-top:0px;height: 70px; padding: 0">
			<indexH ></indexH>
		</el-header>
		<el-header style="padding: 0; margin-top: 0px;">
			<indexMu :clickMenu = "clickMenu"></indexMu>
		</el-header>
		<el-collapse-transition name="el-zoom-in-bottom">
			<div id = "indexmain" :show="(indexFlag==true)" v-if="indexFlag==true" style="padding: 0; margin-top: 0px; float: left;">
				<el-row :gutter="10" >
					<el-col :span="22" style="padding: 0; margin-left: 1%;">
						<indexMain></indexMain>
					</el-col>
					<el-col :span="0.1" >
						<p>&nbsp</p>
					</el-col>
					<el-col :span="1.5" >
						<indexMuLF></indexMuLF>
					</el-col>
					
				</el-row>
			</div>
		</el-collapse-transition>
		<el-collapse-transition name="el-zoom-in-top">
		    <div id = "main" :show="(indexFlag==false)" v-if="indexFlag==false" style="min-height:400px;padding: 0; margin-top: 0px; float: left;">
		    	<router-view></router-view>
		    </div>
		</el-collapse-transition>
		
		
		<el-footer id = "indexFooter">
			@copy-right:xxxxxx......
		</el-footer>
	</el-container>
	 
	
    
  
</template>

<script>
import indexH from './index-head'
import indexMu from './index-menu'
import indexMuLF from './index-menu-left'
import indexMain from './index-main'
import floaticon from './component/floaticon'
import timeline from '../workFlow/flowTimeLine'//测试使用
export default {
	inject: ['reload'],
	created: function(){
		window.console.log(this.Global.indexFlag)
		this.indexFlag = this.Global.indexFlag;
		let _this = this;
		let cot = 0;
		setInterval(function (){
			
			window.console.log(cot)
			if(cot==1){
				_this.$notify({
					title: '成功',
				    message: '您刚才查询的XXXX客户报告已生成结果。',
				    type: 'success'
				});					
			}
			else if(cot==2){
				_this.$notify({
					title: '警告',
				    message: '您刚才查询的XXXX客户报告查询时间过长。',
				    type: 'warning'
				});				
			}
			else if(cot==3){
				_this.$notify.info({
					title: '提示',
				    message: '您有一条新的消息，请查收',
				});				
			}
			else if(cot==4){
				_this.$notify({
				  title: '错误',
				  message: '这是一条错误的提示消息',
				  type: 'error'
				});		
			}else if(cot==5){
				let tmp = _this.$createElement('timeline');
				_this.$notify({
						  title: '流程更新提醒',
						  dangerouslyUseHTMLString: true,
						  message: tmp
				});					
			}else{
				cot=0;
			}
			cot++;
			
			
			
		},60000)
	},
    data() {
      return {
		indexFlag:true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        window.console.log(key, keyPath);
      },
	  clickMenu(menu){//给予菜单页面使用
		  this.$message('预备切换至：'+menu.name);
		  this.Global.indexFlag=false;//隐藏原首页
		  this.$router.push(menu.path).catch(err => { 
			if(err.message.indexOf("is not allowed")>=0){
				this.$message({
					message: '已经在这个页面了',
					type: 'warning',
					showClose:true
				});	
			};
			if(err.message.indexOf("is not allowed")<=0){
				this.$message({
					message: '功能页未开发',
					type: 'error',
					showClose:true
				});	
			}
		  		
		  })
		  
		  this.reload();
	  }
    },
	components: {
		"indexH":indexH,
		"indexMu":indexMu,
		"indexMuLF":indexMuLF,
		"indexMain":indexMain,	
		"float-icons":floaticon,
		"timeline":timeline,
	}, 
  }



</script>



<style >
.el-header{
	margin-top: 10px;
	margin-bottom: 10px;
}
#indexFooter{
	text-align:center;
	border: 1px solid #8C939D;
	line-height: 60px;
	background-color: #2C3E50;
	color: #CCCCCC;
	font-size: 14px;
	font-family: "微软雅黑";
	height:40px;
	
}
/*.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #E6A23C !important;;
}*/
</style>
