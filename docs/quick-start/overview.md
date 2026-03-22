# 快速开始

这一组页面只做一件事：帮你从零开始理解 OpenToken 的使用顺序，而不是一上来就陷入配置细节。

## 真实使用流程

OpenToken 的推荐顺序非常固定：

`注册 / 登录 -> 充值 -> 创建 API Key -> 复制 Key -> 确认协议与 Base URL -> 选择模型 -> 测试请求 -> 配置客户端`

## 你需要先记住的 3 件事

1. OpenToken 只有一个 API Key，不需要分别创建 OpenAI Key 和 Anthropic Key。
2. OpenAI 兼容接口使用 `https://kit.xin/v1`。
3. Anthropic 接口使用 `https://kit.xin`。

## 推荐阅读顺序

### 第一次接触 OpenToken

1. [API Key 管理](/quick-start/api-key)
2. [通用配置步骤（一定要看）](/quick-start/common-steps)
3. [Curl 调用示例](/third-party/curl)
4. 进入对应客户端教程

### 已经用过别的中转站

1. [通用配置步骤（一定要看）](/quick-start/common-steps)
2. 直接进入你的客户端页面
3. 出问题时看 [全站 FAQ](/faq/)

## 这次重构后的文档结构

- 快速开始：先搞清楚 API Key 和通用步骤
- CLI / 客户端配置：重点写 CC-Switch、Claude Code、Codex、Gemini
- 第三方使用：重点写 Curl、OpenCode、Droid、OpenClaw
- 常见问题：统一排错
