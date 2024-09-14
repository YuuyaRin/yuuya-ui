<template>
  <div class="section">
    <yuuya-button type="primary" @click="introVisible = true">Open</yuuya-button>
    <yuuya-button id="target1">target1</yuuya-button>
    <yuuya-button id="target2">target2</yuuya-button>
    <yuuya-button id="target3">target3</yuuya-button>
    <yuuya-intro :config="introConfig" v-model="introVisible"></yuuya-intro>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const introVisible = ref(false)
const introConfig = ref({
  tips: [
    {
      content: '1111111',
      el: '#target1',
      tipPosition: 'top'
    },
    {
      content: '222',
      el: '#target2',
      tipPosition: 'top'
    },
    {
      content: '333',
      el: '#target3',
      tipPosition: 'top'
    }
  ]
})
</script>
