<template>
  <div class="intro-mask" v-bind="$attrs">
    <svg
      :style="{
        width: '100%',
        height: '100%'
      }"
    >
      <path class="el-hollow" :style="pathStyle" :d="path" />
    </svg>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { MaskProps } from './types'

defineOptions({
  name: 'YuuyaIntroMask'
})

const props = defineProps<MaskProps>()

// svg 样式
const pathStyle = computed(() => {
  return {
    fill: props.fill,
    PointerEvent: 'auto',
    cursor: 'auto'
  }
})
// 圆角
const radius = computed(() => props.pos?.radius ?? 2)

const roundInfo = computed(() => {
  const v = radius.value
  const baseInfo = `a${v},${v} 0 0 1`
  return {
    topRight: `${baseInfo} ${v},${v}`,
    bottomRight: `${baseInfo} ${-v},${v}`,
    bottomLeft: `${baseInfo} ${-v},${-v}`,
    topLeft: `${baseInfo} ${v},${-v}`
  }
})

const path = computed(() => {
  const width = window.innerWidth
  const height = window.innerHeight
  const info = roundInfo.value
  const _path = `M${width},0 L0,0 L0,${height} L${width},${height} L${width},0 Z`
  const _radius = radius.value
  return props.pos
    ? `${_path} M${props.pos.left + _radius},${props.pos.top} h${
        props.pos.width - _radius * 2
      } ${info.topRight} v${props.pos.height - _radius * 2} ${
        info.bottomRight
      } h${-props.pos.width + _radius * 2} ${info.bottomLeft} v${
        -props.pos.height + _radius * 2
      } ${info.topLeft} z`
    : _path
})
</script>
