# CC-Switch 配置

CC-Switch 最适合不想手改配置文件、同时又会在 Claude、Codex、Gemini 之间切换的人。

## 什么是 CC-Switch

它可以统一管理常见终端 AI 工具的供应商配置，让你不用每次都手工改 `config.toml`、`settings.json` 或环境变量。

## 最短可用步骤

1. 安装并打开 CC-Switch。
2. 先选择你要配置的 CLI 标签。
3. 点击“添加供应商”。
4. 推荐分别建立两个供应商：
   - `OpenToken Claude`
   - `OpenToken OpenAI`
5. 配置完成后，确认当前供应商显示为“使用中”。

<figure class="ot-shot">
  <img src="/images/tutorial/cc-switch-start.webp" alt="CC-Switch 首次添加供应商示意图">
  <figcaption>先选对应 CLI，再点击添加供应商</figcaption>
</figure>

## 推荐建立的两个供应商

### OpenToken Claude

```text
名称: OpenToken Claude
Base URL: https://kit.xin
API Key: sk-你的Key
默认模型: claude-sonnet-4-6
```

### OpenToken OpenAI

```text
名称: OpenToken OpenAI
Base URL: https://kit.xin/v1
API Key: sk-你的Key
默认模型: gpt-5.2-codex
```

## 为什么建议分成两个供应商

因为你最容易填错的不是 API Key，而是协议。

## 模型怎么切

### Claude

- `claude-sonnet-4-6`
- `claude-opus-4-6`
- `claude-haiku-4-5-20251001`

### OpenAI 兼容

- `gpt-5.2-codex`
- `gpt-5.3-codex`
- `gpt-5.4`
- `gemini-3.1-pro-preview`

## 常见问题

### 建一个供应商，把所有模型都塞进去可以吗

不推荐。长期看一定会把协议弄混。

### 切完供应商，客户端还是旧配置

很多客户端需要完全重启。
