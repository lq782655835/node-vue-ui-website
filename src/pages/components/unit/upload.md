# Upload

## 如何使用

```html
<ai-upload url="xxxx" accept="*" @success="" :limit="1048576">
    <ai-button size="s">上传</ai-button>
</ai-upload>
```

## 使用参数

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
url | 上传url | String | - | -
limit | 限制大小 | Number | - | 1024 * 1024
accept | 上传类型 | String | - | -
preUpload | 上传预处理 | Function | - | -
`success` | 成功上传回调 | Function | - | null
`error` | 上传错误回调 | Function | - | null

## 更多

* preUpload预处理函数如果返回`false`，打断上传，可以在此处做预先上传处理
* accept 上传类型以`,`分隔类型，比如 `accept = ".jpg,.png"` 限制上传两种图片格式，`*`代表接受所有类型
* error 错误回调可能返回两种状态值(Number)：1(超出限制大小),2(非上传类型)
