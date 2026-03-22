import { defineConfig } from 'vitepress'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserSite = repository.endsWith('.github.io')
const base = repository && !isUserSite ? `/${repository}/` : '/'

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: 'OpenToken 中转站',
  description: 'OpenToken API 中转服务使用文档',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0f766e' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速入门', link: '/intro' },
      { text: '定价', link: '/pricing' },
      { text: 'API 文档', link: '/api' },
      { text: '充值教程', link: '/recharge' },
      { text: '常见问题', link: '/faq' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '站点介绍', link: '/intro' },
          { text: '定价方案', link: '/pricing' },
          { text: '充值教程', link: '/recharge' }
        ]
      },
      {
        text: '开发接入',
        items: [
          { text: 'API 文档', link: '/api' },
          { text: '常见问题', link: '/faq' }
        ]
      },
      {
        text: '支持',
        items: [{ text: '联系我们', link: '/contact' }]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cuzblind/vitepress' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2026 OpenToken'
    }
  }
})
