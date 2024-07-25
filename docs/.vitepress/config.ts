import { defineConfig } from 'vitepress'
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
    ]
  }
})
