<template>

<div class="block">
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activities: [{
          content: '盛龙',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '姬冰',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '侯嘉鑫',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '❀朱发硬❀',
          timestamp: '2018-04-03 20:46'
        }]
      };
    }
  };
</script>