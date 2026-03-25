import { defineConfig } from 'vitepress'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserSite = repository.endsWith('.github.io')
const base = repository && !isUserSite ? `/${repository}/` : '/'

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: 'OpenToken 教程中心',
  description: 'OpenToken / kit.xin 中文教程站，覆盖 API Key、通用配置步骤、CLI 配置、第三方使用与常见问题。',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#d96b22' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quick-start/overview' },
      { text: 'CLI / 客户端配置', link: '/cli/cc-switch' },
      { text: '第三方使用', link: '/third-party/aionui' },
      { text: '常见问题', link: '/faq/' }
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '快速开始', link: '/quick-start/overview' },
          { text: '模型分组介绍', link: '/quick-start/model-groups' }
        ]
      },
      {
        text: 'CLI / 客户端配置',
        items: [
          { text: 'CC-Switch 配置', link: '/cli/cc-switch' },
          { text: 'Claude Code 配置', link: '/cli/claude-code' },
          { text: 'Codex 配置', link: '/cli/codex' },
          { text: 'Gemini 配置', link: '/cli/gemini' }
        ]
      },
      {
        text: '第三方使用',
        items: [
          { text: 'AionUI', link: '/third-party/aionui' },
          { text: 'OpenCode', link: '/third-party/opencode' },
          { text: 'OpenClaw', link: '/third-party/openclaw' },
          { text: 'Kilocode (VS Code 插件)', link: '/third-party/kilocode' }
        ]
      },
      {
        text: '常见问题',
        items: [
          { text: 'Codex 相关问题', link: '/faq/codex' },
          { text: '联系我们', link: '/contact' }
        ]
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
      label: '此页内容'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    footer: {
      message: 'OpenToken 教程中心',
      copyright: 'Copyright © 2026 OpenToken'
    }
  }
})
