<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" size="mini" class="demo-ruleForm">
	<el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
	<el-row>
		<el-col :span="12">
		  <el-form-item label="工号" prop="user_no">
			<el-input v-model="ruleForm.user_no"></el-input>
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="姓名" prop="user_nm">
			<el-input v-model="ruleForm.user_nm"></el-input>
		  </el-form-item>
		</el-col>	  
	</el-row>
	
	<el-row>
		<el-col :span="12">
		  <el-form-item label="账号" prop="login_id">
			<el-input v-model="ruleForm.login_id" ></el-input>
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
		  <el-form-item label="机构ID" prop="org_id">
			<el-input v-model="ruleForm.org_id" ></el-input>
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="机构编号" prop="org_no">
			<el-input v-model="ruleForm.org_no"></el-input>
		  </el-form-item>
		</el-col>	  
	</el-row>
	
	<el-row>
		<el-col :span="12">
		  <el-form-item label="部门ID" prop="dept_id">
			<el-input v-model="ruleForm.org_id" ></el-input>
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="部门编号" prop="dept_no">
			<el-input v-model="ruleForm.org_no"></el-input>
		  </el-form-item>
		</el-col>	  
	</el-row>
	
	<el-row>
		<el-col :span="12">
		  <el-form-item label="性别" prop="sex_cd">
		    <el-radio-group v-model="ruleForm.sex_cd">
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
		  <el-form-item label="状态"  prop="record_sts">
		  			<el-radio-group  v-model="ruleForm.record_sts" >
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
		  <el-form-item label="电话" prop="telphone_no">
			<el-input v-model="ruleForm.telphone_no" ></el-input>
		  </el-form-item>
		</el-col>
		<el-col :span="12">
		  <el-form-item label="手机号码" prop="mob_phone_no">
			<el-input v-model="ruleForm.mob_phone_no"></el-input>
		  </el-form-item>
		</el-col>	  
	</el-row>
	
	<el-form-item label="备注" prop="remarks">
	  <el-input type="textarea" v-model="ruleForm.remarks"></el-input>
	</el-form-item>

  
  <el-row>
  	<el-col :span="12">
		<el-form-item>
			<el-button size="medium" type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
    data() {
      return {
        ruleForm: {
          user_no:'',
          user_nm:'',
          login_id:'',
          org_id:'',
          org_no:'',
          org_name:'',
          dept_id:'',
          dept_no:'',
          dept_name:'',
          sex_cd:'',
          email:'',
          telphone_no:'',
          mob_phone_no:'',
          record_sts:'',
        },
        rules: {
          user_no: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          user_nm: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          login_pwd: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          org_id: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          org_no: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          record_sts: [
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