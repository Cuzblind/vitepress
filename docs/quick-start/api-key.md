# API Key 管理

这一页只解决一件事：拿到一个真正能用的 OpenToken API Key，并正确保存。

## 最短可用步骤

1. 打开 `https://kit.xin/` 并注册或登录。
2. 先完成充值。
3. 进入 API Key 或令牌管理页面。
4. 新建一个 API Key。
5. 复制并立即保存。
6. 后续所有协议和客户端都默认用这个 Key。

## OpenToken 的 Key 规则

- 同一个 API Key 同时可以用于 OpenAI 兼容接口和 Anthropic 接口。
- API Key 通常只会在创建时完整显示一次。
- 不要把 API Key 发到群里，也不要直接写进公开仓库。

## 推荐统一环境变量名

```bash
OPENTOKEN_API_KEY=sk-你的Key
```

## 三个平台如何保存环境变量

### macOS / Linux

```bash
export OPENTOKEN_API_KEY="sk-你的Key"
```

### Windows PowerShell

```powershell
$env:OPENTOKEN_API_KEY = "sk-你的Key"
```

## 常见问题

### 充值码是不是 API Key

不是。充值是账户余额，API Key 是调用认证凭据。

### 一个客户端一个 Key 还是共用一个 Key

都可以。如果你只是个人使用，一个 Key 足够。
