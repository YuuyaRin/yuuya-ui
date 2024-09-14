<template>
  <div class="section">
    <yuuya-button type="primary" @click="introVisible = true">Open</yuuya-button>
    <yuuya-button id="target2-1">target1</yuuya-button>
    <yuuya-button id="target2-2">target2</yuuya-button>
    <yuuya-button id="target2-3">target3</yuuya-button>
    <yuuya-button id="target2-4">target4</yuuya-button>
    <yuuya-intro :config="introConfig" v-model="introVisible">
      <template #prev="{ index, tipItem, handle }">
        <yuuya-button type="warning" round @click="console.log(index, tipItem), handle()"
          >prev</yuuya-button
        >
      </template>
      <template #next="{ index, tipItem, handle }">
        <yuuya-button type="info" round @click="console.log(index, tipItem), handle()"
          >next</yuuya-button
        >
      </template>
      <template #done="{ index, tipItem, handle }">
        <yuuya-button type="info" round @click="console.log(index, tipItem), handle()"
          >done</yuuya-button
        >
      </template>
    </yuuya-intro>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const introVisible = ref(false)
const introConfig = ref({
  tips: [
    {
      content: '操作按钮支持通过Slot自定义',
      el: '#target2-1',
      tipPosition: 'top'
    },
    {
      title: 'Slot',
      content: '包含next、prev、done',
      el: '#target2-2',
      tipPosition: 'left'
    },
    {
      content: 'slot参数返回index, tipItem, handle',
      el: '#target2-3',
      tipPosition: 'right'
    },
    {
      content: '分别为当前步骤索引、当前tip配置、当前按钮默认执行的函数',
      el: '#target2-4',
      tipPosition: 'bottom'
    }
  ]
})
</script>
