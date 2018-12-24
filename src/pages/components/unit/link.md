# Link

## 如何使用

```html
<u-link href="http://www.baidu.com" target="_blank">外链百度</u-link>
```
```html
<u-link href="http://www.baidu.com" disabled>禁用外链</u-link>
```

## 使用参数

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
href | 跳转的链接地址 | String | - | -
target | 链接打开的方式(原声属性) | String | _blank/_self/_parent/_top | _self
to | 配合vue-router, 与router-link的to属性相同 | String/Location | - | -
append | 配合vue-router, 为true时, 在当前路径前追加to的路径 | Boolean | true/false | false
replace | 配合vue-router, 为true时, 点击调用router.replace(), 不会在导航留下记录 | Boolean | true/false | false
disabled | 是否禁用, 禁用后不响应click事件 | Boolean | true/false | false

## Events

* `$listeners`

监听所有`<a>`元素的事件

* `@click`

点击时触发, 在非disabled状态下触发

* `@before-navigate`

使用router相关属性切换路由时触发

| 参数 | 类型 | 说明 |
| ----- | ---- | ----------- |
| $event.to | String, Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |

* `@navigate`

使用router相关属性切换路由时触发

| 参数 | 类型 | 说明 |
| ----- | ---- | ----------- |
| $event.to | String, Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.exact | Boolean | `exact`属性的值 |
