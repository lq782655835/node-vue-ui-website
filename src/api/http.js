import axios from 'axios'
const config = require('../../server/config')

const service = axios.create({
    baseURL: `http://localhost:${config.port}`, // api的base_url
    timeout: 300000 // 请求超时时间，原15000
})

// request拦截器
service.interceptors.request.use(
    request => {
        console.log(request)
        if (request.method === 'post' || request.method === 'put' || request.method === 'delete') {
            request.headers['Content-Type'] = 'application/json'
            if (request.type === 'form') {
                request.headers['Content-Type'] = 'multipart/form-data'
            } else {
                // 序列化
                request.data = JSON.stringify(request.data)
            }
        }
        return request
    },
    error => {
        Promise.reject(error)
    }
)

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        console.log(res)
        if (res.success) {
            return res.detail // 直接返回数据
        } else {
            !response.config.error && alert(res.message || res.detail, 'error') // 错误统一报出
            return Promise.reject(res)
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
