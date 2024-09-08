<template>
  <div class="yuuya-collapse-item" :class="{ 'is-disabled': disabled }">
    <div
      class="yuuya-collapse-item__header"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <icon icon="angle-right" class="header-angle"></icon>
    </div>
    <Transition name="slide" v-bind="transitionEvents">
      <div class="yuuya-collapse-item__wrapper" v-show="isActive">
        <!-- yuuya-collapse-item__content具有padding,用wrapper包裹便于直接用父容器height控制过渡动画，无需单独处理content的padding过渡 -->
        <div class="yuuya-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { inject, computed } from 'vue'
import type { CollapseItemProps } from './types'
import { CollapseContextKey } from './types'
import Icon from '../Icon/Icon.vue'
// 注册组件
defineOptions({
  name: 'YuuyaCollapseItem'
})
// 接收 props
const props = defineProps<CollapseItemProps>()
// 接收上下文
const CollapseContext = inject(CollapseContextKey)
// 当前项是否展开（判断子组件name是否包含在activeNames数组中）
const isActive = computed(() => CollapseContext?.activeNames.value.includes(props.name))
// 点击事件处理函数
const handleClick = () => {
  if (props.disabled) return
  CollapseContext?.handleItemClick(props.name)
}
// Record 是一个实用的工具类型，用于构造一个对象类型，其中键和值具有指定的类型。Record 类型可以让你创建一个对象，其中键的类型是你定义的某些特定键，值的类型也是你指定的类型。
// 定义<Transition>的事件,key为事件名,value为事件处理函数
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  onBeforeEnter: (el) => {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  onEnter: (el) => {
    // scrollHeight 是一个只读属性，用于获取元素的内容高度（包括溢出部分）
    el.style.height = `${el.scrollHeight}px`
  },
  onAfterEnter: (el) => {
    el.style.height = ''
    el.style.overflow = ''
  },
  onBeforeLeave: (el) => {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  onLeave: (el) => {
    el.style.height = '0px'
  },
  onAfterLeave: (el) => {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>
