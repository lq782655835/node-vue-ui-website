<template>
    <div class="item-wrap g-noselect">
        <div class="item" @click="itemClick">
            <img :src="`/static/svg/${item.icon}`" class="item-icon" /> <span class="item-name g-noselect">{{ item.name }}</span>
        </div>
        <div v-if="item.children" v-show="show" class="sub-wrap">
            <router-link v-for="link in item.children" :key="link.path" class="sub" :to="link.path">{{ link.name }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {
            show: false
        }
    },
    created() {},
    methods: {
        itemClick() {
            if (this.item.children) {
                this.toggle()
            } else {
                this.$router.push(this.item.path)
            }
        },
        toggle() {
            this.show = !this.show
        }
    }
}
</script>

<style lang="scss"></style>
