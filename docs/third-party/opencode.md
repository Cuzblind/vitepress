# OpenCode

OpenCode 官方支持通过配置文件定义 provider、model 和 `small_model`，也支持自定义 Base URL。这对 OpenToken 很友好。

## 推荐思路

在 OpenCode 里同时保留两套 provider：

- `anthropic`
- `openai`

这样你既可以用 Claude，也可以用 GPT / Codex / Gemini。

## 最短可用步骤

1. 先设置环境变量 `OPENTOKEN_API_KEY`。
2. 打开全局 `opencode.json`。
3. 给 `anthropic` 配置 `https://kit.xin`。
4. 给 `openai` 配置 `https://kit.xin/v1`。
5. 默认模型先用 `anthropic/claude-sonnet-4-6`。
6. 用 `/models` 检查是否生效。

## 推荐配置

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "anthropic": {
      "options": {
        "baseURL": "https://kit.xin",
        "apiKey": "{env:OPENTOKEN_API_KEY}"
      }
    },
    "openai": {
      "options": {
        "baseURL": "https://kit.xin/v1",
        "apiKey": "{env:OPENTOKEN_API_KEY}"
      }
    }
  },
  "model": "anthropic/claude-sonnet-4-6",
  "small_model": "anthropic/claude-haiku-4-5-20251001"
}
```

## 配置位置

| 作用域 | 路径 |
| --- | --- |
| 全局配置 | `~/.config/opencode/opencode.json` |
| 项目配置 | 项目根目录下的 `opencode.json` |

## 如何切换模型

- Codex：`openai/gpt-5.2-codex`
- GPT：`openai/gpt-5.4`
- Gemini：`openai/gemini-3.1-pro-preview`

## 常见问题

### 为什么我改了全局配置却没效果

因为 OpenCode 支持项目级配置，项目根目录的 `opencode.json` 优先级更高。
