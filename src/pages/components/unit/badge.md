# Badge

## 如何使用

```html
<ai-badge :value="12" size="m">
  <ai-button size="m" color="primary">OK</ai-button>
</ai-badge>
```
```html
<ai-badge isDot>
  <ai-button size="m" color="primary">OK</ai-button>
</ai-badge>
```

## 使用参数

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
value | 右上角显示的数值 | Number | - | 0
isDot | 右上角显示小圆点 | Boolean | - | false
size | 右上角标记的大小 | String | s/m/l | m
maxValue | 右上角显示的数字的最大值 | Number | Infinity