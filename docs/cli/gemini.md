# Gemini 配置

## Windows 配置

1. 键盘按下"Win+R"，输入以下内容后回车，打开 Gemini CLI 配置目录

```
%userprofile%\.gemini
```

![打开配置目录](/images/tutorial/image-20260325003226894.png)

2. 如果目录下没有 `.env` 文件，请新建一个 `.env`，写入以下内容

- **.env**：Gemini CLI 的配置文件，主要设置自定义端点、ApiKey 跟所用模型

![.env配置](/images/tutorial/image-20260325003337813.png)

```env
GOOGLE_GEMINI_BASE_URL=https://kit.xin/
GEMINI_API_KEY=xxx
GEMINI_MODEL=gemini-3-pro-preview
```

3. 回顾 创建 API 令牌，在 OpenToken 中创建 **Gemini** 分组令牌，并复制 ApiKey 后填入 `xxx`

![Gemini API Key](/images/tutorial/image-20260325003530493.png)

4. 打开终端执行 `gemini`，看到交互界面并能正常回复即表示配置成功

![Gemini运行](/images/tutorial/image-20260325003609504.png)

## MacOS 配置

1. 按下 "Command+Shift+G"，输入以下路径后回车，打开配置目录

```
~/.gemini
```

![MacOS配置目录](/images/tutorial/image-20260325003634073.png)

2. 若目录中没有 `.env` 文件，创建并写入以下内容

- **.env**：Gemini CLI 的配置文件，主要设置自定义端点、ApiKey 跟所用模型

![MacOS .env配置](/images/tutorial/image-20260325003706673.png)

```env
GOOGLE_GEMINI_BASE_URL=https://kit.xin/
GEMINI_API_KEY=xxx
GEMINI_MODEL=gemini-3-pro-preview
```

3. 回顾 创建 API 令牌，在 OpenToken 中创建 **Gemini** 分组令牌，填入 `xxx`

![MacOS Gemini API Key](/images/tutorial/image-20260325003530493.png)

4. 在终端运行 `gemini`，可正常进入对话并收到回复即表示配置完成

![MacOS Gemini运行](/images/tutorial/image-20260325003845607.png)
