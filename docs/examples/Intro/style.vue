<template>
  <div class="section">
    <yuuya-button type="primary" @click="introVisible = true">Open</yuuya-button>
    <yuuya-button id="target3-1">1</yuuya-button>
    <yuuya-button id="target3-2">2</yuuya-button>
    <yuuya-button id="target3-3">3</yuuya-button>
    <yuuya-button id="target3-4">4</yuuya-button>
    <yuuya-intro :config="introConfig" v-model="introVisible"></yuuya-intro>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const introVisible = ref(false)
const introConfig = ref({
  backgroundColor: 'rgba(106,112,211,0.2)',
  titleStyle: {
    color: 'pink',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  contentStyle: {
    color: 'blue',
    textDecoration: 'underline'
  },
  tips: [
    {
      content: 'backgroundColor设置遮罩层颜色',
      el: '#target3-1',
      tipPosition: 'top'
    },
    {
      title: 'titleStyle',
      content: '自定义标题样式',
      el: '#target3-2',
      tipPosition: 'left'
    },
    {
      content: 'contentStyle自定义内容样式',
      el: '#target3-3',
      tipPosition: 'right',
      onNext() {
        alert('onNext')
        return true // 继续下一步
      }
    },
    {
      content: '444',
      el: '#target3-4',
      tipPosition: 'bottom',
      onPrev() {
        alert('onPrev')
        return false // 阻止上一步
      }
    }
  ]
})
</script>
