<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    ref="_ref"
    class="yuuya-button"
    :class="{
      [`yuuya-button--${type}`]: type,
      [`yuuya-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled || loading,
      'is-loading': loading
    }"
    :disabled="disabled"
    :type="nativeType"
    :autofocus="autofocus"
  >
    <Icon icon="spinner" spin v-if="loading"></Icon>
    <Icon :icon="icon" v-if="icon"></Icon>
    <span><slot></slot></span>
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types.ts'
import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'YuuyaButton'
})
// 给予props默认值(nativeType为button原生熟悉，默认为button)
withDefaults(defineProps<ButtonProps>(), { nativeType: 'button' })

// 对外暴露组件实例
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>
<style></style>
