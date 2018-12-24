const path = require('path')
const logger = require('morgan')
const bodyParse = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
const express = require('express')
const history = require('connect-history-api-fallback')

require('./server/db')
const config = require('./server/config')
const router = require('./server/router')
const resolve = file => path.resolve(__dirname, file)
const app = express()

// 所有请求不跨域
app.all('*', (req, res, next) => {
    const { origin, Origin, referer, Referer } = req.headers
    const allowOrigin = origin || Origin || referer || Referer || '*'
    res.header('Access-Control-Allow-Origin', allowOrigin)
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Credentials', true) // 可以带cookies
    res.header('X-Powered-By', 'Express')
    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
})

app.use(logger()) // 记录日志
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
app.use(cookieParser('leo1'))
app.use(
    session({
        secret: 'leo1', // 与cookieParser中的一致
        resave: true,
        saveUninitialized: true
    })
)

app.use('/api', router)
// 没匹配到的路径链接到index.html
app.use(history())
app.use(express.static(resolve('./dist')))

app.listen(config.port, () => console.log(`http://localhost:${config.port} successed`))
