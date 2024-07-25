## Collapse组件

### 1.定义父组件Collapse

- #### 外容器及默认插槽
  ```
  <div class="yuuya-collapse">
    <slot></slot>
  </div>
  ```
- #### 参数定义
  - activeNames: 展开的面板
  - handleItemClick: 点击子面板的回调，修改activeNames状态
- #### context传递
  因为子组件需要获取父组件的activeNames状态，点击时需要调用handleItemClick函数，所以需要定义context传递
  父组件通过slot方式引入子组件，因此无法使用props，emit通信
  - 定义Provide/inject
    - 定义context类型interface
      ```
      export interface CollapseContext {
        activeNames: Ref<NameType[]>
        handleItemClick: (name: NameType) => void
      }
      ```
    - 使用symbol定义唯一inject key值
      ```
      export const CollapseContextKey: InjectionKey<CollapseContext> = Symbol('CollapseContextKey')
      ```
    - provide传递context
      ```
      provide(CollapseContextKey, { activeNames, handleItemClick })
      ```
- #### 实现双向绑定

  - props interface定义
    ```
    export interface CollapseProps {
      modelValue: NameType[] // 展开的面板
      accordion?: boolean // 是否为手风琴模式
    }
    ```
  - emit interface定义
    ```
    export interface CollpaseEmits {
      (e: 'update:modelValue', value: NameType[]): void // 用于实现双向绑定
      (e: 'change', value: NameType[]): void // 用于实现监听
    }
    ```
  - 点击事件后触发emit

    ```
    const props = defineProps<CollapseProps>()
    const emits = defineEmits<CollpaseEmits>()
    const activeNames = ref<NameType[]>(props.modelValue || [])

    // 监听外部props modelValue 变化，更新 activeNames
    watch(
      () => props.modelValue,
      () => {
        activeNames.value = props.modelValue
      }
    )
    ```

    ```
    const handleItemClick = (item: NameType) => {
    ...
    ...
    emits('update:modelValue', activeNames.value)
    emits('change', activeNames.value)
    }
    ```

  - 实现手风琴模式

    - v-model初始activeNames数量超过1则给予提示
      ```
      // 手风琴模式只支持一个展开的项
      if (props.accordion && activeNames.value.length > 1) {
        console.warn('Collapse: accordion mode only support one active item')
      }
      ```
    - handleClick函数中增加独立逻辑

      ```
      const handleItemClick = (item: NameType) => {
        if (props.accordion) {
          // 手风琴模式
          activeNames.value = [activeNames.value[0] === item ? '' : item]
        }
        ...
        ...
      }

      ```

### 2.定义子组件CollapseItem

- #### 基础结构

  - header:包含具名插槽
  - content:包含默认插槽

```

    <div class="yuuya-collapse-item" :class="{ 'is-disabled': disabled }">
      <div class="yuuya-collapse-item__header" :class="{ 'is-disabled': disabled, 'is-active': isActive }" :id="`item-header-${name}`">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="yuuya-collapse-item__content" :id="`item-content-${name}`">
        <slot></slot>
      </div>
    </div>

```

- #### 声明Props

定义type:CollapseItemProps

```

interface CollapseItemProps {
name: string | number // 唯一标识
title: string // 标题
disabled?: boolean // 是否禁用
}

```

- #### 接收context

```

const CollapseContext = inject(CollapseContextKey)

```

- #### 关键参数定义

  - isActive: 展开状态

```

const isActive = computed(() => CollapseContext?.activeNames.value.includes(props.name))

```

- handleClick: 点击事件(disabled状态时不执行，否则执行父组件handleItemClick)

```

const handleClick = () => {
if (props.disabled) return
CollapseContext?.handleItemClick(props.name)
}

```

- #### 核心样式文件 style.css
  - .yuuya-collapse 核心变量定义
  - .yuuya-collapse-item\_\_header header样式定义
  - .yuuya-collapse-item\_\_content content样式定义
  - content区域过度动画效果(<transition>标签)
- #### transition动画效果实现
  - 定义transition事件
  ```
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
  ```
  - 将定义的transitionEvents作为v-bind传递到<Transition>标签中
  ```
  <Transition name="slide" v-bind="transitionEvents">
    <div class="yuuya-collapse-item__wrapper" v-show="isActive">
      <!-- yuuya-collapse-item__content具有padding,用wrapper包裹便于直接用父容器height控制过渡动画，无需单独处理content的padding过渡 -->
      <div class="yuuya-collapse-item__content" :id="`item-content-${name}`">
        <slot></slot>
      </div>
    </div>
  </Transition>
  ```
