/*
	路由配置(用于配置所有的页面的引用)
	lvjianhao 2020/1/4
*/
import Vue from 'vue'
import Router from 'vue-router'  
import index from '@/mainframe/index' //
import login from '@/mainframe/login';
import empcrud  from '@/sysadmin/emp/empCrud'
import orgcrud  from '@/sysadmin/orgCrud'
import menucrud  from '@/sysadmin/menuCrud'
Vue.use(Router) //安装路由


export default new Router({
	mode:'history',
	beforeEach:(to, from, next) => {
	  // 可以在路由元信息指定哪些页面需要登录权限
	  const islogin = false // 假设没有登录（这里应从接口获取）
	  if (to.meta.requiresAuth && !islogin) { // 需要登录授权，这里还需要判断是否登录
	    next('/login') // 跳转到登录
	    return
	  }
	  next()
	},
    routes: [
		{
			path: '/',
			name:'frist',
			redirect:'login'
		},
        {
            path: '/index',
			name:'index',
            component: index,
			children:[
				{
					path:'//',
					name:'/',
					component:index
				},
				{
					path:'/empcrud',
					name:'empcrud',
					component:empcrud
				},{
					path:'/orgcrud',
					name:'orgcrud',
					component:orgcrud
				},{
					path:'/menucrud',
					name:'menucrud',
					component:menucrud
			}]
        },
        {
            path:'/login',
			name:'login',
            component:login
        }
    ]
})
