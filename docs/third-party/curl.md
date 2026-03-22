# Curl 调用示例

如果你不确定问题出在平台、协议、模型，还是客户端本身，最稳的办法就是先用 `curl` 测一遍。

## 为什么建议先用 Curl

- 它最容易定位是 Key 错、URL 错还是模型错
- 它不受第三方客户端的 UI 和本地状态影响
- 只要 Curl 能通，说明平台侧基础配置大概率没问题

## OpenAI 兼容接口

适用于：

- GPT
- Codex
- Gemini

### GPT / Codex 示例

```bash
curl https://kit.xin/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-你的Key" \
  -d '{
    "model": "gpt-5.2-codex",
    "messages": [
      {
        "role": "user",
        "content": "你好，请返回一行测试成功。"
      }
    ]
  }'
```

### Gemini 示例

```bash
curl https://kit.xin/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-你的Key" \
  -d '{
    "model": "gemini-3.1-pro-preview",
    "messages": [
      {
        "role": "user",
        "content": "你好，请返回一行 Gemini 测试成功。"
      }
    ]
  }'
```

## Anthropic 接口

适用于 Claude 模型。

```bash
curl https://kit.xin/v1/messages \
  -H "content-type: application/json" \
  -H "x-api-key: sk-你的Key" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "claude-sonnet-4-6",
    "max_tokens": 256,
    "messages": [
      {
        "role": "user",
        "content": "你好，请返回一行 Claude 测试成功。"
      }
    ]
  }'
```

## 测试通过后该看哪一页

- Claude：看 [Claude Code 配置](/cli/claude-code)
- Codex：看 [Codex 配置](/cli/codex)
- OpenCode：看 [OpenCode](/third-party/opencode)
- Droid：看 [Droid](/third-party/droid)
- OpenClaw：看 [OpenClaw](/third-party/openclaw)
