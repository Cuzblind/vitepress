# OpenCode

## 项目介绍

![OpenCode](/images/tutorial/image-20260325004921710.png)

- **项目定位**：一个开源的 AI 编程助手，可在终端、IDE 或桌面环境中辅助编写、调试和改进代码。
- **核心特色**：
  - 原生终端或 TUI 支持，适合命令行开发者。
  - 自动加载正确的语言服务器（LSP）以提升上下文理解。
  - 支持多会话并行与会话链接共享。
  - 支持 75+ 模型提供商，包括本地模型。
  - 可与 GitHub Copilot、ChatGPT Plus/Pro 等集成。
- **平台支持**：终端 CLI、桌面应用（Beta）、IDE 扩展等。

## 环境配置

1. 打开你的终端，运行以下命令全局安装 OpenCode

```bash
npm install -g opencode-ai
```

2. 安装完成后，在终端输入 `opencode` 命令若出现界面，则安装成功

3. 查看 CC Switch 下载一节的内容，下载并安装 CC-Switch 到本地，安装并打开软件

4. 上方配置项选择到 `OpenCode`，然后点击 `添加供应商` 按钮

![OpenCode配置](/images/tutorial/image-20260325005241928.png)

5. 进行多项配置：
   - 在 `供应商标识` 中填写分组名称，比如 opentoken-Codex
   - 在 `接口格式` 中选择合适的分组
     - Claude 系列模型：`Anthropic`
     - Codex 系列模型：`OpenAI`
     - Gemini 系列模型：`Google (Gemini)`
   - 在 `API Key` 中填入创建 API 令牌一节中你创建的 Key
   - 在 `额外选项` 中配置键值对 `{"setCacheKey":true}`
   - 在 `模型配置` 中配置 ApiKey 对应分组下正确的模型名，每个分组下的模型可在令牌分组介绍一节中查询。

**比如现在我的 ApiKey 对应的是 Codex 分组，那么我可以直接配置：**
   - 模型ID：gpt-5.2 显示名称：gpt-5.2

6. 全部配置好后，点击右下角 `添加` 按钮

![配置详情1](/images/tutorial/image-20260325005938983.png)

![配置详情2](/images/tutorial/image-20260325010053314.png)

7. 在界面中选择刚配置好的 OpenToken 渠道，点击添加按钮

![选择渠道](/images/tutorial/image-20260325010244838.png)

## 验证配置

1. 重新打开终端，输入 `opencode` 运行

2. 输入 `/models` 命令，观察刚才配置的 OpenToken 的渠道是否存在，如果存在则配置成功

3. 开始愉快的对话吧~

![OpenCode运行](/images/tutorial/image-20260325010353520.png)
