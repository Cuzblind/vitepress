# Claude Code 配置

Claude Code 最适合优先走 Anthropic 接口，也就是把 Base URL 设为 `https://kit.xin`。

## 先说结论

```text
API Key: sk-你的Key
Base URL: https://kit.xin
Model: claude-sonnet-4-6
```

## 最短可用步骤

1. 先完成 [API Key 管理](/quick-start/api-key)。
2. 推荐优先使用 [CC-Switch 配置](/cli/cc-switch)。
3. 如果你想手动配置，再去编辑 `~/.claude/settings.json`。
4. 默认模型先填 `claude-sonnet-4-6`。
5. 保存后完全重启 Claude Code。

## 配置文件位置

| 作用域 | 路径 |
| --- | --- |
| 用户级 | `~/.claude/settings.json` |
| 项目级 | `.claude/settings.json` |
| 本地项目级 | `.claude/settings.local.json` |

Windows 用户通常对应到：

```text
%USERPROFILE%\.claude\settings.json
```

<figure class="ot-shot">
  <img src="/images/tutorial/windows-claude-folder.webp" alt="Windows 下 .claude 目录示意图">
  <figcaption>Windows 下查找 .claude 目录的示意图</figcaption>
</figure>

## 推荐做法一：优先使用 CC-Switch

在 CC-Switch 中建立：

```text
Name: OpenToken Claude
Base URL: https://kit.xin
API Key: sk-你的Key
Default Model: claude-sonnet-4-6
```

## 做法二：手动设置环境变量

### macOS / Linux

```bash
export ANTHROPIC_API_KEY="sk-你的Key"
export ANTHROPIC_BASE_URL="https://kit.xin"
```

### Windows PowerShell

```powershell
$env:ANTHROPIC_API_KEY = "sk-你的Key"
$env:ANTHROPIC_BASE_URL = "https://kit.xin"
```

## 做法三：在 `settings.json` 中固化环境变量

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-你的Key",
    "ANTHROPIC_BASE_URL": "https://kit.xin"
  }
}
```

如果你的当前版本对自定义 Base URL 行为不稳定，优先改回 CC-Switch。

## 如何改模型

- 默认：`claude-sonnet-4-6`
- 更强：`claude-opus-4-6`
- 更快：`claude-haiku-4-5-20251001`

## 常见问题

### 只设置了 API Key，没有设置 Base URL

这样通常不会走 OpenToken。

### 改了配置文件还是没变化

优先检查：

1. 你改的是用户级配置还是项目级配置
2. 是否被项目目录下的 `.claude/settings.local.json` 覆盖
3. 客户端是否已经完全重启
