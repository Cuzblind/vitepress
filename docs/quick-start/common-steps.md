# 通用配置步骤（一定要看）

不管你最后用的是 Claude Code、Codex、OpenCode、Droid 还是 OpenClaw，真正稳定的接入顺序都差不多。

## 第一步：确认本机基础环境

大多数终端类 AI 工具都要求 Node.js 20 或更高版本。  
在终端执行：

```bash
node -v
```

<figure class="ot-shot">
  <img src="/images/tutorial/windows-node-version.webp" alt="Windows 终端查看 Node 版本示意图">
  <figcaption>Windows 下查看 Node 版本示意图</figcaption>
</figure>

## 第二步：完成充值并创建 API Key

推荐顺序固定为：

`注册 / 登录 -> 充值 -> 创建 API Key`

如果你还没做，先看 [API Key 管理](/quick-start/api-key)。

## 第三步：分清楚两套接口

| 协议 | Base URL | 适合什么模型 |
| --- | --- | --- |
| OpenAI 兼容接口 | `https://kit.xin/v1` | GPT、Codex、Gemini，以及要求 OpenAI 风格调用的客户端 |
| Anthropic 接口 | `https://kit.xin` | Claude 系列，以及要求 Anthropic Messages API 的客户端 |

## 第四步：确认你要填写的三个核心参数

```text
base_url
api_key
model
```

## 第五步：选对默认模型

- Claude：`claude-sonnet-4-6`
- Codex：`gpt-5.2-codex`
- GPT：`gpt-5.4`
- Gemini：`gemini-3.1-pro-preview`

## 第六步：先用最小请求测试

最稳的做法不是一上来就进复杂客户端，而是先用 [Curl 调用示例](/third-party/curl) 测通。

## 最常见的 4 个错误

### Claude 模型却填了 `https://kit.xin/v1`

这通常意味着你把 Claude 当成 OpenAI 兼容接口来用了。

### OpenAI 兼容客户端却只写了 `https://kit.xin`

这会导致路径不完整。

### 只改了模型，没有改协议

比如从 `claude-sonnet-4-6` 切到 `gpt-5.2-codex`，却还保留 Anthropic Base URL。

### 改了配置但客户端没重启

这是非常常见的问题。
