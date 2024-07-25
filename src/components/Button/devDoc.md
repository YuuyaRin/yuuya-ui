## Button组件

### 1.引入postcss-each插

安装postcss-each插件（postcss），配置postcss.config.cjs
因为要使用`@each $val in primary, success, info, danger, warning`语法

### 2.定义Props

- #### interface【ButtonProps】定义 （types.ts）

  - ButtonType、ButtonSize、NativeType 字面量定义
  - plain、round、circle、disabled、autofocus 布尔值定义

- #### type【ButtonInstance】定义

  用于返回实例ref:HTMLButtonElement

- #### 根据interface声明Props,赋予默认值

  `withDefaults(defineProps<ButtonProps>(), { nativeType: 'button' })`

- #### 声明组件name

  ```
  defineOptions({
    name: 'YuuyaButton'
  })
  ```

- #### 声明组件实例ref并向外暴露

  ```
  const _ref = ref<HTMLButtonElement>()
  defineExpose({
    ref: _ref
  })
  ```

- #### 根据props生成class，覆盖原生属性(disabled,type,autofocus),定义slot
  ```
  <button
  ref="\_ref"
  class="yuuya-button"
  :class="{
  [`yuuya-button--${type}`]: type,
  [`yuuya-button--${size}`]: size,
  'is-plain': plain,
  'is-round': round,
  'is-circle': circle,
  'is-disabled': disabled
  }"
  :disabled="disabled"
  :type="nativeType"
  :autofocus="autofocus"
  >
  <span><slot></slot></span>
  > </button>
  ```

### 3.样式定义

- #### .yuuya-button 基础按钮样式
  - 在.yuuya-button下定义按钮组件样式变量
  - 定义默认类型按钮样式（包含默认，hover,focus,active状态）
- #### 不同状态按钮样式
  - is-disabled(覆盖button原生默认disabled样式)
  - is-plain 朴素模式
  - is-round 圆角按钮
  - is-circle 圆形按钮
  - is-disabled 禁用
- #### 不同模式按钮样式（primary, success, info, danger, warning）

  ```
  @each $val in primary, success, info, danger, warning {
    .yuuya-button--$(val) {
      // 覆盖按钮相关样式变量
    }
    .yuuya-button--$(val).is-plain{
      // 覆盖朴素模式样式变量
    }
  }
  ```

- #### 不同大小按钮样式

  ```
  .yuuya-button--large{

  }
  .yuuya-button--small{

  }
  ```
