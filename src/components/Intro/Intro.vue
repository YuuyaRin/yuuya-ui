<template>
  <!-- 引导组件Intro -->
  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <div class="intro" id="intro_box" v-if="modelValue">
      <!-- 顶部mask -->
      <!-- <div
        class="top"
        :style="{
          height: `${originalBox.top}px`,
          backgroundColor: `${props.config.maskColor || 'rgba(0, 0, 11, 0.32)'}`
        }"
      ></div> -->
      <div class="content" :style="{ height: `${originalBox.height}px` }">
        <!-- 左侧mask -->
        <!-- <div
          class="left"
          :style="{
            top: `${originalBox.top}px`,
            width: `${originalBox.left}px`,
            height: `${originalBox.height}px`,
            backgroundColor: `${
              props.config.maskColor || 'rgba(0, 0, 11, 0.32)'
            }`
          }"
        ></div> -->
        <div
          class="original-box"
          :style="{
            top: `${originalBox.top}px`,
            left: `${originalBox.left}px`,
            width: `${originalBox.width}px`,
            height: `${originalBox.height}px`
          }"
        >
          <!-- <div class="round round-flicker"></div> -->
        </div>
        <!-- 信息展示区域 -->
        <div
          class="tip-box"
          :style="tipBoxStyle"
          :class="currentTips.tipPosition"
          v-if="finishInit"
        >
          <div class="tip-content">
            <!-- 标题 -->
            <div class="title" v-if="currentTips.title" :style="config.titleStyle">
              {{ currentTips.title }}
            </div>
            <!-- 内容 -->
            <div class="content" :style="config.contentStyle">
              {{ currentTips.content }}
            </div>
            <!-- 操作 -->
            <div class="action" :style="{ justifyContent: 'center' }">
              <div class="step">
                <div
                  class="dot"
                  v-for="(item, index) in config?.tips || []"
                  :class="{ 'is-active': index === currentIndex }"
                ></div>
              </div>
              <slot
                name="prev"
                v-bind:index="currentIndex"
                v-bind:tipItem="currentTips"
                v-if="currentIndex !== 0"
              >
                <YuuyaButton @click="prev">上一步</YuuyaButton>
              </slot>
              <slot
                name="next"
                v-bind:index="currentIndex"
                v-bind:tipItem="currentTips"
                v-if="currentIndex !== config.tips.length - 1"
              >
                <YuuyaButton type="primary" @click="next">下一步</YuuyaButton>
              </slot>
              <slot
                name="done"
                v-bind:index="currentIndex"
                v-bind:tipItem="currentTips"
                v-if="currentIndex === config.tips.length - 1"
              >
                <YuuyaButton type="primary" @click="done">完成</YuuyaButton>
              </slot>
              <!-- <slot
                v-else
                name="skip"
                v-bind:index="currentIndex"
                v-bind:tipItem="currentTips"
              >
                <el-button @click="done">跳过</el-button>
              </slot> -->
            </div>
          </div>
          <div class="intro-arrow"></div>
        </div>
        <!-- 右侧mask -->
        <!-- <div
          class="right"
          :style="{
            top: `${originalBox.top}px`,
            left: `${originalBox.left + originalBox.width}px`,
            width: `calc(100% - ${originalBox.left + originalBox.width}px)`,
            height: `${originalBox.height}px`,
            backgroundColor: `${
              props.config.maskColor || 'rgba(0, 0, 11, 0.32)'
            }`
          }"
          ref="tip_box"
        ></div> -->
      </div>
      <!-- 底部mask -->
      <!-- <div
        class="bottom"
        :style="{
          height: `calc(100% - ${originalBox.top}px - ${originalBox.height}px)`,
          backgroundColor: `${props.config.maskColor || 'rgba(0, 0, 11, 0.32)'}`
        }"
      ></div> -->
    </div>
  </transition>
  <IntroMask
    :pos="originalBox"
    :fill="config.backgroundColor || 'rgba(0,0,0,.1)'"
    v-if="modelValue"
  />
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue'
import IntroMask from './mask.vue'
defineOptions({
  name: 'YuuyaIntro'
})
import { throttle } from './util'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true
  },
  config: {
    type: Object,
    default: {}
  }
})
const emits = defineEmits(['update:modelValue', 'close'])
const finishInit = ref(false)
// 盒子位置、大小信息
const originalBox = reactive({
  left: 0,
  top: 0,
  width: 0,
  height: 0,
  radius: 8
})
// 提示盒子的位置
const tipBoxPosition = ref('bottom')
// 当前显示的提示进度索引
const currentIndex = ref(0)
// 当前提示
const currentTips = computed(() => {
  return props.config.tips[currentIndex.value]
})
// 提示box位置信息
const tipBoxStyle = computed(() => {
  const distance = 16
  if (tipBoxPosition.value === 'right') {
    return {
      left: `${originalBox.left + originalBox.width + distance}px`,
      top: `${originalBox.top + originalBox.height / 2}px`,
      transform: 'translateY(-50%)'
    }
  } else if (tipBoxPosition.value === 'left') {
    return {
      left: 'auto',
      right: `${window.innerWidth - originalBox.left + distance}px`,
      top: `${originalBox.top + originalBox.height / 2}px`,
      transform: 'translateY(-50%)'
    }
  } else if (tipBoxPosition.value === 'top') {
    return {
      left: `${originalBox.left + originalBox.width / 2}px`,
      bottom: `${window.innerHeight - originalBox.top + distance}px`,
      transform: 'translateX(-50%)'
    }
  } else if (tipBoxPosition.value === 'bottom') {
    return {
      left: `${originalBox.left + originalBox.width / 2}px`,
      top: `${originalBox.top + originalBox.height + distance}px`,
      transform: 'translateX(-50%)'
    }
  } else {
    return {
      left: `${originalBox.left + originalBox.width / 2}px`,
      top: `${originalBox.top + originalBox.height + distance}px`,
      transform: 'translateX(-50%)'
    }
  }
})
// 初始化
const init = () => {
  // 获取config中的tips数组
  const { tips } = props.config
  let timer: number | undefined
  // 判断tips是否存在 并且tips是否是数组
  if (tips && Array.isArray(tips) && tips.length) {
    currentIndex.value = 0
    try {
      let firstBox = document.querySelector(tips[0].el)
      timer = setInterval(() => {
        firstBox = document.querySelector(tips[0].el)
        if (firstBox) {
          // 如果第一个盒子存在
          finishInit.value = true
          setBoxInfo(0)
          clearInterval(timer)
        }
      }, 500)
    } catch (error: any) {
      throw new Error(error.message)
    }
  } else {
    throw new Error('config.tips 必须是数组且不能为空')
  }
}

