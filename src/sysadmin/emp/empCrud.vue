<template>
	<div id ="emp">
		
		
		<el-dialog 
		  :title="selectRow.name"
		  :visible.sync="drawer"
		   v-if='drawer'
		  :direction="direction"
		  :before-close="handleClose"
		  top="20px"
		>
		  <!-- 表单内容 -->·
		  <empTabs empid="12345"></empTabs>
		</el-dialog>
		
		
		<!-- 列表部分 -->
		<el-row  style="margin:0;padding:0">
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
				&nbsp{{this.selectRow.name}}
			</el-col>
			<el-col class="empmain" :span="17" >
				<el-input placeholder="请输入内容" v-model="serchInput" class="input-with-select">
				    <el-select v-model="serchSelect" slot="prepend" placeholder="请选择">
				      <el-option label="用户编号" value="userNo"></el-option>
				      <el-option label="用户名称" value="userNm"></el-option>
					  <el-option label="登录名称" value="loginId"></el-option>
					  <el-option label="最近登录时间" value="lastLoginTime"></el-option>
				      <el-option label="机构" value="orgNo"></el-option>
				    </el-select>
				    <el-button slot="append" icon="el-icon-search" v-on:click="query()"></el-button>
				</el-input>
				
				<el-table :data="tableData"  :key="Math.random()"  
				:row-class-name="tableRowClassName"
				
				style="width: 100%" height="100%">
				    <el-table-column prop="userNo" label="工号" sortable>
				      <template slot-scope="scope">
				        <i class="el-icon-time"></i>
				        <span style="margin-left: 10px">{{ scope.row.userNo }}</span>
				      </template>
				    </el-table-column>
				    <el-table-column label="姓名" >
				      <template slot-scope="scope">
				        <el-popover trigger="hover"  placement="top">
				          <p>姓名: {{ scope.row.userNm }}</p>
				          <p>手机号: {{ scope.row.mobPhoneNo }}</p>
						  <p>状态: {{ scope.row.recordSts }}</p>
						  <p>性别: {{ scope.row.sexCd }}</p>
						  <p>邮件: {{ scope.row.email }}</p>
						  <p>创建时间: {{ scope.row.sys_create_time }}</p>
				          <div slot="reference" class="name-wrapper">
				            <el-tag size="medium" :type="getTagType(scope.row)" >{{ scope.row.userNm }}</el-tag>
				          </div>
				        </el-popover>
				      </template>
				    </el-table-column>
					<el-table-column label="机构" >
					  <template slot-scope="scope">
					    <i class="el-icon-time"></i>
					    <span style="margin-left: 10px">{{ scope.row.orgNo }}</span>
					  </template>
					</el-table-column>
				    <el-table-column label="操作" width="180">
				      <template slot-scope="scope">
				        <el-button size="mini" @click="rowEdit(scope.$index, scope.row)">编辑</el-button>
						<el-popconfirm
						  @onConfirm="rowDelete(scope.$index, scope.row)"
						  title="确定删除该数据吗？"
						>
						  <el-button size="mini" slot="reference" type="danger" >删除</el-button>
						</el-popconfirm>
				        
				      </template>
				    </el-table-column>
				  </el-table>
			</el-col>	
		</el-row>
		
	</div>	
	
</template>
<script>
  import empTabs from './empEditTabs'
  export default {
	created:function (){
		//初始化方法写这里 最后 this.tableData = 查出来的值
		let _this = this;
		this.$axios({
			method:'get',
			// data:{'username':_this.username,'password':_this.password},
			// url:'/app/system/login'
			url:'/app/user/select?pageNum=1&pageSize=10'
		}).then(function(res){
			window.console.log(res)
			window.console.log(res.data.code);
			window.console.log(res.data.message);
			window.console.log(res.data.data.result);
			_this.tableData =res.data.data.result; 
		});
		
	},
	components: {
	"empTabs":empTabs,
	}, 
    data() {
      return {
		drawer: false,//面板状态
		direction: 'rtl',//滑出方式
		selectRow:{},//选中行
        props: {
          label: 'name',
          children: 'zones'
        },
		serchSelect:'',
		serchInput:'',
        count: 1,
		mmp:'',
		context:'',
		tableData: [{
		          userNo: '319977',
		          userNm: '孙源鹏',
		          mobPhoneNo: '18217284823',
				  recordSts:'运行',
				  sexCd:'男'
		        }, {
		          userNo: '302291',
		          userNm: '王小虎',
				  mobPhoneNo: '18217284823',
				  recordSts:'停用',
				  sexCd:'男'
		        }, {
		          userNo: '302912',
		          userNm: '朱发营',
				  mobPhoneNo: '18217284823',
				  recordSts:'锁定',
				  sexCd:'女'
		        }, {
		          userNo: '10001',
		          userNm: '董事长',
		          mobPhoneNo: '18217284823',
				  recordSts:'运行',
				  sexCd:'妖'
		        }]
      };
    },
    methods: {
		
	  query(){
		  let _this = this;
		  window.console.log(_this.serchInput);
		  this.$axios({
		  	method:'get',
		  	data:{'userNo':_this.serchInput},
		  	// data:{'username':_this.username,'password':_this.password},
		  	// url:'/app/system/login'
		  	url:'/app/user/select?pageNum=1&pageSize=10&userNo='+_this.serchInput
		  }).then(function(res){
		  	window.console.log(res)
		  	window.console.log(res.data.code);
		  	window.console.log(res.data.message);
		  	window.console.log(res.data.data.result);
		  	_this.tableData =res.data.data.result; 
		  });
	  },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data,node,tree) {
        //console.log(data);
		let tmpData = this.tableData;
		for (var i = 0; i < tmpData.length; i++) {
			tmpData[i].orgName = data.name
		}
		this.serchInput = data.name;
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
      },/*下面是Table相关方法*/
	  tableRowClassName({row, rowIndex}) {
	          if (row.recordSts=="运行") {
	            return 'success-row';
	          }else if (row.recordSts === "锁定") {
	            return 'warning-row';
	          }else if (row.recordSts === "停用") {
	            return 'error-row';
	          }
	          return '';
	   },
	   rowEdit(index,row){
		 this.drawer = true;//打开面板
		 this.selectRow.row = row;
	   },
	   rowDelete(index,row){
		 _this.$notify({
		 	title: '成功',
		     message: '数据删除成功',
		     type: 'success'
		 });	
	   },
	   getTagType(row){
		  window.console.log(row)
		  return row.recordSts!='运行'?(row.recordSts=='停用'?'danger':'warning'):'';
	   },
	   handleClose(done) {
	           this.$confirm('确认关闭？')
	             .then(_ => {
	               done();
	             })
	             .catch(_ => {});
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
#emp .empmain .input-with-select{
	
	width:50%;
	float: left;
	margin-top: 10px;
	margin-left: 10px;
}

#emp .empmain .el-select .el-input {
    width: 130px;
}
#emp .empmain .input-with-select .el-input-group__prepend {
    background-color: #fff;
}

/* 自定义的class添加到Row中 */
#emp .el-table .warning-row {
    background: oldlace;
}
/* 自定义的class添加到Row中 */
#emp .el-table .error-row {
    background: oldlace;
}

#emp .nbsp{
	min-height:390px;
}

#emp .toolBotton {
		border:1px solid #CCCCCC;
		justify-content: flex-start;
		text-align: left;
		margin: 10px;
}



</style>