<template>
    <div class="g-page page-ques">
        <div class="g-head">和服务端进行交互</div>
        <div class="g-head-time">最近更新时间：2018-09-04 13:00:29</div>
        <div class="ques-wrap">
            <div class="g-mtitle">为什么为什么为什么会组件库分开js文件？</div>
            <div class="g-stitle">你说为啥呢，我也很想知道为什么这么写的。</div>
        </div>
        <div class="ques-wrap">
            <div class="g-mtitle">为什么为什么为什么会组件库分开js文件？</div>
            <div class="g-stitle">你说为啥呢，我也很想知道为什么这么写的。</div>
        </div>
        <div class="ques-wrap">
            <div class="g-mtitle">为什么为什么为什么会组件库分开js文件？</div>
            <div class="g-stitle">你说为啥呢，我也很想知道为什么这么写的。</div>
        </div>
    </div>
</template>

<script>
import CodeReview from '@/components/code-review'
export default {
    components: {
        CodeReview
    },
    computed: {}
}
</script>

<style lang="scss">
.page-ques {
    .ques-wrap {
        padding-top: 56px;
    }
    .g-mtitle {
        &:before {
            display: inline-block;
            position: relative;
            top: -2px;
            vertical-align: middle;
            content: 'Q';
            color: #ffffff;
            width: 22px;
            height: 22px;
            line-height: 22px;
            text-align: center;
            margin-right: 8px;
            border-radius: 4px;
            font-size: 14px;
            background-color: #fdb58d;
        }
    }
    .g-stitle {
        &:before {
            display: inline-block;
            position: relative;
            top: -2px;
            vertical-align: middle;
            content: 'A';
            color: #ffffff;
            width: 22px;
            height: 22px;
            line-height: 22px;
            text-align: center;
            margin-right: 8px;
            border-radius: 4px;
            font-size: 14px;
            background-color: #8de9b5;
        }
    }
}
</style>
