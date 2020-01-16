/**
 * @Author: lvjianhao
 * @Date:   2019-04-25T18:37:00+08:00
 *
 * @Project: CrmsMjApp
 * @Filename: Option1.js
 * @Last modified by:   lvjianhao
 * @Last modified time: 2019-04-25T18:39:54+08:00
 */



var labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};

var barWidth = 10;
var radius = [50,60];

const Option = {


     getOption(data,type,max) {
         let orgData = [];
         let groupcountData = [];//集团数
         let mbrcountData = [];//集团成员数
         let sponsorgroupcountData = [];//本分行主办集团数
         let credittotalData = [];//闭口额度
         let creditremainData = [];//闭口占用
         let unprocData = [];//未阅读风险信号数

         let tpname ='';
         for (var i = 0; i < (max?data.length:(data.length<5?data.length:5)); i++) {
             tpname = data[i].porgname;
             
             tpname = tpname?tpname.replace('上海银行','').replace('公司业务部','公司部').replace('公司业务授信','授信').
             replace('金融市场部','金市部').replace('营业部','总营').replace('小企业金融服务中心','小金中心').
             replace('海外业务部','海外部').replace('自贸实验区','自贸区').replace('自贸试验区','自贸区').replace('风险管理','风管').
             replace('分行','').replace('支行','').replace('总行',''):'';
             orgData.push(tpname);
             groupcountData.push(data[i].groupcount);
             mbrcountData.push(data[i].mbrcount);
             sponsorgroupcountData.push(data[i].sponsorgroupcount);
             credittotalData.push((data[i].credittotal/100000000).toFixed(2));
             unprocData.push(data[i].unproc_count);
             creditremainData.push((data[i].creditremain/100000000).toFixed(2));

         }
		 let option = {};
         option = {
             tooltip : {
                 trigger: 'axis',
                 axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                 }
             },
             color:['#628AEC','#AAC2FA','#2EC7C9','#B1EDF0','#C39DF0','#5AB1EF'],
             dataZoom: max?[
                {
                   show: true,
                   realtime: true,
                   start: 0,
                   end: 60
                },
                {
                   type: 'inside',
                   realtime: true,
                   start: 0,
                   end: 60
               }
             ]:[],
             xAxis : [
                 {
                     type : 'category',
                     data : orgData,
                     axisLine:{
                         show:false,
                         lineStyle:{
                             color:'#000000',
                         }
                     },
                     axisLabel:{
                         showMaxLabel: true,
                         interval:0,
                         textStyle:{
                             color:'#333333',
                             fontSize:10
                         },
                         formatter:function(name){
     		            	if(name.length>2){
     		            		name = name.substring(0,3)+"...";
     		            	}
     		            	return name;
     	            	}
                     },
                     itemStyle:{
                         fontSize:6
                     },
                     axisTick:{
                         show:false
                     },
                 }
             ],
             grid:{
                 top:max?'25%':'20%'
             },
             legend: {
                 data:['集团成员数','风险客户数','本分行主办集团数','集团客户数','集团授信额度','集团额度占用'],
                 padding:[0,-45,0,0],
                 show:max?true:false
             },
             yAxis : [
                 {
                     type : 'value',
                     name : '数量（个）',
                     axisLabel : {
                       show: true,
                       formatter: '{value} '
                    },
                    axisTick:{
                        show:false
                    },
                    axisLine:{
                        show:false,
                        lineStyle:{
                            color:'#999999',
                        }
                    }
                 },
                 {
                     type : 'value',
                     name : '金额（亿）',
                     axisTick:{
                         show:false
                     },
                     axisLabel : {
                       show: true,
                       formatter: '{value} '
                    },
                    axisLine:{
                        show:false,
                        lineStyle:{
                            color:'#999999',
                        }
                    }
                }
             ],
             series : [
                 {
                     name:'风险客户数',
                     type:'bar',
                     barWidth:barWidth,
                     stack: '集团',
                     itemStyle: {
                              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                              emphasis: {
                                  barBorderRadius: 30
                              },
                              normal: {
                                  //barBorderRadius:[8, 8, 0, 0],
                                 // color: '#aac2fa'
                              }
                          },
                     data:unprocData
                 },
                 {
                     name:'集团成员数',
                     type:'bar',
                     barWidth:barWidth,
                     stack: '集团',
                     itemStyle: {
                              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                              emphasis: {
                                  barBorderRadius: 30
                              },
                              normal: {
                                  barBorderRadius:[8, 8, 0, 0],
                                  //color: '#aac2fa'
                              }
                          },
                     data:mbrcountData
                 },

                 {
                     name:'本分行主办集团数',
                     type:'bar',
                     barWidth:barWidth,
                     stack: '集团2',
                     itemStyle: {
                              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                              emphasis: {
                                  //barBorderRadius: 30,

                              },
                              normal: {

                              },

                          },
                     data:sponsorgroupcountData
                 },
                 {
                     name:'集团客户数',
                     type:'bar',
                     barWidth:barWidth,
                     stack: '集团2',
                     itemStyle: {
                              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                              emphasis: {
                                  barBorderRadius: 30
                              },
                              normal: {
                                  barBorderRadius:[8, 8, 0, 0],
                                  //color: '#4dd4d4'
                              }
                          },
                     data:groupcountData
                 },

                 {
                     name:'集团授信额度',
                     type:'line',
                     yAxisIndex: 1,
                     itemStyle: {
                              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                              emphasis: {
                                 // barBorderRadius: 30,

                              },
                              normal: {
                                 // barBorderRadius:[8, 8, 0, 0],
                                  //color: '#bda0ea'
                              },

                          },
                     data:credittotalData,
                 },
                 {
                     name:'集团额度占用',
                     type:'line',
                     yAxisIndex: 1,
                     itemStyle: {
                              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                              emphasis: {
                                 // barBorderRadius: 30,

                              },
                              normal: {
                                  //barBorderRadius:[8, 8, 0, 0],
                                  //color: '#81bdf1'
                              },

                          },
                     data:creditremainData
                 }
             ]
         }








        return option;

    }
};
export default Option;
