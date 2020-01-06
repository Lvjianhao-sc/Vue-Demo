
<template>
	<div >
		<el-menu 
		  default-active="0"
		  class="el-menu-demo"
		  mode="horizontal"
		  background-color="#4DA3FB"
		  text-color="#ffffff"
		  active-text-color="#ffffff"
		  >
		  <template   v-for="(mu,indexA) in muen">
			<el-menu-item v-on:click="clickMuen(mu)"   :index = "indexA.toString()" v-if="mu.child==null||mu.child.length==0">
				{{mu.name+indexA}}
			</el-menu-item>
			<el-submenu :index = "indexA.toString()" v-if="mu.child!=null&&mu.child.length!=0">
				<span slot="title">{{mu.name+indexA}}</span>
				<template   v-for="(mu,indexB) in mu.child">
					<el-menu-item v-on:click="clickMuen(mu)" :index="indexA.toString()+'-'+indexB.toString()" v-if="mu.child==null||mu.child.length==0">
						{{mu.name+indexA+'-'+indexB}}
					</el-menu-item>
				</template>
			</el-submenu>
		  </template>
		  
		</el-menu>
	</div>
</template>

<script>
	export default {
		name:'muen',
		created:function(){
			this.createMenu();	
		},
		data(){
			return {
				muen:[
					{"name":"我的工作","type":"1","child":[],path:'/'},
					{"name":"系统管理","type":"2",
						"child":[
							{"name":"用户管理","type":"2","child":[],path:'/'},
							{"name":"菜单管理","type":"2","child":[],path:'/'},
							{"name":"机构管理","type":"2","child":[],path:'/'},
							{"name":"角色管理","type":"2","child":[],path:'/'},
							{"name":"码值管理","type":"2s","child":[],path:'/'}
						],path:'/'
					},
					{"name":"NMSL","child":[],path:'/'}
				]
			}
		},
		methods:{
			createMenu(){
				this.$message('正在初始化菜单数据..');
				this.GlobalFunc.log('---初始化菜单---')
				this.$message({
					message: '初始化菜单成功',
					type: 'success',
					showClose:true
				});		
			},
			clickMuen(menu){
				this.$message('预备切换至：'+menu.name);
			},
		}
		
	}
</script>

<style>


</style>
