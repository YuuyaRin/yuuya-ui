<script setup lang="ts">
import Button from './components/Button/Button.vue'
import { onMounted, ref } from 'vue'
import type { ButtonInstance } from './components/Button/types.ts'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
// 获取button实例
const buttonRef = ref<ButtonInstance | null>()
// collapse测试参数
const openedValue = ref(['a'])
onMounted(() => {
  console.log('buttonRef', buttonRef.value?.ref)
})
</script>

<template>
  <main>
    <section class="component-section">
      <h1>Button</h1>
      <div class="section">
        <h3>default</h3>
        <Button ref="buttonRef">Test Button Test Button</Button>
        <Button disabled>Test Button Test Button</Button>
        <Button plain>plain plain plain</Button>
        <Button round>round</Button>
        <Button circle>circle</Button>
        <Button disabled>disabled</Button>
      </div>
      <div class="section">
        <h3>type</h3>
        <Button type="primary">Test Button Test Button</Button>
        <Button type="info">Test Button Test Button</Button>
        <Button type="warning">Test Button Test Button</Button>
        <Button type="success">Test Button Test Button</Button>
        <Button type="danger">Test Button Test Button</Button>
      </div>
      <div class="section">
        <h3>disabled</h3>
        <Button type="primary" disabled>Test Button Test Button</Button>
        <Button type="info" disabled>Test Button Test Button</Button>
        <Button type="warning" disabled>Test Button Test Button</Button>
        <Button type="success" disabled>Test Button Test Button</Button>
        <Button type="danger" disabled>Test Button Test Button</Button>
      </div>
      <div class="section">
        <h3>plain</h3>
        <Button type="primary" plain>Test Button Test Button</Button>
        <Button type="info" plain>Test Button Test Button</Button>
        <Button type="warning" plain>Test Button Test Button</Button>
        <Button type="success" plain>Test Button Test Button</Button>
        <Button type="danger" plain>Test Button Test Button</Button>
      </div>
      <div class="section">
        <h3>size</h3>
        <Button size="small" plain>Test Button Test Button</Button>
        <Button plain>Test Button Test Button</Button>
        <Button size="large" plain>Test Button Test Button</Button>
      </div>
    </section>

    <section class="component-section">
      <h1>Collapse</h1>
      <Collapse v-model="openedValue">
        <Item name="a">
          <template #title>
            <h2>slot标题</h2>
          </template>
          <h3>内容slot</h3>
          <div>内容slot</div>
        </Item>
        <Item name="b" title="title属性标题">
          <div>内容slot</div>
        </Item>
        <Item name="c" title="禁用状态标题" disabled>
          <div>内容slot</div>
        </Item>
      </Collapse>
    </section>
    <section class="component-section">
      <h1>Icon</h1>
      <div class="section">
        <h3>Type</h3>
        <Icon icon="fa-solid fa-star" size="2xl" spin />
        <Icon icon="fa-solid fa-star" size="2xl" spin type="primary" />
        <Icon icon="fa-solid fa-star" size="2xl" spin type="info" />
        <Icon icon="fa-solid fa-star" size="2xl" spin type="warning" />
        <Icon icon="fa-solid fa-star" size="2xl" spin type="danger" />
      </div>
      <div class="section">
        <h3>Color</h3>
        <Icon icon="fa-solid fa-star" size="2xl" spin color="#ff00ff" />
        <Icon icon="fa-solid fa-star" size="2xl" spin color="pink" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.section {
  margin-bottom: 10px;
}
.component-section {
  margin-bottom: 30px;
}
h1 {
  font-weight: bold;
}
</style>
