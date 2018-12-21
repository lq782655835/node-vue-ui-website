const path = require('path')
const logger = require('morgan')
const bodyParse = require('body-parser')
const express = require('express')

require('./server/db')
const config = require('./server/config')
const router = require('./server/router')
const resolve = file => path.resolve(__dirname, file)
const app = express()

app.use(logger())
// 所有请求不跨域
app.all('*', (req, res, next) => {
    const { origin, Origin, referer, Referer } = req.headers
    const allowOrigin = origin || Origin || referer || Referer || '*'
    res.header('Access-Control-Allow-Origin', allowOrigin)
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Credentials', true) // 可以带cookies
    res.header('X-Powered-By', 'Express')
    if (req.method == 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
})

app.use(express.static(resolve('./dist')))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
app.use('/api', router)

app.listen(config.port, () => console.log(`http://localhost:${config.port} successed`))
