<template>
    <pre>
        <code ref="code" v-if="type === 'html'" class="html" v-html="HTMLEncode()"></code>
        <code ref="code" v-if="type !== 'html'" :class="type">
            <slot />
        </code>
    </pre>
</template>

<script>
import hljs from 'highlight.js'
export default {
    props: {
        html: String,
        type: String
    },
    mounted () {
        hljs.highlightBlock(this.$refs.code)
    },
    methods: {
        HTMLEncode () {
            var temp = document.createElement('div')
            temp.textContent ? (temp.textContent = this.html) : (temp.innerText = this.html)
            var output = temp.innerHTML
            temp = null
            return output
        }
    }
}
</script>

<style lang="scss"></style>
