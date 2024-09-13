<template>
  <div
    class="yuuya-alert"
    v-if="visible"
    :class="{ 'is-center': center, [`is-${effect}`]: effect, [`yuuya-alert--${type}`]: type }"
  >
    <Icon icon="spinner" spin v-if="showIcon"></Icon>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { AlertProps } from './types'
import Icon from '../Icon/Icon.vue'
defineOptions({
  name: 'YuuyaAlert'
})
const props = defineProps<AlertProps>()
const visible = ref(true)
</script>
