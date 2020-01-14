<template>
  <div id="app">
	  <vue-fab  mainBtnColor="#3599DB" title="nmsl" icon="icon_add">
	    <fab-item @clickItem="clickItem" :idx="0" title="登录页" icon="icon_boss" />
	    <fab-item @clickItem="clickItem" :idx="1" title="首页" icon="icon_details" />
	    <fab-item @clickItem="clickItem" :idx="2" title="首页" icon="icon_airplay" />
	  </vue-fab>
	<router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  data () {
      return {
          isRouterAlive: true
      }
  },
  provide(){ //提供
      return {
          reload: this.reload
      }
  },
  methods:{
	  reload(){
	      this.isRouterAlive = false
	      this.$nextTick( function () {
	          this.isRouterAlive = true
	      })
	  },
	  clickItem(index){
			this.$message("fabIndex:"+index.idx);
		  if(index.idx==0){
			this.$router.push({name:'login',params: {id:'1',indexFlag2:true}}) // post的方式，只能用name
		  }else{
			this.Global.indexFlag = true;
			
			// post的方式，只能用name
			this.$router.push({name:'index',params: {id:'1',indexFlag2:false}}).
			catch(err => { 
				window.console.log(err.message);
			})
			this.reload();
		  }
		  
	  }
  }
}

 
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  width:100%
}

</style>
