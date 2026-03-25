# OpenClaw

::: warning 注意
**此教程适合 Linux 云服务器、MacOS 系统用户**
:::

## 安装与初始化

1. 登录服务器 SSH，或在 MacOS 打开你的终端程序，输入以下命令开始安装，耐心等待安装流程结束。等出现以下界面提示后，选择 `yes` 选项回车确认

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

![安装确认](/images/tutorial/image-20260325010620098.png)

2. 之后我们选择 `QuickStart` 回车确认

![选择QuickStart](/images/tutorial/image-20260325010638873.png)

3. 在选择供应商部分我们先选择 `Skip for now` 回车确认，跳过设置

![跳过供应商设置](/images/tutorial/image-20260325010713939.png)

4. 在适配器选择部分，选择 `anthropic`

![选择适配器](/images/tutorial/image-20260325010733975.png)

5. 在模型选择部分，我们选择 `opus-4.5`

![选择模型](/images/tutorial/image-20260325010753509.png)

6. 这里选择社交软件适配器，看个人需要，我们测试选择 `Telegram`

![选择Telegram](/images/tutorial/image-20260325010812489.png)

7. 输入 Bot Token，然后回车

8. 这里选择安装 Skill，这个先跳过，后续可以通过网页进行安装

![跳过Skill](/images/tutorial/image-20260325010834015.png)

9. 这里选择 Hook，使用空格键全选，然后回车确认，之后过程会有 GateWay 安装，请耐心等待

![选择Hook](/images/tutorial/image-20260325010851372.png)

10. 打开方式这里，这里我们先选择跳过

![跳过打开方式](/images/tutorial/image-20260325010911104.png)

11. 安装 Shell 补全脚本，这里选择 `yes` 回车确认，至此我们完成安装

![安装补全脚本](/images/tutorial/image-20260325010931939.png)

## 渠道与模型配置

1. 在你的 SSH 控制台，或者 MacOS 终端输入以下命令安装配置器

```bash
curl -fsSL https://github.com/packyme/openclaw-configurator/releases/latest/download/index.js -o /tmp/openclaw-config.js && node /tmp/openclaw-config.js
```

2. 选择 `添加供应商`，然后选择 `OpenToken`

![添加供应商](/images/tutorial/image-20260325011254589.png)

3. 这里以 Opus 为例，在获取的模型中选择 `Claude Opus 4.5`

![选择Opus模型](/images/tutorial/image-20260325011318203.png)

4. 输入创建 API 令牌一节中你创建的相关分组的令牌，复制后填入

5. 选择 `选择模型`，然后选中我们刚才配置的模型，回车确认

![确认模型](/images/tutorial/image-20260325011355931.png)

6. 选择 `退出`，回到我们的控制台

7. 在控制台输入以下命令，重启 GateWay

```bash
openclaw gateway restart
```

![重启GateWay](/images/tutorial/image-20260325011416801.png)

8. 重启成功后，控制台输入以下命令，进入 TUI 界面，测试模型是否能正常输出。测试正常则输入 `/quit` 退出 TUI 界面

```bash
openclaw tui
```

![TUI测试](/images/tutorial/image-20260325011442977.png)

## 浏览器访问

1. 在控制台输入以下命令，获取 `Dashboard URL`，在浏览器进行访问

::: tip 提示
**如果你是在服务器运行，请使用 nginx 或其他反向代理工具来反代服务，并设置 SSL 证书**

另外需要修改 `~/.openclaw` 下的 `openclaw.json` 文件，在 `gateway` 字段下添加以下内容：

```json
"controlUi":{
    "allowInsecureAuth":true
}
```

![Dashboard URL](/images/tutorial/image-20260325011522360.png)

修改完毕后回到控制台输入以下命令重启网关：

```bash
openclaw gateway restart
```
:::

2. 访问带有 Token 的 `Dashboard URL` 链接，进入后台界面

![后台界面](/images/tutorial/image-20260325011541735.png)

## 配置 Telegram Bot 访问权限

1. 回到之前创建机器人的 @BotFather 的对话中，点击我们的机器人链接，进行对话

2. 首次对话拿到我们所需的 `Pairing code`

![获取Pairing code](/images/tutorial/image-20260325011624926.png)

3. 在控制台输入以下命令允许您跟 Bot 进行互动

```bash
openclaw pairing approve telegram 你的Pairing code
```

![批准配对](/images/tutorial/image-20260325011646086.png)
