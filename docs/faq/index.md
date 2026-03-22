# 全站 FAQ

这一页收最常见的通用问题。  
如果你主要用 Codex，也建议再看 [Codex 相关疑问](/cli/codex-faq)。

## 401 Unauthorized

优先检查：

1. API Key 是否完整复制
2. OpenAI 场景是否使用 `Authorization: Bearer`
3. Claude 场景是否使用 `x-api-key`

## 404 / Not Found

最常见原因是 Base URL 写错。

- OpenAI 兼容：`https://kit.xin/v1`
- Anthropic：`https://kit.xin`

## model not found

优先检查：

1. 模型名是否拼错
2. 模型与协议是否匹配
3. 客户端是不是还在用旧 provider

## 改了配置但没有生效

先做这 4 步：

1. 保存配置文件
2. 完全退出客户端
3. 重新打开终端
4. 再启动客户端

## Curl 能通，客户端不能通

大概率是客户端配置问题。  
回到对应教程页继续排查即可。

## 遇到问题的最短排查路径

1. 先看 [通用配置步骤（一定要看）](/quick-start/common-steps)
2. 再看 [Curl 调用示例](/third-party/curl)
3. 再看对应客户端页
4. 最后再联系 [支持](/contact)
