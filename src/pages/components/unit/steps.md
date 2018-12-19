# Steps

## 如何使用

流程控制

```vue
<template>
    <div class="demo-block">
      <ai-steps :value="index">
        <ai-step title="注册"></ai-step>
        <ai-step title="信息"></ai-step>
        <ai-step title="测试"></ai-step>
        <ai-step title="测试2"></ai-step>
      </ai-steps>
      <ai-steps :value="index" @change="changeStep">
        <ai-step title="注册">注册内容</ai-step>
        <ai-step title="信息">
          <ai-button @click="index = 3">下一阶段</ai-button></ai-step>
        <ai-step title="测试">测试内容</ai-step>
        <ai-step title="测试2">测试内容2</ai-step>
      </ai-steps>
    </div>
</template>

<script>
export default {
  data () {
    return {
      index: 1
    }
  },
  methods: {
    changeStep (e) {
      alert(JSON.stringify(e))
    }
  }
}
</script>

```

## 使用参数

## steps
参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
value | 当前默认选中流程的索引 | Number | 0,1,2... | 0

## step 
参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
title | 流程下方显示的名字 | String | - | -

## Events

* `steps`  
`@change`事件, 当步骤数改变之后触发，接受两个参数, value --> 当前步骤数, oldValue --> 之前的步骤数

## slots
`step`接受slot, 详情见demo
