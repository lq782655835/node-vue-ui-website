# capsules
## 基如何使用
```vue
<template>
  <ai-capsules v-model="select" size="s" :list="list" @change="changeHandler"></ai-capsules>
</template>
<script>
export default {
  data() {
    return {
      list: [
          { text: 'IOS', value: 1 },
          { text: 'ANDROID', value: 2 },
          { text: 'BLACKBERRY', value: 3 },
      ],
      select: { text: 'ANDROID', value: 2 },
      changeVal: '',
    }
  },
  methods: {
    changeHandler (val) {
      this.changeVal = JSON.stringify(val)
    }
  }
}
</script>
```
### Attribute
| 参数 | 说明 | 类型| 可选值| 默认值|
| --- | --- | --- | --- | --- |
| list | 数据列表 | Array | - | [] |
| size | 尺寸 | String | `s`, `m` | `m` |
| value | 与组件绑定的选择对象 | Object | - | {} |

### Event
| 事件名| 说明| 回调值|
| -- | -- | -- |
| change | 修改所选按钮触发该事件| 所选对象值|
