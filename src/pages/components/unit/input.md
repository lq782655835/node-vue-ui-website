# input
## 如何使用
```vue
<template>
  <ai-input v-model="inputValue"></ai-input>
</template>

<script>
export default {
  data() {
    return {
      inputValue: 'helloworld'
    }
  }
}
</script>
```
## 属性设置
> 继承原生input组件参数

| 参数 | 说明 | 类型| 可选值| 默认值|
| --- | --- | --- | --- | --- |
| size | 尺寸| String| `s`, `m`, `l`, `auto`, `textarea` | `medium` |
| value | 输入值| String `|` Number| - | - |

## 事件
| 事件名| 说明| 回调值|
| -- | -- | -- |
| update| 修改input值时触发| 修改后的值|
