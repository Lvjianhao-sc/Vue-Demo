
<template>
  
	<el-container style="height:100%" direction="vertical">
		<el-header class="Iheader" style="width:99%;height: 80px; padding: 0">
			<indexH ></indexH>
		</el-header>
		<el-header style="padding: 0; margin-top: 10px;">
			<indexMu></indexMu>
		</el-header>
		
	</el-container>
	  
	
    
  
</template>

<script>
import indexH from './index-head'
import indexMu from './index-muen'
import indexMain from './index-main'
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        window.console.log(key, keyPath);
      }
    },
	components: {
		"indexH":indexH,
		"indexMu":indexMu,
		"indexMain":indexMain
	}, 
  }



</script>



<style >
.el-header{
	margin-top: 10px;
	margin-bottom: 10px;
}

/*.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #E6A23C !important;;
}*/
</style>
