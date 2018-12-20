<template>
    <div class="article-list">
        <div v-for="article in articleList" :key="article._id">
            {{article._id}}/{{article.title}}
        </div>
    </div>
</template>

<script>
import {getArticleList} from '@/api'
export default {
    data() {
        return {
            articleList: []
        }
    },
    created() {
        getArticleList().then((data) => this.articleList = data)
    }
}
</script>
