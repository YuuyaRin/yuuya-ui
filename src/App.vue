<script setup lang="ts">
import Button from './components/Button/Button.vue'
import { onMounted, ref } from 'vue'
import type { ButtonInstance } from './components/Button/types.ts'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import Intro from './components/Intro/Intro.vue'
import Alert from './components/Alert/Alert.vue'
// 获取button实例
const buttonRef = ref<ButtonInstance | null>()
// collapse测试参数
const openedValue = ref(['a'])
onMounted(() => {
  console.log('buttonRef', buttonRef.value?.ref)
})
// intro
const introVisible = ref(false)
const introConfig = ref({
  tips: [
    {
      content: '1111111',
      el: '#target1',
      tipPosition: 'top'
    },
    {
      content: '222',
      el: '#target2',
      tipPosition: 'top'
    },
    {
      content: '333',
      el: '#target3',
      tipPosition: 'top'
    }
  ]
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
      <div class="section">
        <h3>Icon</h3>
        <Button :loading="true" size="large">loading</Button>
        <Button icon="fa-solid fa-star">Icon</Button>
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
    <section class="component-section">
      <h1>Intro</h1>
      <div class="section">
        <Button type="primary" @click="introVisible = true">Open</Button>
        <Button id="target1">target1</Button>
        <Button id="target2">target2</Button>
        <Button id="target3">target3</Button>
      </div>
      <Intro :config="introConfig" v-model="introVisible"></Intro>
    </section>
    <section class="compoennt-section">
      <h1>Alert</h1>
      <div class="section">
        <Alert
          type="primary"
          :show-icon="true"
          title="Alert Title"
          description="Alert Description"
          :closable="true"
          closeText="关闭"
          effect="dark"
        ></Alert>
        <Alert
          type="primary"
          :show-icon="true"
          title="Alert Title"
          description="Alert Description"
          :closable="true"
          closeText="关闭"
        ></Alert>
        <Alert
          :show-icon="true"
          title="Alert Title"
          type="primary"
          effect="dark"
          :closable="true"
        ></Alert>
        <Alert
          :show-icon="true"
          title="Alert Title"
          type="success"
          effect="dark"
          :closable="true"
        ></Alert>
        <Alert
          :show-icon="true"
          title="Alert Title"
          type="info"
          effect="dark"
          :closable="true"
        ></Alert>
        <Alert
          :show-icon="true"
          title="Alert Title"
          type="warning"
          effect="dark"
          :closable="true"
        ></Alert>
        <Alert
          :show-icon="true"
          title="Alert Title"
          type="danger"
          effect="dark"
          :closable="true"
        ></Alert>
        <Alert
          :show-icon="true"
          title="Alert Title"
          type="primary"
          effect="light"
          :closable="true"
        ></Alert>
        <Alert
          :show-icon="true"
          title="Alert Title"
          type="success"
          effect="light"
          :closable="true"
        ></Alert>
        <Alert
          :show-icon="true"
          title="Alert Title"
          type="info"
          effect="light"
          :closable="true"
        ></Alert>
        <Alert
          :show-icon="true"
          title="Alert Title"
          type="warning"
          effect="light"
          :closable="true"
        ></Alert>
        <Alert
          :show-icon="true"
          title="Alert Title"
          type="danger"
          effect="light"
          :closable="true"
        ></Alert>
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
