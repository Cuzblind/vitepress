# Codex 配置

Codex 在 OpenToken 场景下走 OpenAI 风格配置，Base URL 使用 `https://kit.xin/v1`。

## 先说结论

OpenToken 下的 Codex 需要你重点关注两个文件：

- `config.toml`
- `auth.json`

## 最短可用步骤

1. 打开 `~/.codex/config.toml`。
2. 新增一个 `opentoken` provider。
3. 把 `base_url` 填成 `https://kit.xin/v1`。
4. 默认模型先用 `gpt-5.2-codex`。
5. 在 `~/.codex/auth.json` 中写入 API Key。

## 推荐配置

### `config.toml`

```toml
model = "gpt-5.2-codex"
model_provider = "opentoken"
model_reasoning_effort = "high"
preferred_auth_method = "apikey"
cli_auth_credentials_store = "file"
disable_response_storage = true

[model_providers.opentoken]
name = "OpenToken"
base_url = "https://kit.xin/v1"
wire_api = "responses"
requires_openai_auth = true
```

### `auth.json`

```json
{
  "opentoken": {
    "apiKey": "sk-你的Key"
  }
}
```

## 这两个文件在哪里

| 文件 | Windows | macOS / Linux |
| --- | --- | --- |
| `config.toml` | `%USERPROFILE%\.codex\config.toml` | `~/.codex/config.toml` |
| `auth.json` | `%USERPROFILE%\.codex\auth.json` | `~/.codex/auth.json` |

<figure class="ot-shot">
  <img src="/images/tutorial/windows-codex-folder.webp" alt="Windows 下 .codex 目录示意图">
  <figcaption>Windows 下 .codex 目录示意图，重点关注 auth.json 和 config.toml</figcaption>
</figure>

## 如何修改模型

### 更强的 Codex

```toml
model = "gpt-5.3-codex"
```

### 长任务模型

```toml
model = "gpt-5.1-codex-max"
```

### 切到通用 GPT

```toml
model = "gpt-5.4"
```

## 常见问题

### 忘了写 `/v1`

Codex 这里必须写：

```text
https://kit.xin/v1
```

### `auth.json` 写了 Key 但还是未认证

检查：

```toml
cli_auth_credentials_store = "file"
preferred_auth_method = "apikey"
```
