# Droid

Droid 也就是 Factory CLI。它官方支持通过 BYOK 方式在 `~/.factory/settings.json` 中配置自定义模型。

## 官方支持的 3 类 provider

- `anthropic`
- `openai`
- `generic-chat-completion-api`

在 OpenToken 里对应关系如下：

- Claude：`anthropic`
- GPT / Codex：`openai`
- Gemini：`generic-chat-completion-api`

## 最短可用步骤

1. 打开 `~/.factory/settings.json`。
2. 在 `customModels` 中加入 OpenToken 模型。
3. Claude 模型用 `provider: "anthropic"`。
4. GPT / Codex 用 `provider: "openai"`。
5. Gemini 用 `provider: "generic-chat-completion-api"`。
6. 保存后重启 Droid，再用 `/model` 切换。

## 推荐配置

```json
{
  "customModels": [
    {
      "model": "claude-sonnet-4-6",
      "displayName": "Claude Sonnet 4.6 [OpenToken]",
      "baseUrl": "https://kit.xin",
      "apiKey": "${OPENTOKEN_API_KEY}",
      "provider": "anthropic"
    },
    {
      "model": "gpt-5.2-codex",
      "displayName": "GPT-5.2 Codex [OpenToken]",
      "baseUrl": "https://kit.xin/v1",
      "apiKey": "${OPENTOKEN_API_KEY}",
      "provider": "openai"
    },
    {
      "model": "gemini-3.1-pro-preview",
      "displayName": "Gemini 3.1 Pro Preview [OpenToken]",
      "baseUrl": "https://kit.xin/v1",
      "apiKey": "${OPENTOKEN_API_KEY}",
      "provider": "generic-chat-completion-api"
    }
  ]
}
```

## 配置路径

| 系统 | 路径 |
| --- | --- |
| Windows | `%USERPROFILE%\.factory\settings.json` |
| macOS / Linux | `~/.factory/settings.json` |

## 如何切换模型

在 Droid 里运行：

```text
/model
```

从列表中选择你刚加入的模型即可。
