<template>
    <div class="main" @click="toMain"></div>
</template>

<script>
export default {
    methods: {
        toMain () {
            location.href = '/main.html'
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/common.scss';
.main {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: url(/static/index.jpg) no-repeat center center/contain;
}
</style>
