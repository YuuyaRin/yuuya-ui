<template>
  <div class="yuuya-collapse">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollpaseEmits } from './types'
import { CollapseContextKey } from './types'

defineOptions({
  name: 'YuuyaCollapse'
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollpaseEmits>()

// activeNames 是一个数组，用于记录当前展开的项的 name
const activeNames = ref<NameType[]>(props.modelValue || [])
// 监听外部props modelValue 变化，更新 activeNames（若不监听，从外部直接更新v-model中的值会导致activeNames不更新）
watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  }
)

// 手风琴模式只支持一个展开的项
if (props.accordion && activeNames.value.length > 1) {
  console.warn('Collapse: accordion mode only support one active item')
}

// 子项点击事件处理函数
const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    // 手风琴模式
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  } else {
    // 常规模式
    const index = activeNames.value.indexOf(item)
    // 已存在则移除，不存在则添加
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(item)
    }
  }
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}

// 提供上下文数据 Provide(key, value)
provide(CollapseContextKey, { activeNames, handleItemClick })
</script>
