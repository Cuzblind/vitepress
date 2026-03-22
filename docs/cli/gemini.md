# Gemini 模型配置

在 OpenToken 中，Gemini 模型默认按 OpenAI 兼容接口接入，而不是按 Google 原生接口接入。

## 先说结论

```text
Base URL: https://kit.xin/v1
API Key: sk-你的Key
```

## 推荐模型

- `gemini-3.1-pro-preview`
- `gemini-3-flash-preview`
- `gemini-3.1-flash-lite-preview`

## 适合放在哪些客户端里使用

- CC-Switch
- Codex 风格客户端
- OpenCode
- Droid
- OpenClaw

## 在 CC-Switch 中使用 Gemini

直接把 Gemini 模型放到：

```text
OpenToken OpenAI
```

这个供应商下即可。

## 在支持配置文件的客户端中使用 Gemini

核心思路不变：

```json
{
  "baseURL": "https://kit.xin/v1",
  "apiKey": "sk-你的Key",
  "model": "gemini-3.1-pro-preview"
}
```

## Windows 下本地 Gemini 目录示意

如果你本机同时安装过 Gemini 相关 CLI，Windows 下常见的本地目录会在：

```text
%USERPROFILE%\.gemini
```

<figure class="ot-shot">
  <img src="/images/tutorial/windows-gemini-folder.webp" alt="Windows 下 .gemini 目录示意图">
  <figcaption>Windows 下 .gemini 目录示意图</figcaption>
</figure>

## 常见问题

### 为什么 Gemini 不走 `https://kit.xin`

因为在 OpenToken 当前这套文档里，Gemini 默认按 OpenAI 兼容方式接入。

### Gemini 和 GPT 可以共用同一个 OpenAI 兼容供应商吗

可以。只要 `base_url` 一样，差别通常只是 `model`。
