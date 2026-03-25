# Kilocode (VS Code 插件)

## 在 VS Code 中配置 Kilocode

1. 在 VS Code 的扩展面板中搜索 `Kilo Code`，下载发布者为 `kilocode.ai` 的扩展（通常是第一个）

![Kilo Code安装](/images/tutorial/image-20260325011716652.png)

2. 打开 Kilocode 面板，点击"设置"

![Kilocode设置](/images/tutorial/image-20260325011741986.png)

3. 配置以下参数：
   - `API Provider`：**OpenAI Compatible (Responses)**
   - `Base URL`：`https://kit.xin/v1`
   - `API Key`：填写从令牌管理获取的令牌
   - `Model`：选择 `gpt-5.2` 或其他模型

4. 继续向下滚动

![Kilocode设置续](/images/tutorial/image-20260325011902602.png)

配置以下参数：
   - 勾选 `Enable Reasoning Effort`，并选择任意值
   - `Max Output Tokens`：保留 `-1` 默认值（或填入 `128000`）
   - `Context Window Size`：填入 `400000`
   - 勾选 `Prompt Caching`
   - 其余的 `Input/Output Price` 可填可不填
   - `Cache Reads/Writes Price` 为 `0`（缓存不计费）

5. 点击 `Save` 回到插件首页，选择刚刚配置的 `profile`，即可开始使用
