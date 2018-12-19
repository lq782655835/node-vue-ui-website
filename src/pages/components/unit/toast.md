# Toast


## 如何使用

```vue
<template>
    <div>
        <ai-button size="m" @click="btn">toast</ai-button>
    </div>
</template>

<script>
  export default {
    methods: {
      btn () {
          this.$toast('toast msg')
      }
    }
  }
</script>
```

## 使用参数
* text 文案， type 类型， delay 停留时间
* *`this.$toast(text = '', type = '', delay = 2000)`*
* 可以根据需要增加type样式制作toast
