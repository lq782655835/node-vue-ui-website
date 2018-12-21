import axios from 'axios'
const config = require('../../server/config')

const service = axios.create({
    baseURL: `http://localhost:${config.port}`, // api的base_url
    timeout: 300000 // 请求超时时间，原15000
})

// request拦截器
service.interceptors.request.use(
    config => {
        if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
            config.headers['Content-Type'] = 'application/json'
            if (config.type === 'form') {
                config.headers['Content-Type'] = 'multipart/form-data'
            } else {
                // 序列化
                config.data = JSON.stringify(config.data)
            }
        }

        return config
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
            !response.config.error && alert(res.message, 'error') // 错误统一报出
            return Promise.reject(res)
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
