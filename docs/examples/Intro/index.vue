<template>
  <div class="section">
    <yuuya-button type="primary" @click="introVisible = true">Open</yuuya-button>
    <yuuya-button id="target1">top</yuuya-button>
    <yuuya-button id="target2">left</yuuya-button>
    <yuuya-button id="target3">right</yuuya-button>
    <yuuya-button id="target4">bottom</yuuya-button>
    <yuuya-intro :config="introConfig" v-model="introVisible"></yuuya-intro>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const introVisible = ref(false)
const introConfig = ref({
  tips: [
    {
      content: '内容1',
      el: '#target1',
      tipPosition: 'top'
    },
    {
      title: '带标题Intro',
      content: '内容2',
      el: '#target2',
      tipPosition: 'left'
    },
    {
      content: '333',
      el: '#target3',
      tipPosition: 'right',
      onNext() {
        alert('onNext')
        return true // 继续下一步
      }
    },
    {
      content: '444',
      el: '#target4',
      tipPosition: 'bottom',
      onPrev() {
        alert('onPrev')
        return false // 阻止上一步
      }
    }
  ]
})
</script>
