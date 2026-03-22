# OpenClaw

OpenClaw 官方文档支持在 `~/.openclaw/openclaw.json` 中定义自定义 provider，也支持 `openai-completions`、`openai-responses` 和 `anthropic-messages` 这几种 API 模式。

## 最短可用步骤

1. 创建或打开 `~/.openclaw/openclaw.json`。
2. 写入 `OPENTOKEN_API_KEY`。
3. 配一个 `opentoken-claude` provider，走 `https://kit.xin`。
4. 配一个 `opentoken-openai` provider，走 `https://kit.xin/v1`。
5. 默认模型先设成 `opentoken-claude/claude-sonnet-4-6`。
6. 使用 `/model status` 验证。

## 推荐配置

```json
{
  "env": {
    "OPENTOKEN_API_KEY": "sk-你的Key"
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "opentoken-claude/claude-sonnet-4-6",
        "fallbacks": [
          "opentoken-openai/gpt-5.4"
        ]
      }
    }
  },
  "models": {
    "mode": "merge",
    "providers": {
      "opentoken-claude": {
        "baseUrl": "https://kit.xin",
        "api": "anthropic-messages",
        "apiKey": "${OPENTOKEN_API_KEY}",
        "models": [
          {
            "id": "claude-sonnet-4-6",
            "name": "Claude Sonnet 4.6"
          }
        ]
      },
      "opentoken-openai": {
        "baseUrl": "https://kit.xin/v1",
        "api": "openai-completions",
        "apiKey": "${OPENTOKEN_API_KEY}",
        "models": [
          {
            "id": "gpt-5.2-codex",
            "name": "GPT-5.2 Codex"
          },
          {
            "id": "gemini-3.1-pro-preview",
            "name": "Gemini 3.1 Pro Preview"
          }
        ]
      }
    }
  }
}
```

## 常见问题

### `/model` 里有 provider，但会话里不能选

通常是因为你的 allowlist 没把新模型加进去。

### 修改配置后网关起不来

先运行：

```bash
openclaw doctor
```
