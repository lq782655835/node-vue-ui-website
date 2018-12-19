# Radio

## 如何使用

基本用法
```vue
<template>
  <div>
    <ai-radio-group v-model="pick" :list="options"></ai-radio-group>
    <div style="padding: 16px 0;">您选择了：{{pick}}</div>
    <ai-radio-group :list="options" disabled></ai-radio-group>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                pick: '',
                options: [
                    {label: '选项1', value: 1, checked: true},
                    {label: '选项2', value: 2},
                    {label: '选项3', value: 3}
                ]
            }
        }
    }
</script>
```

## 使用参数

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
list | 数据 | Array | - | -
disabled | 禁止选择 | Boolean | - | -
v-model | 选择项 | Model | - | -
`change` | 选择回调 | Function | - | -
