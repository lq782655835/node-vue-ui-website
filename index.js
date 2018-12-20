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
app.use(express.static(resolve('./dist')))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
app.use('/api', router)

app.listen(config.port, () => console.log(`http://localhost:${config.port} successed`))
