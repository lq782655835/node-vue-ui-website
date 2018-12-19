# 设计原则

## 常量命名
* `name`: 组件必须带上name，命名规范：ai-xxx
* `size`: 大小分级，值有：xxl,xl,l,s,xs,xxs
* `dir`: 方向分级，值有：h,v（default：h）
* `type`: 类型分级，值有：default,primary, success, warning, error(default: default)
> 开发时，推荐size、type、dir、disabeld样式等放在css中

## v-model
支持v-model也同时支持value.sync，v-model尽量使用value/input官方推荐语法糖。组件通常抛出的事件：

* `input`,用于v-model的双向数据绑定
* `update:value`,用于`.sync`的双向数据绑定
* `change`,监听`value`改变时触发
* `select、toggle、slide`等，抛出单纯由用户触发的事件

## 第三方组件推荐
* svg图标: [vue-svgicon](https://github.com/MMF-FE/vue-svgicon)
* 日期选择: [vue-datepicker-local](https://github.com/weifeiyue/vue-datepicker-local)
* 表单验证: [vuelidate](https://github.com/monterail/vuelidate)
