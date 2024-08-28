### 依赖安装 https://docs.fontawesome.com/

#### 安装svg core

`npm i --save @fortawesome/fontawesome-svg-core`

#### 安装图标库

`npm i --save @fortawesome/free-solid-svg-icons`

#### 安装基于vue3的包装

`npm i --save @fortawesome/vue-fontawesome@latest-3`

### main.ts中引入图标库

```
    // 使用fontawesome添加图标
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { fas } from '@fortawesome/free-solid-svg-icons'
    library.add(fas)
```

### 创建Icon组件

参考component/Icon
