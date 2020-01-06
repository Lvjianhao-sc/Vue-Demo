
<template>
  
	<el-container style="height:100%" direction="vertical">
		<el-header class="Iheader" style="margin-top:0px;height: 70px; padding: 0">
			<indexH ></indexH>
		</el-header>
		<el-header style="padding: 0; margin-top: 0px;">
			<indexMu></indexMu>
		</el-header>
		<div id = "main" style="padding: 0; margin-top: 0px; float: left;">
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
export default {
    data() {
      return {
       
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        window.console.log(key, keyPath);
      }
    },
	components: {
		"indexH":indexH,
		"indexMu":indexMu,
		"indexMuLF":indexMuLF,
		"indexMain":indexMain,		
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
	
}
/*.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #E6A23C !important;;
}*/
</style>
