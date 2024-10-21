import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
// 使用fontawesome添加图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
export default defineConfig({
  title: 'Yuuya-UI',
  description: 'A UI library based on Vue 3',
  lang: 'zh-CN',
  base: '/yuuya-ui/',
  lastUpdated: true,
  themeConfig: {
    logo: '/ui-logo.svg',
    siteTitle: 'Yuuya-UI文档',
    outline: 3,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/YuuyaRin/yuuya-ui'
      }
    ],
    nav: [
      {
        text: '指南',
        link: '/guide'
      },
      {
        text: '组件',
        link: '/components/'
      }
    ],
    sidebar: [
      {
        text: '基础组件 Basic',
        items: [
          { text: 'Button', link: '/components/Button/index.md' },
          { text: 'Collapse', link: '/components/Collapse/index.md' },
          { text: 'Icon', link: '/components/Icon/index.md' },
          {
            text: 'Intro',
            link: '/components/Intro/index.md'
          },
          {
            text: 'Alert',
            link: '/components/Alert/index.md'
          }
        ]
      }
    ]
  },
  markdown: {
    config: (md) => mdPlugin(md)
  }
})
