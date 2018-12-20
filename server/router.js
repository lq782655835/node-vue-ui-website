const express = require('express')
const router = express.Router()
const ArticleController = require('./controllers/article')

router.post('/article', ArticleController.createNewArticle)
router.get('/article/list', ArticleController.getArticleList)
router.get('/article/:id', ArticleController.getArticleById)

module.exports = router
