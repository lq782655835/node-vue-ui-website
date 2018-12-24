<template>
    <div class="article-modify">
        <u-layout dir="v" display="block">
            <u-input v-model="title" placeholder="请输入标题"/>
            <u-input v-model="content" type="textarea" placeholder="请输入内容，markdown文档格式"/>
            <u-layout>
                <u-button color="primary" @click="modify">提交</u-button>
                <u-button to="/article">返回</u-button>
            </u-layout>
        </u-layout>
    </div>
</template>

<script>
import { addArticle, editArticleById, getArticleById } from '@/api'

export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    computed: {
        id() {
            return this.$route.query.id
        }
    },
    methods: {
        modify() {
            this.id ? this.edit() : this.add()
        },
        add() {
            addArticle(this.data).then(data => alert('添加成功'))
        },
        edit() {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>

