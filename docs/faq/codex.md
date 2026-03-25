# Codex 相关问题

## 如何更高效地使用 Codex

> 很多人可能会在使用过一段时间 Codex 后认为模型不如以前好用，也就是出现所谓的"降智"现象。
>
> 而就目前我的使用体验来看，Codex 中提供的模型经过很多次升级，其实都没有出现"降智"，关键是在于**你如何合理地去使用模型**。

### 1. 任务划分

任何时候，都不要去提交一个非常笼统的任务，例如 `请帮我写一个管理系统后台` 等，这样使用必然降智！Codex 模型的特点是**严谨有序，指哪打哪**，这就意味着你需要对你的任务进行拆分。

### 2. 掌控之内

在你开始一个任务之前，你需要对这个任务进行评估，思考这个任务是否已经拆分的足够细致，是否符合"模块化"开发的准则。在任务提交之前，你应该有能力预估 Codex 这次改动会修改哪些文件，产生哪些变动。一定不要让 AI 脱离你的认知与掌控之内，不然最终结局就是项目越改越乱，直到从原点重新开始。

::: info 一些碎碎念
有一说一，AI 时代让很多东西都变得十分简单，但是基础知识决定着你使用 AI 的上限，目前阶段的 AI 只算作是一个十分优秀的 Copilot 角色。这也导致同样的 AI 在不同的人手里会有不一样的发挥~
:::

### 3. 避免压缩

在多数场景下，你的任务其实最多使用 Codex 大概 60% 的上下文就能解决。如果你的任务超过了 60% 的上下文仍未解决，甚至还需要压缩，那么你这次任务执行之前的拆分工作算是失败了，你需要更加精细地拆分你的任务。一个优秀的 Codex Vibe Coding 选手几乎不用进行内容压缩！

## 在 Windows 系统下丝滑使用 Codex

::: warning 重要
此方法同时解决**读写文件、乱码、Token 耗费高、项目无记忆**等多个痛点
:::

### 1. 确保环境正常

确保你的 `Codex CLI` 与 `Vscode Codex` 插件正常运行，即你已经能顺利在 Vscode 的 Codex 插件上与模型进行对话。

### 2. 安装 MCP 工具

我们需要安装两个 MCP 工具：

