
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
			<el-menu-item v-on:click="clickM(mu)"   :index = "indexA.toString()" v-if="mu.child==null||mu.child.length==0">
				{{mu.name+indexA}}
			</el-menu-item>
			<el-submenu :index = "indexA.toString()" v-if="mu.child!=null&&mu.child.length!=0">
				<span slot="title">{{mu.name+indexA}}</span>
				<template   v-for="(mu,indexB) in mu.child">
					<el-menu-item v-on:click="clickM(mu)" :index="indexA.toString()+'-'+indexB.toString()" v-if="mu.child==null||mu.child.length==0">
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
		props:{
			clickMenu:Function
		},
		data(){
			return {
				muen:[
					{"name":"我的工作","type":"1","child":[],path:null},
					{"name":"系统管理","type":"2",
						"child":[
							{"name":"用户管理","type":"2","child":[],path:'/empcrud'},
							{"name":"菜单管理","type":"2","child":[],path:'/menucrud'},
							{"name":"机构管理","type":"2","child":[],path:'/orgcrud'},
							{"name":"角色管理","type":"2","child":[],path:null},
							{"name":"码值管理","type":"2s","child":[],path:null}
						],path:null
					},
					{"name":"NMSL","child":[],path:null}
				]
			}
		},
		methods:{
			createMenu(){
				//this.$message('正在初始化菜单数据..');
				this.GlobalFunc.log('---初始化菜单---')
				/*this.$message({
					message: '初始化菜单成功',
					type: 'success',
					showClose:true
				});*/		
				
			},
			clickM(mu){
				this.GlobalFunc.log('---点击菜单---')
				this.clickMenu(mu);
			}
		}
		
	}
</script>

<style>


</style>
