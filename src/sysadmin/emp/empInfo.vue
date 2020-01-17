<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" size="mini" class="demo-ruleForm">
	{{empId}}
	<el-row>
		<el-col :span="12">
		  <el-form-item label="工号" prop="userNo">
			<el-input v-model="ruleForm.userNo"></el-input>
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="姓名" prop="userNm">
			<el-input v-model="ruleForm.userNm"></el-input>
		  </el-form-item>
		</el-col>	  
	</el-row>
	
	<el-row>
		<el-col :span="12">
		  <el-form-item label="账号" prop="loginId">
			<el-input v-model="ruleForm.loginId" ></el-input>
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="密码" prop="loginPwd">
			<el-input type="loginPwd" v-model="ruleForm.loginPwd"></el-input>
		  </el-form-item>
		</el-col>	  
	</el-row>
	
	<el-row>
		<el-col :span="12">
		  <el-form-item label="机构ID" prop="orgId">
			<el-input v-model="ruleForm.orgId" ></el-input>
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="机构编号" prop="orgNo">
			<el-input v-model="ruleForm.orgNo"></el-input>
		  </el-form-item>
		</el-col>	  
	</el-row>
	
	<el-row>
		<el-col :span="12">
		  <el-form-item label="部门ID" prop="deptId">
			<el-input v-model="ruleForm.deptId" ></el-input>
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="部门编号" prop="deptNo">
			<el-input v-model="ruleForm.deptNo"></el-input>
		  </el-form-item>
		</el-col>	  
	</el-row>
	
	<el-row>
		<el-col :span="12">
		  <el-form-item label="性别" prop="sexCd">
		    <el-radio-group v-model="ruleForm.sexCd">
		      <el-radio border label="男"></el-radio>
		      <el-radio border label="女"></el-radio>
		    </el-radio-group>
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="邮箱" prop="email">
		  			<el-input v-model="ruleForm.email"></el-input>
		  </el-form-item>
		</el-col>	  
	</el-row>
	<el-row>
		<el-col :span="16">
		  <el-form-item label="状态"  prop="recordSts">
		  			<el-radio-group  v-model="ruleForm.recordSts" >
		  			  <el-radio border label="运行"></el-radio>
		  			  <el-radio border label="锁定"></el-radio>
		  			  <el-radio border label="停用"></el-radio>
		  			</el-radio-group>
		  </el-form-item>
		</el-col>
		<el-col :span="8">
		 
		</el-col>	  
	</el-row>
	
	
	<el-row>
		<el-col :span="12">
		  <el-form-item label="电话" prop="telphoneNo">
			<el-input v-model="ruleForm.telphoneNo" ></el-input>
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="手机号码" prop="mobPhoneNo">
			<el-input v-model="ruleForm.mobPhoneNo"></el-input>
		  </el-form-item>
		</el-col>	  
	</el-row>
		
	<el-form-item label="备注" prop="remarks">
	  <el-input type="textarea" v-model="ruleForm.remarks"></el-input>
	</el-form-item>

  
  <el-row>
  	<el-col :span="12">
		<el-form-item>
			<el-button size="medium" type="primary" @click="submitForm('ruleForm')">保存</el-button>
		</el-form-item>
  	  
  	</el-col>
  	<el-col :span="12">
	  <el-form-item>
	  	<el-button size="medium" @click="resetForm('ruleForm')">重置</el-button>
	  </el-form-item>
  	</el-col>	  
  </el-row>
  
  
</el-form>
</template>
<script>
  export default {
	 
	created:function (){
		window.console.log("======");
		 window.console.log(this.empid);
		 window.console.log("======");
		
		let _this = this;
		this.$axios({
			method:'get',
			// data:{'username':_this.username,'password':_this.password},
			// url:'/app/system/login'
			url:'/app/user/selectByUserNo?userNo='
		}).then(function(res){
			window.console.log(res)
			window.console.log(res.data.code);
			window.console.log(res.data.message);
			window.console.log(res.data.data.result);
			_this.ruleForm =res.data.data.result; 
		});
		
	},  
	  
	name:'empInfo',
	created:function(){
		
	},
	props:{
		empId:String
	},
    data() {
      return {
        ruleForm: {
          userNo:'',
          userNm:'',
          loginId:'',
		  loginPwd:'',
          orgId:'',
          orgNo:'',
          orgName:'',
          deptId:'',
          deptNo:'',
          deptName:'',
          sexCd:'',
          email:'',
          telphoneNo:'',
          mobPhoneNo:'',
          recordSts:'',
        },
        rules: {
          userNo: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          userNm: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          loginPwd: [
            {  required: true, message: '请选择日期', trigger: 'change' }
          ],
          orgId: [
            { required: true, message: '请选择时间', trigger: 'change' }
          ],
          orgNo: [
            {  required: false, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          recordSts: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
		  let _this = this;
		  window.console.log(_this.ruleForm);
		  this.$axios({
		  	method:'post',
		  	data:{
				//'user':_this.ruleForm,
				'userNo':_this.ruleForm.userNo,
				'userNm':_this.ruleForm.userNm,
				'loginId':_this.ruleForm.loginId,
				'loginPwd':_this.ruleForm.loginPwd,
				'orgId':_this.ruleForm.orgId,
				'orgNo':_this.ruleForm.orgNo,
				// 'orgName':_this.ruleForm.orgName,
				'deptId':_this.ruleForm.deptId,
				'deptNo':_this.ruleForm.deptNo,
				// 'deptName':_this.ruleForm.deptName,
				'sexCd':_this.ruleForm.sexCd,
				'email':_this.ruleForm.email,
				'telphoneNo':_this.ruleForm.telphoneNo,
				'mobPhoneNo':_this.ruleForm.mobPhoneNo,
				'recordSts':_this.ruleForm.recordSts
			},
		  	// url:'/app/system/login'
		  	url:'/app/user/update?pageNum=1'
		  }).then(function(res){
		  	window.console.log(res);
		  	window.console.log(res.data.code);
		  	window.console.log(res.data.message);
		  });
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>