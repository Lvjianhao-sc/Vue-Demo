<template>
	<div id = "login">
		<img alt="Vue logo" src="../assets/logo.png"><br>
		<input class="login-input" type="text"  v-model="username" placeholder="请输入账号"><br>
		<input class="login-input" type="password" v-model="password" placeholder="请输入密码"><br>
		<button class="login-button" v-on:click="login()" type="submit">登陆</button><br>
		<button class="login-button" v-on:click="selectOrg()" type="submit">选机构</button><br>
		<button class="login-button" v-on:click="query()" type="submit">查询</button><br>
		<router-link :to="{name:'index', query: {id:1}}">去首页1</router-link><br>
		<router-link :to="{path:'index', query: {id:2}}">去首页2</router-link>
	</div>
</template>

<script>
export default {
  name: 'login',
  props: {
    msg: String
  },
  data(){
	return{
		username:'',
		password:'' ,
	}
  },
  created:function(){
      this.GlobalFunc.log('---调用初始化方法---')
  },
  methods:{
	login(){
		let _this = this; //$axios内的this为$axios对象,所以在回调需要用到的时候一定要区分开来
		window.console.log(_this.username);
		window.console.log(_this.password);
		this.$axios({
			method:'post',
			data:{userId:_this.username,password:_this.password},
			url:'/app/com.bos.utp.auth.LoginManager.appSingleLogin.biz.ext'
		}).then(function(res){
			window.console.log(res.data.msg);
			//document.cookie = '9AEDA632496CCD0063A557C39E6A6E5A';
			//res.data.userObject.sessionId = '9AEDA632496CCD0063A557C39E6A6E5A';
			_this.Global.userObject = res.data.userObject;
			_this.zt = res.data.msg;
			if(_this.Global.userObject.sessionId){
				_this.$router.push({name:'index',params: {id:'1',msg:'这里是首页'}}) // post的方式，只能用name
			}
		});
	},
	selectOrg(){
		let _this = this; //$axios内的this为$axios对象,所以在回调需要用到的时候一定要区分开来
		window.console.log(_this.username);
		window.console.log(_this.password);
		this.$axios({
			method:'post',
			data:{orgid:'10000'},
			url:'/app/com.bos.utp.auth.LoginManager.rnSelectOrg.biz.ext'
		}).then(function(res){
			window.console.log(res.data.msg);
			_this.zt = res.data.msg;
			if(res.data.msg=="登录成功"){
				_this.$router.push({name:'index',params: {id:'1',msg:'这里是首页'}}) // post的方式，只能用name
			}
		});
	},
	query(){
		let _this = this; //$axios内的this为$axios对象,所以在回调需要用到的时候一定要区分开来
		window.console.log(_this.username);
		window.console.log(_this.password);
		this.$axios({
			method:'post',
			data:{orgid:'10000'},
			url:'http://1.1.1.1:1111/com.bos.bps.op.WorkFlowManager.queryWorkingList.biz.ext'
		}).then(function(res){
			window.console.log(res.data.msg);
			_this.zt = res.data.msg;
			if(res.data.msg=="登录成功"){
				_this.$router.push({name:'index',params: {id:'1',msg:'这里是首页'}}) // post的方式，只能用name
			}
		});
	}
  }
  
 

}



</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
