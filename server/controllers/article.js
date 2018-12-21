const ArticleModel = require('../models/article')
const Utils = require('../utils')

class ArticleController {
    constructor (options) {
        this.options = options
    }

    testMethod (req, res, next) {
        // res.cookie('cookie2', 'test cookie', { maxAge: 900000, httpOnly: true }) // 设置cookie。from express
        // // res.send(req.headers.cookie) // String 原生node req.headers
        // res.send(req.cookies.cookie1) // Object cookie-parse包提供
        if (req.session.user) {
            var user=req.session.user
            res.send('你好'+user+'，欢迎来到我的家园。')
        } else {
            req.session.user = 'leo'
            res.send('你还没有登录，先登录下再试试！')
        }
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