- **Serena**：功能强大的编码代理工具包，提供语义检索和项目记忆功能 [Github](https://github.com/oraios/serena)
- **Desktop-Commander**：一个优秀的文件操作工具 [Github](https://github.com/wonderwhy-er/DesktopCommanderMCP)

#### 安装 Serena

1. 确保你的电脑已经安装了 Python，在终端中输入 `python` 会有交互产生

![Python检查](/images/tutorial/image-20260325012057244.png)

2. 在终端输入以下命令来安装 `uv` 管理器

```bash
pip install uv
```

3. 安装完成之后，会弹出 `uv` 的命令提示

![uv安装](/images/tutorial/image-20260325012112649.png)

4. 在终端中运行 `git` 命令，如果提示"命令未找到"，则需要你去安装，待安装好后进入下一步

[Git 下载地址](https://git-scm.com/)

5. 在 D 盘或者其他你存放代码的目录新建一个 MCP 目录，然后在目录下运行 cmd 命令行，输入以下命令拉取 Serena 的仓库

```bash
git clone https://github.com/oraios/serena.git
```

完成后 `cd serena` 进入目录

6. 运行以下命令启动 Serena Mcp

```bash
uv run serena start-mcp-server --context codex --transport streamable-http --port 9121
```

此时你的浏览器应该会自动弹出 Serena 的网页控制台。

#### 安装 Desktop-Commander

::: warning 重要
这个 MCP 工具存在一个 BUG，会导致安装失败，作者到现在都没进行修复。为了能成功安装，流程会稍微复杂一些
:::

1. 请先在终端运行以下命令，观察是否能安装成功，若安装成功，则如图中所示。若安装成功，直接进入教程第三步，此步骤余下内容直接跳过

```bash
npx @wonderwhy-er/desktop-commander@latest setup
```

![Desktop-Commander安装成功](/images/tutorial/image-20260325012153463.png)

2. 如果报错了，请你下载 [rg.exe](https://cdn.xf233.io/project/Packy-docs/FAQ/Codex/rg.exe) 到本地

3. 键盘按下"Win+R"键，输入以下内容后回车，打开你的用户目录

```
%userprofile%
```

4. 在此目录下，寻找是否有 `.cargo` 文件夹，若不存在，则手动进行创建

5. 进入 `.cargo` 目录，之后创建 `bin` 目录，将刚才下载的 `rg.exe` 文件复制或剪切进入 `bin` 目录中

6. 重新启动你的 cmd 终端窗口，输入以下命令

```bash
npx @wonderwhy-er/desktop-commander@latest setup
```

7. 此时，你应该已经安装成功

![安装成功](/images/tutorial/image-20260325012212134.png)

### 3. 配置 Codex

1. 键盘按下"Win+R"键，输入以下内容后回车，打开你的用户目录

```
%userprofile%\.codex
```

2. 找到目录中的 `config.toml` 文件，打开并编辑，在最后加上两个 MCP 设置，你的配置文件应该如下：

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

[mcp_servers.desktop-commander]
type = "stdio"
command = "cmd"
args = ["/c", "npx", "-y", "@wonderwhy-er/desktop-commander@latest","--no-onboarding"]

[mcp_servers.desktop-commander.env]
SystemRoot = 'C:\Windows'

[mcp_servers.Serena]
type = "http"
url = "http://127.0.0.1:9121/mcp"
```

3. 打开目录下 `AGENTS.md` 文件（如果没有请手动创建），在里面写入以下内容后保存

```markdown
# Codex全局工作指南

## 回答风格:
 - 回答必须使用中文
 - 对总结、Plan、Task、以及长内容的输出，优先进行逻辑整理后使用美观的Table格式整齐输出;普通内容正常输出

## 工具使用:
1. 文件与代码检索:使用serena mcp来进行文件与代码的检索
2. 文件相关操作:对文件的创建、读取、编辑、删除等操作
    - 优先使用apply_patch工具进行
    - 读文件，apply_patch工具报错或出现问题的情况下使用desktop-commander mcp
    - 任何情况下，禁止使用cmd、powershell或者python来进行文件相关操作
```

::: warning 注意
**注意，此提示词是为适配 Vscode Codex 插件专门配置的，因为 apply_patch 工具只有 Codex 插件才有，在 CLI 中不适用！**
:::

4. 运行你的 Vscode，打开 Codex 插件用起来，看看有什么不一样吧~

## Codex 常用命令

| 命令       | 说明                                               |
| ---------- | -------------------------------------------------- |
| /model     | 选择当前使用的模型                                 |
| /approvals | 设置本会话的审批规则                               |
| /review    | 让 Codex 审查当前工作区变更                        |
| /resume    | 从历史会话列表中选择并继续一个之前的交互会话       |
| /new       | 在当前 CLI 会话中开启新对话                        |
| /init      | 在当前目录生成 AGENTS.md 模板                      |
| /compact   | 总结对话内容以释放上下文                           |
| /undo      | 撤销 Codex 的上一次操作                            |
| /diff      | 查看当前 git diff（含未跟踪文件）                  |
| /mention   | 将指定文件或目录加入对话上下文                     |
| /status    | 查看会话配置和 token 使用情况                      |
| /mcp       | 列出当前可用的 MCP 工具                            |
| /exit      | 退出 Codex CLI                                     |

## Codex 在 Windows 系统下乱码问题

1. 按下快捷键 `Win + R`，打开左下角运行窗口，输入以下命令后回车

```
intl.cpl
```

![打开区域设置](/images/tutorial/image-20260325012423835.png)

2. 点击上侧选项卡"管理"，再点击红色箭头所示的"更改系统区域设置"按钮

![区域设置管理](/images/tutorial/image-20260325012439956.png)

3. 勾选红色箭头所指选项，点击确定。然后在刚才的窗口也点击确定，之后重启一下你的电脑再使用 codex，即可避免乱码

![更改系统区域设置](/images/tutorial/image-20260325012457232.png)

## Vscode Codex 插件中设置最新模型

### Windows

1. 按下快捷键 `Win + R`，打开左下角运行窗口，输入以下命令后回车

```
%userprofile%\.vscode\extensions
```

![打开扩展目录](/images/tutorial/image-20260325012525653.png)

### MacOS

1. 在访达界面按下 "Command+Shift+G"，输入以下路径并回车，打开 VsCode 插件目录

```
~/.vscode/extensions
```

![MacOS扩展目录](/images/tutorial/image-20260325012546227.png)

### 后续步骤

2. 找到以 `openai.chatgpt` 开头的文件夹，后面的数字是版本号，如果存在多个这种开头的目录，选择版本号最新的目录进入

![找到扩展](/images/tutorial/image-20260325012607582.png)

3. 依次进入 `webview\assets` 文件夹，你会看到一大堆 js 文件

![js文件目录](/images/tutorial/image-20260325012627888.png)

4. 下载**替换脚本**后解压，将这个 js 文件复制到刚才有一大堆 js 文件的目录

5. 重启你的 vscode，你就能看见现在能选择最新模型啦！

## Codex 如何配置全局提示词

1. 请你查看 Codex CLI 配置中的前两步

2. 教程中提到的 `AGENTS.md` 文件就是 Codex 的全局提示词文件，如果没有这个文件，你同样需要手动创建这个文件，然后写入提示词

3. 写入提示词保存，重启你的 Codex 或者 vscode，提示词即生效

## Codex 开启内置网络搜索

1. 请你查看 Codex CLI 配置中的前两步

2. 打开教程中提到的 `config.toml` 文件，在里面加入以下内容

```toml
[features]
web_search_request = true
```

3. 运行 Codex，进行尝试

![网络搜索](/images/tutorial/image-20260325012723458.png)

## Codex 在容器或 CLI 沙盒中的网络连接问题

> 当 Codex 在 CLI 沙盒或容器（如 tun 模式）中运行时遇到网络连接问题（如无法拉取安装包），且其他工具（如终端、Claude Code）正常，这通常是由于 MTU 设置不当引起的。

**解决方案：**

- 将 MTU 值改为 1500，此设置通常可在您的 Clash 客户端中进行更改。
- 对于在 Linux 上找不到 Clash MTU 设置的用户，可以参考此链接：https://linux.do/t/topic/1220328

## Connection failed 问题

报错信息类似为：

```
Connection failed: error sending request for url (https://kit.xin//v1/responses)
```

出现这种情况是你本机网络出现了问题，按以下步骤排查：

1. 检查本机网络是否通畅，能否访问其他页面
2. 检查你的电脑是否使用了 `网络代理（梯子）` 工具，如果存在请你关闭
3. 使用终端，运行 `codex` 命令，尝试在 CLI 中发送对话信息，判断是否是 Vscode Codex 插件问题，如是，请你重启 vscode 进行尝试
4. 如果还不行，带上你的报错截图，在群内咨询客服或群友

## 401 报错问题

报错信息类似为：

```
exceeded retry limit, last status: 401 Unauthorized, request id: xxxxxx
```

### 环境变量检查

#### Windows

在 Windows 或 MacOS 的终端运行以下命令，判断是否存在环境变量：

```cmd
cmd /c "echo ================= OPENAI ENV CHECK ================= & ^
if defined OPENAI_API_KEY (echo OPENAI_API_KEY  = OK) else (echo OPENAI_API_KEY  = MISSING) & ^
if defined OPENAI_BASE_URL (echo OPENAI_BASE_URL = OK) else (echo OPENAI_BASE_URL = MISSING) & ^
echo ========================================================="
```

如果输出以下内容，则直接进入第 2 步：

```
OPENAI_API_KEY  = MISSING
OPENAI_BASE_URL = MISSING
```

如果输出内容不同，请在终端运行以下命令后进入第二步：

```cmd
cmd /c "setx OPENAI_API_KEY \"\" & setx OPENAI_BASE_URL \"\""
```

#### macOS

```bash
echo "================= OPENAI ENV CHECK ================="
if [ -z "$OPENAI_API_KEY" ]; then
  echo "OPENAI_API_KEY  = MISSING"
else
  echo "OPENAI_API_KEY  = OK"
fi

if [ -z "$OPENAI_BASE_URL" ]; then
  echo "OPENAI_BASE_URL = MISSING"
else
  echo "OPENAI_BASE_URL = OK"
fi
echo "========================================================"
```

如果输出以下内容，则直接进入第 2 步：

```
OPENAI_API_KEY  = MISSING
OPENAI_BASE_URL = MISSING
```

如果输出内容不同，请在终端运行以下命令后进入第二步：

```bash
unset OPENAI_API_KEY OPENAI_BASE_URL
```

### 检查配置文件

查看 Codex 在 CLI 中的配置一章

::: warning 重要
**你需要：**

1. 检查 ~/.codex/auth.json 中的 **ApiKey** 配置是否正确
2. 检查 ~/.codex/config.toml 中的 **请求地址** 是否正确
:::

## 403 报错问题

报错信息类似为：

```
unexpected status 403 Forbidden: {"error":{"message":"Usage not included in your
plan","type":"usage_not_included","param":null,"code":null,"plan_type":"basic"}}
```

出现这种情况是号池中的这个账号出现问题，你需要：

1. 使用 `Ctrl+C` 来打断你的对话，如在 vscode 中，请点击停止按钮
2. 重新发起对话进行尝试，观察是否再次出现此问题
3. 如果重试 3 次以上无效，带上你的报错截图，在群内咨询客服或群友
