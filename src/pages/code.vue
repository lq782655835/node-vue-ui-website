<template>
    <div class="g-page">
        <div class="page-guide">
            <div class="g-head">源码目录</div>
            <div class="g-head-time">最近更新时间：2018-09-04 14:14:30</div>
            <div class="g-clearfix">
                <div class="pleft">
                    <div class="items">
                        <div class="first-item g-clearfix">
                            <a class="search-btn">下载源码包</a> <input type="text" class="search" />
                        </div>
                        <div class="item g-clearfix">
                            <i class="folder"></i><span class="item-text">.github</span
                            ><span class="item-desc">将GitHub模板重新名</span>
                        </div>
                        <div class="item g-clearfix">
                            <i class="folder"></i><span class="item-text">docs</span
                            ><span class="item-desc">将GitHub模板重新名</span>
                        </div>
                        <div class="item g-clearfix hot">
                            <i class="folder"></i><span class="item-text">src</span
                            ><span class="item-desc">将GitHub模板重新名</span>
                        </div>
                        <div class="item g-clearfix">
                            <i class="folder"></i><span class="item-text">dist</span
                            ><span class="item-desc">将GitHub模板重新名</span>
                        </div>
                        <div class="item g-clearfix">
                            <i class="doc"></i><span class="item-text">dist</span
                            ><span class="item-desc">将GitHub模板重新名</span>
                        </div>
                    </div>
                </div>
                <div class="pright">
                    <div class="items">
                        <div class="doc-title">README.md</div>
                        <div class="g-title">Src</div>
                        <div class="g-stitle">
                            Flask是一个轻量级的WSGI
                            Web应用程序框架。它旨在使入门快速简便，并能够扩展到复杂的应用程序。它最初是围绕Werkzeug
                            和Jinja的简单包装器，并且已经成为最受欢迎的Python
                            Web应用程序框架之一。Flask提供建议，但不强制执行任何依赖项或项目布局。开发人员可以选择他们想要使用的工具和库。社区提供了许多扩展，可以轻松添加新功能。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.page-guide {
    width: 100%;
    height: 100%;
    .items {
        border-radius: 4px;
        border: 1px solid #e9ecf2;
    }
    .first-item {
        padding: 16px;
        cursor: pointer;
        border-bottom: 1px solid #e9ecf2;
    }
    .item {
        @extend .first-item;
        &.hot,
        &:hover {
            background-color: #f0f2f5;
            .item-text {
                text-decoration: underline;
            }
        }
    }
    .item-text {
        font-size: 14px;
        color: $blue;
        vertical-align: middle;
    }
    .item-desc {
        font-size: 14px;
        color: #666666;
        float: right;
        vertical-align: middle;
    }
    .folder {
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: middle;
        margin-right: 8px;
        background: url(../../static/svg/folder.svg) no-repeat center/16px;
    }
    .doc {
        @extend .folder;
        background-image: url(../../static/svg/doc.svg);
        background-size: 14px;
    }
    .search {
        width: calc(100% - 114px);
        height: 36px;
        line-height: 34px;
        border: 1px solid #c4c7cc;
        border-radius: 4px;
        box-sizing: border-box;
        display: block;
        text-indent: 16px;
        background: url(../../static/svg/search.svg) no-repeat calc(100% - 16px) center/16px;
    }
    .search-btn {
        float: right;
        display: block;
        width: 102px;
        line-height: 36px;
        height: 36px;
        text-align: center;
        color: #ffffff;
        border-radius: 4px;
        font-size: 14px;
        background-color: $blue;
    }
    .pleft {
        border-radius: 4px;
        float: left;
        box-sizing: border-box;
        width: 50%;
        padding-right: 8px;
    }
    .pright {
        border-radius: 4px;
        float: left;
        box-sizing: border-box;
        width: 50%;
        padding-left: 8px;
        .items {
            padding: 32px;
        }
    }
    .doc-title {
        color: #666666;
        font-size: 14px;
    }
    .g-stitle {
        line-height: 1.5;
    }
}
</style>
