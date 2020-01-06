/*
	路由配置(用于配置所有的页面的引用)
	lvjianhao 2020/1/4
*/
import Vue from 'vue'
import Router from 'vue-router'  
import index from '@/mainframe/index' //
import login from '@/mainframe/login';
Vue.use(Router) //安装路由

export default new Router({
    routes: [
		{
			path: '/',
			name:'frist',
			redirect:'login'
		},
        {
            path: '/index',
			name:'index',
            component: index
        },
        {
            path:'/login',
			name:'login',
            component:login
        }
    ]
})
