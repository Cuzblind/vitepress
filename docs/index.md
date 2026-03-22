# OpenToken 简介

<div class="ot-hero">
  <div class="ot-hero-copy">
    <p class="ot-eyebrow">OpenToken / kit.xin</p>
    <p class="ot-lead">
      这是 OpenToken 的中文教程入口页。目标只有一个：让你更快分清协议、改对配置、成功跑通客户端。
    </p>
    <div class="ot-badges">
      <span class="ot-badge">OpenAI 兼容接口: https://kit.xin/v1</span>
      <span class="ot-badge">Anthropic 接口: https://kit.xin</span>
      <span class="ot-badge">同一个 API Key 通用</span>
    </div>
  </div>
  <div class="ot-hero-side">
    <p class="ot-side-title">推荐顺序</p>
    <ol class="ot-side-list">
      <li>注册 / 登录并充值</li>
      <li>创建并保存 API Key</li>
      <li>确认 Base URL 与模型类型</li>
      <li>进入对应客户端教程</li>
    </ol>
  </div>
</div>

## 简介

OpenToken 文档主要解决 4 类问题：

- 先完成 API Key 管理和基础准备
- 分清楚 OpenAI 兼容接口与 Anthropic 接口
- 配置常见 CLI 和客户端
- 遇到报错时快速排查

## 通用步骤（一定要看）

<div class="ot-grid ot-grid-2">
  <a class="ot-card" href="/quick-start/api-key">
    <div class="ot-card-top">
      <span class="ot-kicker">Step 01</span>
      <h3>API Key 管理</h3>
    </div>
    <p>先完成注册、充值、创建 Key，并知道同一个 Key 如何同时用于两套协议。</p>
  </a>
  <a class="ot-card" href="/quick-start/common-steps">
    <div class="ot-card-top">
      <span class="ot-kicker">Step 02</span>
      <h3>通用配置步骤</h3>
    </div>
    <p>按统一步骤处理 Node 环境、Base URL、协议、模型名和首次测试。</p>
  </a>
</div>

## CLI / 客户端配置

<div class="ot-grid ot-grid-3">
  <a class="ot-card" href="/cli/cc-switch">
    <div class="ot-card-top">
      <span class="ot-kicker">CLI</span>
      <h3>CC-Switch 配置</h3>
    </div>
    <p>适合不想反复手改配置文件的人，推荐建立 OpenToken Claude 与 OpenToken OpenAI 两个供应商。</p>
  </a>
  <a class="ot-card" href="/cli/claude-code">
    <div class="ot-card-top">
      <span class="ot-kicker">Anthropic</span>
      <h3>Claude Code 配置</h3>
    </div>
    <p>重点讲如何用 Claude 模型接入 OpenToken，以及三平台的配置位置。</p>
  </a>
  <a class="ot-card" href="/cli/codex">
    <div class="ot-card-top">
      <span class="ot-kicker">OpenAI</span>
      <h3>Codex 配置</h3>
    </div>
    <p>聚焦 <code>config.toml</code>、<code>auth.json</code>、模型切换和常见误区。</p>
  </a>
  <a class="ot-card" href="/cli/codex-faq">
    <div class="ot-card-top">
      <span class="ot-kicker">FAQ</span>
      <h3>Codex 相关疑问</h3>
    </div>
    <p>单独收 Codex 常见问题，并在全站 FAQ 中保留高频条目。</p>
  </a>
  <a class="ot-card" href="/cli/gemini">
    <div class="ot-card-top">
      <span class="ot-kicker">Model</span>
      <h3>Gemini 模型配置</h3>
    </div>
    <p>说明 Gemini 在 OpenToken 中如何按 OpenAI 兼容方式接入，以及适合放进哪些客户端。</p>
  </a>
</div>

## 第三方使用

<div class="ot-grid ot-grid-2">
  <a class="ot-card" href="/third-party/curl">
    <div class="ot-card-top">
      <span class="ot-kicker">Debug</span>
      <h3>Curl 调用示例</h3>
    </div>
    <p>建议先用 Curl 跑通，再配置客户端。包含 GPT / Codex、Claude、Gemini 三类请求示例。</p>
  </a>
  <a class="ot-card" href="/third-party/opencode">
    <div class="ot-card-top">
      <span class="ot-kicker">Third-party</span>
      <h3>OpenCode</h3>
    </div>
    <p>同时保留 Anthropic 和 OpenAI 两套 provider，是最适合多模型切换的终端之一。</p>
  </a>
  <a class="ot-card" href="/third-party/droid">
    <div class="ot-card-top">
      <span class="ot-kicker">Third-party</span>
      <h3>Droid</h3>
    </div>
    <p>按 Factory 的 BYOK 方式配置。Claude、GPT / Codex、Gemini 在 provider 上需要区分。</p>
  </a>
  <a class="ot-card" href="/third-party/openclaw">
    <div class="ot-card-top">
      <span class="ot-kicker">Third-party</span>
      <h3>OpenClaw</h3>
    </div>
    <p>适合一次配置多个 provider，并通过 <code>/model</code> 在会话中切换模型。</p>
  </a>
</div>

## 常见问题

<div class="ot-grid ot-grid-2">
  <a class="ot-card" href="/faq/">
    <div class="ot-card-top">
      <span class="ot-kicker">FAQ</span>
      <h3>全站 FAQ</h3>
    </div>
    <p>401、404、model not found、配置不生效、客户端不响应，都优先从这里开始排查。</p>
  </a>
  <a class="ot-card" href="/cli/codex-faq">
    <div class="ot-card-top">
      <span class="ot-kicker">FAQ</span>
      <h3>Codex 专项 FAQ</h3>
    </div>
    <p>如果你主要使用 Codex，这一页比全站 FAQ 更聚焦。</p>
  </a>
</div>

## 联系我们

<div class="ot-grid ot-grid-2">
  <div class="ot-contact">
    <p class="ot-contact-label">QQ 群</p>
    <p class="ot-contact-value">1093412773</p>
  </div>
  <div class="ot-contact">
    <p class="ot-contact-label">客服 QQ</p>
    <p class="ot-contact-value">2056665661</p>
  </div>
  <div class="ot-contact">
    <p class="ot-contact-label">客服 QQ</p>
    <p class="ot-contact-value">2088199761</p>
  </div>
  <a class="ot-contact ot-contact-link" href="/contact">
    <p class="ot-contact-label">更多联系信息</p>
    <p class="ot-contact-value">查看完整联系页</p>
  </a>
</div>
