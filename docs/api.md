# API 文档

这部分默认按 OpenAI 兼容接口来写，最适合中转站第一版。

## 基础信息

- Base URL：`http://kit.xin/`
- Chat Completions：`/v1/chat/completions`
- API Key：在控制台生成，放到 `Authorization: Bearer <YOUR_KEY>`

## cURL 示例

```bash
curl http://kit.xin/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "gpt-4.1",
    "messages": [
      {
        "role": "user",
        "content": "你好，帮我写一个 Node.js hello world"
      }
    ]
  }'
```

## JavaScript 示例

```ts
const response = await fetch('http://kit.xin/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer sk-xxxx'
  },
  body: JSON.stringify({
    model: 'gpt-4.1',
    messages: [{ role: 'user', content: 'Say hello in Chinese.' }]
  })
})

const data = await response.json()
console.log(data)
```

## 常见约定

- 模型名是否与上游完全一致。
- 是否支持流式输出。
- 是否支持函数调用、视觉、推理模型。
- 超时、限流和错误码策略。

## 推荐扩展

后续如果你有稳定的 OpenAPI 定义文件，再考虑接入 OpenAPI 展示插件，而不是一开始就增加复杂度。
