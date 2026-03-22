# Codex 相关疑问

这一页单独收 Codex 用户最容易遇到的疑问。全站 FAQ 里也会保留高频条目，但这里更聚焦。

## 如何在 Codex 中使用最新模型

最直接的方法就是改 `~/.codex/config.toml` 中的：

```toml
model = "gpt-5.2-codex"
```

你可以按需切换成：

- `gpt-5.3-codex`
- `gpt-5.1-codex-max`
- `gpt-5.4`

## 改完模型后为什么仍然是旧模型

优先检查：

1. 你改的是不是当前实际使用的 profile
2. Codex 是否已经完全退出重开
3. 是否还有其他配置覆盖了 `model`

## 为什么 `auth.json` 有 Key，Codex 还是提示未认证

通常是因为没有同时设置：

```toml
preferred_auth_method = "apikey"
cli_auth_credentials_store = "file"
```

## Windows 用户最容易忽略什么

- 没找到 `.codex` 目录
- 找到了目录，但只改了 `config.toml`
- 改完后没有完全重启终端

## 能不能在 Codex 里直接切到 Claude 模型

不建议把 Codex 当成 Claude 的主入口。  
如果目标模型是 Claude，优先改用 [Claude Code 配置](/cli/claude-code)。
