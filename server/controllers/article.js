const ArticleModel = require('../models/article')
const Utils = require('../utils')

class ArticleController {
    constructor (options) {
        this.options = options
    }

    testMethod (req, res, next) {
        res.send('hello world')
    }

    createNewArticle (req, res, next) {
        let params = req.body
        ArticleModel.create(params)
            .then(data => res.send(Utils.success(data)))
            .catch(err => res.send(Utils.error(err)))
    }

    getArticleById (req, res, next) {
        let id = req.params.id
        ArticleModel.findById(id)
            .then(data => res.send(Utils.success(data)))
            .catch(err => res.send(Utils.error(err)))
    }

    getArticleList (req, res, next) {
        ArticleModel.find()
            .then(data => res.send(Utils.success(data)))
            .catch(err => res.send(Utils.error(err)))
    }
}

module.exports = new ArticleController()
