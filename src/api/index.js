import http from './http.js'

export const getArticleList = () =>
    http({
        url: `/api/article/list`,
        method: 'get'
    })

export const getArticleById = (id) =>
    http({
        url: `/api/article/${id}`,
        method: 'get'
    })

export const deleteArticleById = (id) =>
    http({
        url: `/api/article/${id}`,
        method: 'delete'
    })

export const editArticleById = (id) =>
    http({
        url: `/api/article/${id}`,
        method: 'post'
    })

export const addArticle = (data) =>
    http({
        url: `/api/article`,
        method: 'post',
        data: data
    })
