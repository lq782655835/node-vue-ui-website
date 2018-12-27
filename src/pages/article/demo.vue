<template>
    <div class="article-demo">
        <div class="span-ctn">
            <span ref="span">
                这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字
            </span>
        </div>
        <u-button @click="test">test</u-button>
    </div>
</template>

<script>
export default {
    methods: {
        test () {
            // let clientRects = this.$refs['span'].getClientRects()
            // console.log(clientRects.length)
            let el = this.$refs['span']
            addClientRectsOverlay(el)
            function addClientRectsOverlay (elt) {
                // 通过给每个客户矩形上方遮盖一个绝对定位的div，来保证边界宽度与矩形宽度一致。
                // 注意:如果用户改变大小或者缩放，绘图将会重绘。
                var rects = elt.getClientRects()
                console.log(rects.length)
                for (var i = 0; i !== rects.length; i++) {
                    var rect = rects[i]
                    var tableRectDiv = document.createElement('div')
                    tableRectDiv.style.position = 'absolute'
                    tableRectDiv.style.border = '1px solid red'
                    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
                    tableRectDiv.style.margin = tableRectDiv.style.padding = '0'
                    tableRectDiv.style.top = rect.top + scrollTop + 'px'
                    tableRectDiv.style.left = rect.left + scrollLeft + 'px'
                    // 我们希望 rect.width 作为边框宽度，所以内容宽度减少2px
                    tableRectDiv.style.width = rect.width - 2 + 'px'
                    tableRectDiv.style.height = rect.height - 2 + 'px'
                    document.body.appendChild(tableRectDiv)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.article-demo {
    .span-ctn {
        width: 500px;
        box-shadow: transparent 0px 0px;
        span {
            word-wrap: break-word;
        }
    }
}
</style>
