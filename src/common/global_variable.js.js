/* 
	此文件用于放置[全局变量](.. 每个变量用途自行注释)
	@lvjianhao 2020/1/3
	
*/

//1测试 2生产
const urlType = 1;
//请求前置链接地址
const baseURL = urlType;
//
const token = ''
//
const userSite = '上海农商行'
//用于存储Session信息
let userObject = { 
	sessionid:'',
};

let indexFlag = true;//是否展示首页信息


//向引用处暴露的内容
export default {
  baseURL,
  token,
  userSite,
  userObject,
  indexFlag,
}