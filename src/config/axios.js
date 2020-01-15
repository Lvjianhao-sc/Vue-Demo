/*	
	通信使用组件
	@lvjianhao 2020/1/3
*/

import axios from 'axios'
let Global = require('@/common/global_variable.js');

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.withCredentials = true;//携带cookie信息保持SESSION同步
// 前端请求拦截器
axios.interceptors.request.use(function(config) {
	window.console.log("请求地址:"+config.url)
	config.url +='&Authorization='+Global.token;
  return config
}, function(error) {
  return Promise.reject(error)
})

// 前端响应拦截器
axios.interceptors.response.use(function(response) {
  //这里拦截一些公共响应代码
  return response
}, function(error) {
  return Promise.reject(error)
})