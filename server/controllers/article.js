const ArticleModel = require('../models/article')
const Utils = require('../utils')

function ArticleController(options) {
    this.options = options
}

ArticleController.prototype.createNewArticle = (req, res, next) => {
    let params = req.body
    ArticleModel.create(params)
        .then(data => res.send(Utils.success(data)))
        .catch(err => res.send(Utils.error(err)))
}

ArticleController.prototype.getArticleById = (req, res, next) => {
    let id = req.params.id
    ArticleModel.findById(id)
        .then(data => res.send(Utils.success(data)))
        .catch(err => res.send(Utils.error(err)))
}

ArticleController.prototype.getArticleList = (req, res, next) => {
    ArticleModel.find()
        .then(data => res.send(Utils.success(data)))
        .catch(err => res.send(Utils.error(err)))
}

module.exports = new ArticleController()
