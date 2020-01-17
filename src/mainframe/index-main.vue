<template>
	<el-scrollbar>
	<div id = "m">
		
		<el-row :gutter="20">
			<el-col :span="8" >
				<el-card :body-style="{ padding: '0px' }">
				      <div  id="myChart" >
				      	echarts
				      </div>
				</el-card>
				
			</el-col>
			<el-col :span="5" >
				<el-card :body-style="{ padding: '0px' }" style="height:400px;">
				      <img src="./images/zfy3.gif" style="width:100%;" class="image">
				      <div style="padding: 24px;padding-top:45px" class="infinite-list-wrapper" >
						
				        <el-collapse v-model="activeName" accordion>
				          <el-collapse-item title="一致性 Consistency" name="1">
				            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
				            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
				          </el-collapse-item>
				          <el-collapse-item title="反馈 Feedback" name="2">
				            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
				            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
				          </el-collapse-item>
				          <el-collapse-item title="效率 Efficiency" name="3">
				            <div>简化流程：设计简洁直观的操作流程；</div>
				            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
				            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
				          </el-collapse-item>
				          <el-collapse-item title="可控 Controllability" name="4">
				            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
				            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
				          </el-collapse-item>
				        </el-collapse>
						
				      </div>
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card :body-style="{ padding: '0px' }" class="grid-content ">
					
				     Buttons
				</el-card>
			</el-col>
		    <el-col :span="5">
				<el-card :body-style="{ padding: '0px' }" style="height:400px;">
				      <img src="./images/zfy2.gif" style="width:100%;" class="image">
				      <div style="padding: 24px;padding-top:100px">
				        <span>FYSL</span>
				        <div class="bottom clearfix">
				          <time class="time">2019-01-17</time>
				          <el-button type="text" class="button">点击查看</el-button>
				        </div>
				      </div>
				</el-card>
				
			</el-col>
			
		</el-row>
	</div>
	</el-scrollbar>
</template>

<script>
	import option from './echartsOption/testOption.js'
	export default {
	  name: 'hello',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
		  currentDate:new Date()
	    }
	  },
	  mounted(){
	    this.drawLine();
	  },
	  methods: {
	    drawLine(){
	        // 基于准备好的dom，初始化echarts实例
	        let myChart = this.$echarts.init(document.getElementById('myChart'))

			window.console.log("开始渲染视图-集团项下客户风险提示");
			let data = [{"porgcode":"100013","porgname":"上海银行总行营业部","groupcount":36,"sponsorgroupcount":36,"mbrcount":139,"credittotal":60391822154.520004,"creditremain":26401684392.91494,"xh_count":12,"unproc_count":9},{"porgcode":"100044","porgname":"上海银行市南分行","groupcount":85,"sponsorgroupcount":85,"mbrcount":206,"credittotal":19948407497.151,"creditremain":15629966657.978806,"xh_count":9,"unproc_count":7},{"porgcode":"100111","porgname":"上海银行浦西分行","groupcount":73,"sponsorgroupcount":73,"mbrcount":205,"credittotal":195201294367.15,"creditremain":70069123108.08246,"xh_count":67,"unproc_count":17},{"porgcode":"100192","porgname":"上海银行市北分行","groupcount":46,"sponsorgroupcount":46,"mbrcount":153,"credittotal":89735415354.1,"creditremain":50188390780.467354,"xh_count":59,"unproc_count":16},{"porgcode":"100292","porgname":"上海银行浦东分行","groupcount":18,"sponsorgroupcount":18,"mbrcount":60,"credittotal":83158456000,"creditremain":51289835592.60141,"xh_count":27,"unproc_count":3},{"porgcode":"100330","porgname":"上海银行自贸试验区分行","groupcount":2,"sponsorgroupcount":2,"mbrcount":9,"credittotal":6053200000,"creditremain":828390711.4939361,"xh_count":2,"unproc_count":1},{"porgcode":"100338","porgname":"上海银行宁波分行","groupcount":39,"sponsorgroupcount":39,"mbrcount":99,"credittotal":9348666303.3902,"creditremain":1873078111.0671477,"xh_count":24,"unproc_count":10},{"porgcode":"100371","porgname":"上海银行南京分行","groupcount":37,"sponsorgroupcount":37,"mbrcount":89,"credittotal":6875450000,"creditremain":3302111236.53497,"xh_count":1,"unproc_count":1},{"porgcode":"100416","porgname":"上海银行杭州分行","groupcount":43,"sponsorgroupcount":43,"mbrcount":89,"credittotal":7623050000,"creditremain":2995773963.06,"xh_count":10,"unproc_count":4},{"porgcode":"100468","porgname":"上海银行天津分行","groupcount":26,"sponsorgroupcount":26,"mbrcount":84,"credittotal":7879946452,"creditremain":7190752678,"xh_count":0,"unproc_count":0},{"porgcode":"100514","porgname":"上海银行成都分行","groupcount":32,"sponsorgroupcount":32,"mbrcount":72,"credittotal":11629230000,"creditremain":5230115581.320101,"xh_count":13,"unproc_count":8},{"porgcode":"100548","porgname":"上海银行深圳分行","groupcount":44,"sponsorgroupcount":44,"mbrcount":109,"credittotal":111297900000,"creditremain":60966021213.38067,"xh_count":14,"unproc_count":9},{"porgcode":"100592","porgname":"上海银行北京分行","groupcount":15,"sponsorgroupcount":15,"mbrcount":50,"credittotal":34722000000,"creditremain":12556099940.4632,"xh_count":0,"unproc_count":0},{"porgcode":"100616","porgname":"上海银行苏州分行","groupcount":70,"sponsorgroupcount":70,"mbrcount":153,"credittotal":18258080000,"creditremain":9372314813.25513,"xh_count":54,"unproc_count":32}];
			        let groupcount = 0;//机构及辖下集团客户数
			        let mbrcount = 0;//集团成员数
			        let unproc_count = 0;//未处理风险客户数
			        let xh_count = 0;//未处理风险信号数
			        for (var i = 0; i < data.length; i++) {
			            groupcount += data[i].groupcount;
			            mbrcount += data[i].mbrcount;
			            unproc_count += data[i].unproc_count;
			            xh_count += data[i].xh_count;
			        }
			
	        // 绘制图表
	        myChart.setOption(option.getOption(data,1,true));
	    }
	  }
	}
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
	text-align: center;
	line-height: 400px;
	font-size: 18px;
	font-weight: bold;
}
#myChart{
	height:400px;
}
</style>
