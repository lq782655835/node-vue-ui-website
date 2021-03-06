# Button
## 基本使用
```vue
<template>
  <div>
    <u-button>普通按钮</u-button>
    <u-button type="primary">主要按钮</u-button>
    <u-button type="success">成功按钮</u-button>
    <u-button type="warning">警告按钮</u-button>
    <u-button type="danger">禁用按钮</u-button>
    <u-button type="info">消息按钮</u-button>
  </div>
</template>
```

## to/href
```vue
<template>
    <div>
        <u-button to="/components/unit/link" type="primary">导航按钮</u-button>
        <u-button href="http://www.baidu.com" type="primary">对外导航按钮</u-button>
    </div>
</template>
```

## size
```vue
<template>
  <div>
    <u-button size="l">大按钮</u-button>
    <u-button>普通大小按钮</u-button>
    <u-button size="s">小按钮</u-button>
  </div>
</template>
```

## disabled
```vue
<template>
  <u-button disabled>禁用按钮</u-button>
</template>
```

## 属性设置
| 参数 | 说明 | 类型| 可选值| 默认值|
| --- | --- | --- | --- | --- |
type | 主题 | String | primary/success/warning/danger/info | -
size | 预设输入框尺寸 | String | l/s | m
href | 跳转的链接地址 | String | - | -
to | 配合vue-router, 与router-link的to属性相同 | String/Location | - | -
target | 链接打开的方式(原声属性) | String | _blank/_self/_parent/_top | _self
append | 配合vue-router, 为true时, 在当前路径前追加to的路径 | Boolean | true/false | false
replace | 配合vue-router, 为true时, 点击调用router.replace(), 不会在导航留下记录 | Boolean | true/false | false
disabled | 是否禁用, 禁用后不响应click事件 | Boolean | true/false | false

## 事件

| 事件名| 说明| 回调值|
| -- | -- | -- |
| @click |  点击按钮时触发 | event |
| @before-navigate |  使用router相关属性切换路由前触发 | event: {to, replace, preventDefault} |
| @navigate |  使用router相关属性切换路由后触发 | event: {to, replace, exact} |
