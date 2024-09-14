import YuuyaButton from './Button'
import YuuyaCollapse from './Collapse'
import YuuyaCollapseItem from './Collapse/item'
import YuuyaIcon from './Icon'
import YuuyaIntro from './Intro'
import '@/styles/index.css'

import type { Component, App } from 'vue'
// 存储组件列表
const components: {
  [propName: string]: Component
} = {
  YuuyaButton,
  YuuyaCollapse,
  YuuyaCollapseItem,
  YuuyaIcon,
  YuuyaIntro
}

// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents: any = (app: App) => {
  for (const key in components) {
    app.component(key, components[key])
  }
}

// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install: any = (app: any, router?: any) => {
  // !router && installRouter(app);
  installComponents(app)
}
// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  install(window.Vue)
}

export { YuuyaButton, YuuyaCollapse, YuuyaCollapseItem, YuuyaIcon }

export default install
