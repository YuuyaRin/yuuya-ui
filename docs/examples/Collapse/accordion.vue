<template>
  <div class="section">
    <yuuya-collapse v-model="openedValue" accordion>
      <yuuya-collapse-item name="a" title="title属性标题">
        <div>内容slot</div>
      </yuuya-collapse-item>
      <yuuya-collapse-item name="b">
        <template #title>
          <h3>slot标题</h3>
        </template>
        <div>内容slot</div>
      </yuuya-collapse-item>
      <yuuya-collapse-item name="c" title="title属性标题">
        <div>内容slot</div>
      </yuuya-collapse-item>
    </yuuya-collapse>
  </div>
</template>
<script setup lang="ts" name="button">
import { ref } from 'vue'
const openedValue = ref(['a'])
</script>
