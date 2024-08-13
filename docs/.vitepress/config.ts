import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
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
        items: [{ text: 'Button', link: '/components/Button/index.md' }]
      }
    ]
  },
  markdown: {
    config: (md) => mdPlugin(md)
  }
})
