# ToolTip

## 如何使用

显示文案区域需要自己写样式指定宽度，如下style标签

```vue
<template>
    <div class="tooltip">
        <ai-tooltip text="左边提示左边提示左边提示左边提示左边提示" pos="left">
            <ai-button size="m" color="white">OK</ai-button>
        </ai-tooltip>

        <ai-tooltip text="上方提示上方提示上方提示上方提示" pos="top">
            <ai-button size="m" color="white">OK</ai-button>
        </ai-tooltip>


        <ai-tooltip text="下方的提示下方的提示" pos="bottom">
            <ai-button size="m" color="white">OK</ai-button>
        </ai-tooltip>

        <ai-tooltip text="我是在右边的提示" pos="right">
            <ai-button size="m" color="white">OK</ai-button>
        </ai-tooltip>
    </div>
</template>

<style>
    .tool-tip.left { width: 200px; }
    .tool-tip.right { width: 50px; }
    .tool-tip.bottom { width: 100px; }
    .tool-tip.top { width: 90px; }
</style>
```

## 使用参数

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
pos | 出现位置 | String | - | -
text | 显示文案 | String | - | -
