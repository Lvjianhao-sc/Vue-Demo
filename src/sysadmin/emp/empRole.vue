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
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        }
      };
    },
	methods:{
		save(){
			
		},
	}
  };
</script>