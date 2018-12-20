<template>
    <div class="g-page">
        <div class="g-head">Button</div>
        <div class="g-head-time">最近更新时间：2018-09-04 13:00:29</div>
        <div><ai-button size="l" color="primary">按钮</ai-button></div>
        <code-review type="html" :html="html" />
        <code-review type="scss">
            @import "../../assets/css/common"; @mixin generator-btn-size($class, $fontsize, $height, $lineheight, $padding) {
            &.size-#{$class} { font-size: $fontsize; height: $height; line-height: $lineheight; padding: $padding; @if $lineheight
            != null { &.color-white-disabled, &.color-white { line-height: $lineheight - 2px; // 有边框去掉2px行高 } } } }
            $btnSizeClass: ('l' 18px 48px 48px (0 40px)) ('m' $font-size-m 36px 36px (0 20px)) ('s' $font-size-s 26px 26px (0
            10px)) ('xs' $font-size-s null null (2px 5px)); .ai-button { display: inline-block; box-sizing: border-box;
            border-radius: $border-radius-middle; text-align: center; &.color-primary-disabled { background-color: $color-button;
            color: $color-white; opacity: .4; cursor: not-allowed; } &.color-primary { @extend .color-primary-disabled; opacity:
            1; cursor: pointer; &:hover { background-color: $color-button-hover; } } &.color-white-disabled { color:
            $color-button; background-color: $color-white; border: 1px solid $color-button; opacity: .4; cursor: not-allowed; }
            &.color-white { @extend .color-white-disabled; opacity: 1; cursor: pointer; &:hover { background-color: #E3EFFF; } }
            @each $sizeClass in $btnSizeClass { @include generator-btn-size($sizeClass...) } }
        </code-review>
        <code-review type="javascript">
            export default { name: 'ai-button', render (createElement) { return createElement('a', { 'class': ['ai-button',
            'size-' + this.size, 'color-' + this.colorClass], on: { click: this.onClick }, }, this.$slots.default) }, props: {
            disabled: { type: Boolean, default: false }, size: { type: String, default: 'm' }, color: { type: String, default:
            'primary' } }, data () { return {} }, computed: { colorClass () { return this.disabled ? `${this.color}-disabled` :
            this.color } }, methods: { onClick (event) { if (this.disabled === false) { this.$emit('click', event) } } } }
        </code-review>
    </div>
</template>

<script>
import CodeReview from '@/components/code-review'
export default {
    components: {
        CodeReview
    },
    computed: {
        html() {
            return `
                <template>
                    <label :class="{'disabled':isDisabled}" :data-value="value" class="ai-radio">
                        <div class="ai-radio-select-mark">
                        <div :class="{'picked':isPicked, 'disabled':isDisabled}" class="select-mark"></div>
                        <input v-model="origPicked" @click.stop="" :value="value" :disabled="isDisabled"
                                class="orig-radio" type="radio">
                        </div>
                        <div class="ai-radio-label">
                        <slot></slot>
                        </div>
                    </label>
                </template>
            `
        }
    }
}
</script>

<style lang="scss"></style>
