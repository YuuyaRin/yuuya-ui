<template>
  <i class="yuuya-icon" :class="{ [`yuuya-icon--${type}`]: type }" :style="customStyles">
    <!-- $props 将外部props全部传入此组件 -->
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>
<script setup lang="ts">
import { omit } from 'lodash-es'
// 引用icon组件及props类型定义
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconProps } from './types'
import { computed } from 'vue'

defineOptions({
  name: 'YuuyaIcon',
  inheritAttrs: false // 阻止v-bind直接将属性应用到子组件的根元素上
})

// 声明props,沿用FontAwesomeIcon组件参数类型定义
const props = defineProps<IconProps>()

// 过滤font-awesome-icon组件props外自定义的附加属性
const filteredProps = computed(() => {
  return omit(props, ['type', 'color'])
})

// 根据props.color生成内联样式
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>
