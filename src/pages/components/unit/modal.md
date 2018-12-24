# Modal组件

Modal组件

## 如何使用

用变量控制组件的显示和关闭

```vue
<template>
<div>
    <u-button @click="isShow = true">Modal</u-button>
    <u-modal v-if="isShow" title="标题提示" @ok="isShow = false" width="400px">弹窗而已</u-modal>
</div>
</template>
<script>
export default {
    data () {
        return { isShow: false }
    }
}
</script>
```

更多示例
```html
<u-modal v-show="false" @confirm="" @cancel=""></u-modal>
<u-modal v-show="false" @ok="" okText="我知道了"></u-modal>
```

## 属性配置

* `confirm`，`cancel`，`ok`绑定才会显示按钮
* `confirm`，`cancel` 不与 `ok` 一起出现
* 绑定ok函数，okText只有单个按钮才生效

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
title | 标题 | String | - | 提示
subTitle | 子标题 | String | - | -
okText | 确定按钮文案 | String | - | 确定
height | Modal 高度 | String | - | auto
width | Modal 宽度 | String | - | auto
align | 内容对齐方式 | String | - | center
`confirm` | 确认操作 | Function | - | null
`cancel` | 取消操作 | Function | - | null
`ok` | 确认操作 | Function | - | null
