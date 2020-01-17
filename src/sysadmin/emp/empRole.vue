<template>
<div>
  <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
    v-model="value"
    :data="data"
	:titles="['未拥有角色', '已拥有角色']"
	style="margin-left:25px;min-height: 400px;"
	@change="change()"
	@left-check-change="leftChange()"
	@right-check-change="rightChange()"
	>
  </el-transfer>
  <el-col style="text-align: center;">
  	<el-button size="medium" type="primary" @click="save()">保存</el-button>
  </el-col>
 </div>
</template>
<!-- :left-default-checked="[2, 3]"
      :right-default-checked="[1]" 默认选中项目 -->
<script>
  export default {
	created:function () {
		//页面初始化方法
		this.value = ['R002'];//初始化已有岗位
	},
	props:{
		empId:String
	},
    data() {
      const generateData = _ => {
		 
		//初始化全部岗位
        const data = [];
        const cities = [
			{roleName:"客户经理操作员",roleNo:"R001"},
			{roleName:"系统管理员",roleNo:"R002"},
			{roleName:"机构管理员",roleNo:"R003"},
			{roleName:"风险操作员",roleNo:"R004"},
			{roleName:"综合灵活查询员",roleNo:"R005"},
		];
        //const serch = ['客户经理岗', '营销团队负责人', '行长', '授信管理岗', '有权签批人', '审核初审岗', '有权复审人'];
        cities.forEach((value, index) => {
          data.push({
            label: value.roleName,
            key: value.roleNo,
            serch: cities[index].roleName
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.serch.indexOf(query) > -1;
        }
      };
    },
	methods:{
		save(){
			let _this = this;
			this.$axios({
				method:'post',
				data:{'role':_this.data},
				// url:'/app/system/login'
				url:'/app/role/insertRole?pageNum=1'
			}).then(function(res){
				window.console.log(res)
				window.console.log(res.data.code);
				window.console.log(res.data.message);
				window.console.log(res.data.data.result);
			});
		},
		change(){//左右数据穿梭发生变化时
			window.console.log('----change----');
			window.console.log(this.value+"");
		},
		leftChange(){//左边勾选发生变化时
			window.console.log('----Leftchange----');
			window.console.log(this.value+"");
		},
		rightChange(){//右边勾选发生变化时
			window.console.log('----Rightchange----');
			window.console.log(this.value+"");
		}
	}
  };
</script>