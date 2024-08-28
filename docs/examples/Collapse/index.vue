<template>
  <div class="section">
    <yuuya-collapse v-model="openedValue" @change="onChange">
      <yuuya-collapse-item name="a" title="title属性标题">
        <div>内容slot</div>
      </yuuya-collapse-item>
      <yuuya-collapse-item name="b" title="title属性标题">
        <template #title>
          <h3>slot标题</h3>
        </template>
        <div>内容slot</div>
      </yuuya-collapse-item>
      <yuuya-collapse-item name="c" title="禁用" disabled> </yuuya-collapse-item>
    </yuuya-collapse>
  </div>
</template>
<script setup lang="ts" name="button">
import { ref } from 'vue'
const openedValue = ref(['a'])
// 监听改变，返回当前展开项
const onChange = (val) => {
  console.log('yuuya-collapse', val)
}
</script>
