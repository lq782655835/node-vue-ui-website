<template>
    <div class="c-leftbar"><side-bar-item v-for="item in items" :key="item.path" :item="item" /></div>
</template>

<script>
import SideBarItem from './sidebar-item'

export default {
    props: {
        items: Array
    },
    data() {
        return {}
    },
    components: {
        SideBarItem
    },
    computed: {},
    watch: {},
    created() {}
}
</script>

<style lang="scss">
.c-leftbar {
    background-color: #fff;
    width: 240px;
    height: 100%;
    box-sizing: border-box;
    padding-top: 38px;
    border-right: 1px solid #e9ecf2;
    float: left;
    .item-wrap {
        margin-bottom: 32px;
        cursor: pointer;
    }
    .item {
        padding: 0 32px;
        height: 24px;
        line-height: 24px;
        box-sizing: border-box;
    }
    .item-icon {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 8px;
        position: relative;
        top: 2px;
    }
    .item-name {
        font-size: 14px;
        color: #222;
    }
    .sub-wrap {
        padding-top: 8px;
    }
    .sub {
        display: block;
        height: 40px;
        line-height: 40px;
        color: #666666;
        font-size: 14px;
        background-color: initial;
        box-sizing: border-box;
        padding-left: 56px;
        &.hot,
        &:hover {
            background-color: #4d93ff;
            color: #ffffff;
        }
    }
}
</style>
