<template>
    <div class="g-page">
        <div class="g-head">Color色彩</div>
        <div class="g-mtitle">概述</div>
        <div>推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致</div>
        <div class="g-mtitle">主色</div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        HTMLEncode (html) {
            var temp = document.createElement('div')
            temp.textContent ? (temp.textContent = html) : (temp.innerText = html)
            var output = temp.innerHTML
            temp = null
            return output
        }
    }
}
</script>

<style lang="scss"></style>
