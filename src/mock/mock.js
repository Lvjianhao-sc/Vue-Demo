import Mock from 'mockjs'

const Random = Mock.Random;

// mock需要给三个参数,url(与axios请求需与测试访问传的url一致)
// 请求类型: get post...
// 数据处理函数,函数需要return数据

Mock.mock('http://10.240.88.46/crms/com.bos.acc.acccustomerfinance.addAccCustomerFinance.biz.ext', 'get', () => {

  return {msg: Random.color()}
})

// post请求,带参数,参数会在data中返回,会返回url,type,body三个参数,可以把data打印出来看看
Mock.mock('http://localhost:8080/xxx/com.bos.acc.acccustomerfinance.addAccCustomerFinance.biz.ext', 'post', (data) => {
  // 请求传过来的参数在body中,传回的是json字符串,需要转义一下
  const info= JSON.parse(data.body);
  window.console.log('请求参数'+info.toString());
  return {
    data: info,
	msg: '登录成功'
  }
})