<template>
	<div id ="emp">
		<el-row gutter="20" style="margin:0;padding:0">
			<el-col class="orgTree" :span="6">
				<el-tree
				:props="props"
				:load="loadNode"
				lazy
				show-checkbox
				width="30%"
				icon-class="el-icon-menu "
				@check-change="handleCheckChange"
				@node-click ="handleNodeClick"
				>

				</el-tree>
			</el-col>
			<el-col class="nbsp" :span="0.1">
				&nbsp
			</el-col>
			<el-col class="empmain" :span="17">
				{{mmp}}
			</el-col>
		</el-row>
		
	</div>	
</template>
<script>
  export default {
    data() {
      return {
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1,
		mmp:''
      };
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data,node,tree) {
        //console.log(data);
		this.mmp = data.name;
      },
      loadNode(node, resolve) {
        if (node.level === 0) {//初始化加载
          return resolve([{ name: '总行',id : "10000" ,"icon": "el-icon-menu",}]);
        }
        if (!node.hasChild||node.hasChild.length==0) //加载空内容

        var hasChild = node.hasChild;//
        

        setTimeout(() => { //加载下级节点
          var data;
          if(node.data.name=="总行"){
			  data = [{name: '分行1',id : "10000"},{name: '分行2',id : "10000"}]
		  }else if(node.data.name.indexOf("分行")>=0){
			  data = [{name: '支行1',id : "10000"},{name: '支行2',id : "10000"}]
		  }else{
			  return resolve([]);//反馈空列表，则不会出现箭头
		  }

          resolve(data);
        }, 200);
      }
    }
  };
</script>
<style>
#emp .orgTree{
	border:1px solid #CCCCCC;
	min-height:390px;
}
#emp .empmain{
	border:1px solid #CCCCCC;
	min-height:390px;
	float: right;
}

#emp .nbsp{
	min-height:390px;
}
</style>