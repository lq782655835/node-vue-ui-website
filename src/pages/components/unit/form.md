# Form

## 如何使用

```vue
<template>
    <ai-form left="100px" right="300px" @save="save" @cancel="cancel" style="width: 400px;">
        <ai-form-item label="姓名" error="请填写姓名" required><ai-input></ai-input></ai-form-item>
        <ai-form-item label="年龄" required tip="仅支持数字"><ai-input></ai-input></ai-form-item>
        <ai-form-item label="性别"><ai-input></ai-input></ai-form-item>
    </ai-form>
</template>

<script>
  export default {
    methods: {
      save () { this.$toast('save click') },
      cancel () { this.$toast('cancel click') }
    }
  }
</script>
```

## 使用参数

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
left | 表单左侧宽度 | String | - | -
right | 表单右侧宽度 | String | - | -
label | 表单左侧描述 | String | - | -
error | 表单错误提示 | String | - | -
required | 是否必填样式 | Boolean | - | -
tip | 表单行提示 | String | - | -
`save` | 保存点击 | Function | - | null
`cancel` | 取消点击 | Function | - | null

## 更多
只有绑定了 save 或者 cancel 函数，才会显示按钮。
