const path = require('path')
const express = require('express')
const bodyParse = require('body-parser')
const router = require('./server/router')
const app = express()

const resolve = file => path.resolve(__dirname, file)
app.use(express.static(resolve('./dist')))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
app.use('/api', router)

app.listen(3000, () => console.log('http://localhost:3000 successed'))
