<template>
    <div class="article-list">
        <u-layout dir="v">
            <u-button color="primary" class="btn-add" to="/article/modify">新增文章</u-button>
            <u-table :list="articleList">
                <template slot-scope="{ row }">
                    <u-table-column label="ID" width="100px">{{ row._id }}</u-table-column>
                    <u-table-column label="标题" width="100px">{{ row.title }}</u-table-column>
                    <u-table-column label="作者" width="100px">{{ row.author }}</u-table-column>
                    <u-table-column label="操作" width="60px">
                        <u-link color="primary">编辑</u-link>
                        <u-link color="primary" @click="del(row._id)">删除</u-link>
                    </u-table-column>
                </template>
            </u-table>
        </u-layout>
    </div>
</template>

<script>
import { getArticleList, deleteArticleById } from '@/api'
export default {
    data() {
        return {
            articleList: []
        }
    },
    created() {
        this.getAll()
    },
    methods: {
        getAll() {
            getArticleList().then(data => this.articleList = data)
        },
        del(id) {
            deleteArticleById(id).then(data => this.getAll()).catch(error => console.error(error))
        }
    }
}
</script>

<style lang="scss" scoped>
.article-list {
    padding-top: 20px;

    .btn-add {
        margin-left: 20px;
    }
}
</style>
