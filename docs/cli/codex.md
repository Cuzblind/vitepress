# Codex 配置

## Windows 配置

1. 键盘按下"Win+R"键，输入以下内容后回车，打开你的 codex 配置目录

```
%userprofile%\.codex
```

![打开配置目录](/images/tutorial/image-20260325000325184.png)

2. 你的目录中可能会存在以下文件，不过我们用到的文件只有三个，需要配置的只有两个

![配置目录内容](/images/tutorial/image-20260325000350637.png)

- **config.toml**：Codex 的**核心配置**文件，中转服务与 MCP 等都在此文件配置
- **auth.json**：用来配置你在中转站获取的 ApiKey 秘钥
- **AGENTS.md**：用来设置 codex 全局工作的提示词

::: warning 重要
**很多人刚安装可能没有这三个文件，你需要手动去创建这三个文件，然后写入内容**
:::

3. 配置 Config.toml

将以下配置文本复制到你的 config.toml 文件中保存

```toml
model_provider = "OpenAI"
model = "gpt-5.3-codex"
review_model = "gpt-5.3-codex"
model_reasoning_effort = "high"
disable_response_storage = true
network_access = "enabled"
windows_wsl_setup_acknowledged = true
model_context_window = 1000000
model_auto_compact_token_limit = 900000

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://kit.xin/v1"
wire_api = "responses"
requires_openai_auth = true
```

4. 配置 ApiKey

将以下配置文本复制到你的 auth.json 文件中

```json
{
  "OPENAI_API_KEY": "xxx"
}
```

![auth.json配置](/images/tutorial/image-20260325002541965.png)

回顾 创建 API 令牌这一步教程，我们需要在 OpenToken 中创建 **Codex** 分组的令牌，然后点击右侧的复制按钮，将 key 填入"xxx"部分后保存

5. 测试对话

在 windows 终端输入以下命令，出现图示内容，进行对话测试，如果有回复，则配置成功，开始你的 Codex 使用之旅~

```bash
codex
```

![Codex运行](/images/tutorial/image-20260325002644188.png)

## MacOS 配置

1. 在访达界面按下 "Command+Shift+G"，输入以下路径并回车，打开 Codex 配置目录

```
~/.codex
```

![MacOS配置目录](/images/tutorial/image-20260325002714685.png)

2. 你的目录中可能会存在以下文件，不过我们用到的文件只有三个，需要配置的只有两个，其它文件可忽略

![MacOS配置目录内容](/images/tutorial/image-20260325002733360.png)

- **config.toml**：Codex 的核心配置文件，中转服务与 MCP 等都在此文件配置
- **auth.json**：存放中转站获取的 ApiKey 秘钥
- **AGENTS.md**：Codex 全局工作的提示词

::: warning 重要
初次安装若未自动生成，需要手动创建上述三个文件并写入内容
:::

3. 配置 Config.toml

将以下内容保存到 `config.toml`

```toml
model_provider = "OpenAI"
model = "gpt-5.3-codex"
review_model = "gpt-5.3-codex"
model_reasoning_effort = "high"
disable_response_storage = true
network_access = "enabled"
windows_wsl_setup_acknowledged = true
model_context_window = 1000000
model_auto_compact_token_limit = 900000

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://kit.xin/v1"
wire_api = "responses"
requires_openai_auth = true
```

4. 配置 ApiKey

将以下配置文本复制到你的 auth.json 文件中

```json
{
  "OPENAI_API_KEY": "xxx"
}
```

回顾 创建 API 令牌 这一步教程，我们需要在 OpenToken 中创建 **Codex** 分组的令牌，然后点击右侧的复制按钮，将 key 填入"xxx"部分后保存

![MacOS API Key配置](/images/tutorial/image-20260325003112717.png)

5. 测试对话

在 MacOS 终端执行以下命令，出现对话界面并能收到回复即表示配置成功

```bash
codex
```

![MacOS Codex运行](/images/tutorial/image-20260325003026089.png)
