<template>
	<div id = "m">
		
		<el-row :gutter="20">
			<el-col :span="8" >
				<div class="grid-content "> echarts </div>
			</el-col>
			<el-col :span="5" >
				<div class="grid-content ">DataList</div>
			</el-col>
			<el-col :span="5">
				<div class="grid-content ">opsition</div>
			</el-col>
		    <el-col :span="6">
				<div class="grid-content ">Buttons</div>
			</el-col>
			
		</el-row>
	</div>
</template>

<script>
</script>

<style>
.el-row {
    margin-bottom: 10px;
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
    padding: 0px 0;
    background-color: #f9fafc;
  }
#m .grid-content {
	border-radius: 4px;
	height:400px;
	background: #CCCCCC;
	text-align: center;
	line-height: 400px;
	font-size: 18px;
	font-weight: bold;
}
</style>
