<template>
<div>
  <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
    v-model="value"
    :data="data"
	:titles="['未拥有岗位', '已拥有岗位']"
	style="margin-left:25px;min-height: 400px;"
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
    data() {
      const generateData = _ => {
		//初始化数据
        const data = [];
        const cities = ['客户经理岗', '营销团队负责人', '行长', '授信管理岗', '有权签批人', '审核初审岗', '有权复审人'];
        const serch = ['客户经理岗', '营销团队负责人', '行长', '授信管理岗', '有权签批人', '审核初审岗', '有权复审人'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            serch: serch[index]
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
			
		},
	}
  };
</script>