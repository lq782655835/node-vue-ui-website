# Progress进度条

## 如何使用

```vue
<template>
    <div style="width: 400px;">
        <div><ai-progress :percentage="0" /></div>
        <div><ai-progress :percentage="30" /></div>
        <div><ai-progress :percentage="30" color="#8e71c7" /></div>
        <div><ai-progress :percentage="50" status="warning" /></div>
        <div><ai-progress :percentage="70" status="success" /></div>
    </div>
</template>
```

## 使用参数

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
percentage | 显示百分比长度 | Number | - | -
color | 展示颜色 | String | - | -
status | 展示状态代表颜色 | String | normal, warning, success | normal
