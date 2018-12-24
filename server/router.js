const express = require('express')
const router = express.Router()
const ArticleController = require('./controllers/article')

router.get('/test', ArticleController.testMethod)
router.post('/article', ArticleController.createNewArticle)
router.get('/article/list', ArticleController.getArticleList)
router.get('/article/:id', ArticleController.getArticleById)
router.delete('/article/:id', ArticleController.delArticleById)

module.exports = router
