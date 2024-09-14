<template>
  <div class="test">
    <Extend :render="render"></Extend>
  </div>
</template>
<script setup>
import Extend from './extend'
import { h } from 'vue'
const render = () => {
  return h(
    'div',
    {
      onClick: () => {
        alert(2)
      }
    },
    '测试一下点击'
  )
}
</script>
