# 字体

对字体进行了统一规范，力求在不同平台、浏览器下能显示出其最佳的效果。推荐  macOS（iOS）优先的策略，在不支持苹方字体的情况，使用备用字体。

## 字体代码

'PingFangSC-Regular', Helvetica, Tahoma, Arial, 'Microsoft YaHei',
'Hiragino Sans GB', 'WenQuanYi Micro Hei', sans-serif;

![image](https://user-images.githubusercontent.com/6310131/48880047-8c612480-ee49-11e8-82ea-1e868a9b06b2.png)

## 字体颜色

常规色`$ai-color-medium`: #222222;

辅助色`$ai-color-disabled`: #888888;

## 字号

标题字号`$ai-fontsize-xl`: 18px;

次标题字号`$ai-fontsize-l`: 16px;

常规字号`$ai-fontsize-m`: 14px;

辅助字号`$ai-fontsize-s`: 12px;

## 字体使用规范

| 中文字体 | 粗细 | 颜色 | 字号 | mixin编程 |
| ------ | ------ | ------ | ------ | ------ |
| 主标题 | 加粗 | 常规色 | 标题字号 | `ai-font-title` |
| 次级标题 | 常规 | 常规色 | 次标题字号 | `ai-font-subtitle` |
| 正文 | 常规 | 常规色 | 常规字号 | 默认,不用mixin |
| 正文2 | 常规 | 常规色 | 辅助字号 | `ai-font-subtext` |
| 辅助文字 | 常规 | 辅助色 | 辅助字号 | `ai-font-disabled` |

![image](https://user-images.githubusercontent.com/6310131/48880111-d9dd9180-ee49-11e8-8ab6-472ee54d88c7.png)
