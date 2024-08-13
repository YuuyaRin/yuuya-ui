import DefaultTheme from 'vitepress/theme'
import { VPDemo } from '../vitepress'
import YuuyaUI from '../../../src/components'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(YuuyaUI)
    // 全局注册基础组件
    ctx.app.component('Demo', VPDemo)
  }
}
