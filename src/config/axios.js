/*	
	通信使用组件
	@lvjianhao 2020/1/3
*/

import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 前端请求拦截器
axios.interceptors.request.use(function(config) {
  return config
}, function(error) {
  return Promise.reject(error)
})

// 前端响应拦截器
axios.interceptors.response.use(function(response) {
  return response
}, function(error) {
  return Promise.reject(error)
})