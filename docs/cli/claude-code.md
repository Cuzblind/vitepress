# Claude Code 配置

## 环境检查

### （1）确认 Nodejs 环境已安装

1. 在 windows 或 MacOS 终端输入以下命令

```bash
npm list -g --depth=0
```

正常情况应该是如下图所示（没有任何内容也没关系），如果提示"命令未找到"，则说明你没有安装 Nodejs，你需要按 [此教程](https://www.runoob.com/nodejs/nodejs-install-setup.html) 来安装运行 Claude Code、Codex、Gemini 所需的环境

![npm检查](/images/tutorial/image-20260324234819928.png)

2. 如果你发现自己没有安装 Nodejs，并且跟着教程目前已经安装完毕，请你重新执行上述提到的命令，如果不再提示"命令未找到"，则说明安装成功

### （2）安装 CLI

1. 在 windows 或 MacOS 终端输入以下命令，一次性安装好我们目前所需的所有终端

```bash
npm i -g @anthropic-ai/claude-code@latest
npm i -g @openai/codex@latest
npm i -g @google/gemini-cli@latest
```

![安装CLI](/images/tutorial/image-20260324234847694.png)

### （3）测试安装成功

::: warning 重要
**这一步很重要，请你务必运行命令进行测试，因为这一步运行命令后，你的用户目录下才会生成各 CLI 的配置目录，方便后续操作！**
:::

**Claude Code**

在 windows 或 MacOS 终端输入以下命令，若出现图示内容，或出现选项让你选择，则 Claude code 安装成功

```bash
claude
```

![Claude Code测试](/images/tutorial/image-20260324234914959.png)

## Windows 配置

1. 键盘按下"Win+R"键，输入以下内容后回车，打开 Claude Code 配置目录

```
%userprofile%\.claude
```

![打开配置目录](/images/tutorial/image-20260324235223575.png)

2. 目录内容如图所示，如果目录中没有 `settings.json`，你需要手动创建后打开

- **settings.json**：Claude 主要的配置文件，主要用来配置中转站地址以及 ApiKey，以及一些 hooks、plugins 等

3. 将以下内容写入 `settings.json`

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://kit.xin/",
    "ANTHROPIC_AUTH_TOKEN": "xxx",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0"
  }
}
```

4. 回顾 创建 API 令牌，在 OpenToken 中创建分组的令牌，替换上方 `xxx` 部分

![复制API Key](/images/tutorial/image-20260324235503710.png)

5. 在 windows 终端运行 `claude`，出现对话界面后进行对话测试，能收到回复即表示配置成功

![Claude Code运行](/images/tutorial/image-20260324235825627.png)

## MacOS 配置

1. 在访达界面按下 "Command+Shift+G"，输入以下路径后回车，打开配置目录

```
~/.claude
```

![MacOS配置目录](/images/tutorial/image-20260324235905854.png)

2. 若目录不存在 `settings.json`，需要你手动进行创建

- **settings.json**：Claude 主要的配置文件，主要用来配置中转站地址以及 ApiKey，以及一些 hooks、plugins 等

![MacOS settings.json](/images/tutorial/image-20260324235939042.png)

3. 将以下内容写入 `settings.json`

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://kit.xin/",
    "ANTHROPIC_AUTH_TOKEN": "xxx",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0"
  }
}
```

4. 回顾 创建 API 令牌，在 OpenToken 中创建分组的令牌，替换上方 `xxx`

![MacOS API Key](/images/tutorial/image-20260325000202612.png)

5. 在终端运行 `claude`，看到对话界面并能正常回复即表示配置完成

![MacOS Claude Code运行](/images/tutorial/image-20260325000242486.png)
