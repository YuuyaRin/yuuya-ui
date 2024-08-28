<template>
  <i class="yuuya-icon">
    <!-- $props 将外部props全部传入此组件 -->
    <font-awesome-icon v-bind="$props" />
  </i>
</template>
<script setup lang="ts">
// 引用icon组件及props类型定义
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'

defineOptions({
  name: 'YuuyaIcon',
  inheritAttrs: false // 阻止v-bind直接将属性应用到子组件的根元素上
})
// 声明props,沿用FontAwesomeIcon组件参数类型定义
defineProps<FontAwesomeIconProps>()
</script>
