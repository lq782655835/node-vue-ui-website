# breadcrumb
## 如何使用
```vue
<template>
  <ai-breadcrumb :links="breadcrumb"></ai-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      breadcrumb: [
          { to: '/linkA', text: '链接A' },
          { to: '/linkB', text: '链接B' }
        ]
    }
  }
}
</script>
```

## 属性
| 参数 | 说明 | 类型| 可选值| 默认值|
| --- | --- | --- | --- | --- |
| links | 展示阶级 | Array | - | [] |

links中对象参数：
| 参数 | 说明 | 类型|
| --- | --- | --- |
| text | 显示文本 | String |
| to | 跳转路径 | String |
