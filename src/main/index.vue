<template>
    <div class="main">
        <div class="g-top">
            <ul class="g-menubar g-clearfix">
                <li class="g-menu" @click="toIndex">首页</li>
                <router-link to="/guide" class="g-menu">新手指南</router-link>
                <router-link to="/components" class="g-menu">组件展示</router-link>
                <router-link to="/question" class="g-menu">问题解释</router-link>
                <router-link to="/code" class="g-menu">代码设计</router-link>
            </ul>
            <div class="g-logo" @click="toIndex"><img src="/static/logo.svg" />NetEase-AI UI</div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import router from '@/router'

export default {
    router,
    methods: {
        toIndex() {
            location.href = '/'
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/common.scss';
.main {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 64px;
    box-sizing: border-box;
}
.g-top {
    background-color: #434b57;
    height: 64px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 14px;
    color: #fff;
}
.g-menubar {
    float: right;
    margin-right: 105px;
    height: 64px;
    line-height: 64px;
}
.g-menu {
    float: left;
    margin-left: 32px;
    font-weight: 100;
    font-size: 14px;
    display: list-item;
    cursor: pointer;
    color: #ffffff;
    list-style: none;
    &:hover {
        color: #ffffff;
        opacity: 1;
    }
}
.g-logo {
    cursor: pointer;
    width: 230px;
    img {
        display: inline-block;
        width: 32px;
        height: 32px;
        margin-left: 32px;
        margin-right: 7px;
        vertical-align: middle;
        position: relative;
        top: -2px;
    }
    line-height: 64px;
    font-size: 20px;
    color: #fff;
}
</style>
