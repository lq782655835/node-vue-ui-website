# sidebar
## 如何使用
```vue
<template>
  <ai-sidebar :tree="tree"></ai-sidebar>
</template>

<script>
export default {
  data() {
    return {
      tree: [
          { text: 'aaa', to: '/aaa' },
          { text: 'aab', to: '/aab' },
          {
            text: 'aac',
            open: false,
            childs: [
              { text: 'bbb', to: '/bbb' },
            ]
          }
      ]
    }
  }
}
</script>
```
## 属性设置
| 参数 | 说明 | 类型| 可选值| 默认值|
| --- | --- | --- | --- | --- |
| tree | 传入的侧边栏对象数组，可嵌套 | Array | - | [ ] |

tree中包含的侧边栏对象参数:
| 参数 | 说明 | 类型|
| --- | --- | --- |
| text | 显示文本 | String |
| to | 跳转路径 | String |
| open | 是否展开 | Boolean |
| childs | 嵌套的对象数组 | Array |
