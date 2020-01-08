import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/config/store/state.js'
Vue.use(Vuex)//注册状态管理器
import 'es6-promise/auto'//增加Promise组件,防止IE不支持promise
import App from './App.vue'
import router from '@/config/pageConfig.js';
import Global_v from '@/common/global_variable.js'//全局变量
import Global_f from '@/common/global_func.js'//全局函数
import Http from 'axios' //通信组件
import '@/config/axios' //通信拦截
import './mock/mock.js' //模拟响应使用(在无法通信后台的情况下调试使用)
//--------Element UI样式开始-------//
import ElementUI from 'element-ui'; //ElementUI 组件
import './style/theme/index.css';//ElementUI fade/zoom 淡入淡出动画
import 'element-ui/lib/theme-chalk/base.css'; //ElementUI collapse 展开折叠动画
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.use(CollapseTransition.name, CollapseTransition)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });//安装ElementUi 设置组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000
//--------ElementUI样式结束-------//
import * as echarts from 'echarts/lib/echarts';//引入Echart
Vue.prototype.$echarts =echarts;// 引入 echarts 主模块。
import "./assets/iconfont/iconfont.css"; //引入阿里巴巴矢量图标库
import VueFab from 'vue-float-action-button'//悬浮按钮

Vue.use(VueFab,  {
//  opitons 可选iconfont图标或MaterialIcons
	iconType: 'iconfont'//这里使用阿里矢量库
})

Vue.prototype.$axios = Http; //设置全局通信对象
Vue.prototype.Global = Global_v;//设置全局变量
Vue.prototype.GlobalFunc = Global_f;//设置全局函数
Vue.config.productionTip = false //阻止生产消息




new Vue({
  router,
  state,
  render: h => h(App),
}).$mount('#app')




/*
	程序主入口,切勿轻易更改
	@lvjianhao 2020/1/3
        ┌─┐       ┌─┐ + +
     ┌──┘ ┴───────┘ ┴──┐++
     │                 │
     │       ───       │++ + + +
     ███████───███████ │+
     │                 │+
     │       ─┴─       │
     │                 │
     └───┐         ┌───┘
         │         │
         │         │   + +
         │         │
         │         └──────────────┐
         │                        │
         │                        ├─┐
         │                        ┌─┘
         │                        │
         └─┐  ┐  ┌───────┬──┐  ┌──┘  + + + +
           │ ─┤ ─┤       │ ─┤ ─┤
           └──┴──┘       └──┴──┘  + + + +
                  神兽保佑
                 代码无BUG!
*/