// 根据标签获取盒子的位置
const setBoxInfo = async (index?: number | undefined) => {
  try {
    if (index === undefined) {
      index = currentIndex.value
    }
    if (props.modelValue) {
      // 禁止页面滚动
      document.body.style.overflow = 'hidden'
    }
    // 根据选择器获取对应元素
    let el = props.config.tips[index].el
    let box = document.querySelector(el)
    if (!box) {
      throw new Error('没有找到相应的元素')
    }
    // 获取DOMRect对象
    let rect = box.getBoundingClientRect()
    // 更新位置信息
    Object.assign(originalBox, {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    })
    // 获取当前步骤展示方向配置
    tipBoxPosition.value = props.config.tips[index].tipPosition || 'bottom'
    // 更新索引
    currentIndex.value = index
  } catch (error: any) {
    throw new Error(error.message)
  }
}
// 上一步
const prev = async () => {
  // 判断是否有onPrev 是否可以继续往下走
  let flag = true
  if (currentTips.value && currentTips.value.onPrev) {
    flag = await currentTips.value.onPrev()
  }
  // 如果不能继续往下走
  if (!flag) {
    throw new Error('onPrev 需要 Promise.resolve(true) 才可以继续往下走')
  }
  setBoxInfo(currentIndex.value - 1)
}
// 下一步
const next = async () => {
  // 判断是否有onNext 是否可以继续往下走
  let flag = true
  console.log(currentTips.value)

  if (currentTips.value && currentTips.value.onNext) {
    flag = await currentTips.value.onNext()
  }
  // 如果不能继续往下走
  if (!flag) {
    throw new Error('onNext 需要 Promise.resolve(true) 才可以继续往下走')
  }
  setBoxInfo(currentIndex.value + 1)
}
// 完成
const done = () => {
  emits('update:modelValue', false)
  emits('close')
}

onMounted(() => {
  window.onresize = throttle(() => {
    if (props.modelValue) {
      setBoxInfo()
    }
  }, 100)
})
init()
</script>
