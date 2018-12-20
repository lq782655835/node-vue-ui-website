import http from './http.js'

export const getArticleList = () =>
    http({
        url: `/api/article/list`,
        method: 'get'
    })
