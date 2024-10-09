<template>
  <div
    class="yuuya-alert"
    v-if="visible"
    :class="{ 'is-center': center, [`is-${effect}`]: effect, [`yuuya-alert--${type}`]: type }"
  >
    <Icon
      :icon="getIcon"
      v-if="showIcon"
      class="yuuya-alert_icon"
      :class="{ 'is-big': !!props.description }"
    ></Icon>
    <div class="yuuya-alert__content">
      <span class="yuuya-alert_title" :class="{ 'with-description': description }">
        <slot name="title">{{ title }}</slot>
      </span>
      <p v-if="$slots.default || description" class="yuuya-alert_description">
        <slot>{{ description }}</slot>
      </p>
      <template v-if="closable">
        <div v-if="closeText" class="yuuya-alert__close-btn is-customed" @click="close">
          {{ closeText }}
        </div>
        <Icon v-else icon="close" class="yuuya-alert__close-btn" @click="close"></Icon>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { AlertProps } from './types'
import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'YuuyaAlert'
})
const emits = defineEmits(['close'])
const props = withDefaults(defineProps<AlertProps>(), { effect: 'light' })
const visible = ref(true)
const getIcon = computed(() => {
  // props.type
  const iconDict = {
    primary: 'check-circle',
    success: 'check-circle',
    info: 'circle-info',
    warning: 'circle-info',
    danger: 'circle-xmark'
  }
  return iconDict[props.type]
})
const close = () => {
  visible.value = false
  emits('close')
}
</script>
