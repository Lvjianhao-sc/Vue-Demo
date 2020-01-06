/* 
	#此文件用于放置[全局方法函数](每个方法用途自行注释..)
	@lvjianhao 2020/1/3
*/

//获取String的千分位
let getNum = function (num){
	let reg = /\d{1,3}(?=(\d{3})+$)/g;   
	return String(num).replace(reg, '$&,'); 
	
}

let log = function (msg){
	
	window.console.log(msg)
}

//暴露内容
export default {
  getNum,
  log,
}