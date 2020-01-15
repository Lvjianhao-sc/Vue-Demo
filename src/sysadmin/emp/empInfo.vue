<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" size="mini" class="demo-ruleForm">
	
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
		  <el-form-item label="密码" prop="password">
			<el-input type="password" v-model="ruleForm.password"></el-input>
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
			<el-input v-model="ruleForm.orgId" ></el-input>
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="部门编号" prop="deptNo">
			<el-input v-model="ruleForm.orgNo"></el-input>
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
	name:'empInfo',
	props:{
		empId:String
	},
    data() {
      return {
        ruleForm: {
          userNo:'',
          userNm:'',
          loginId:'',
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
          login_pwd: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          orgId: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          orgNo: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
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