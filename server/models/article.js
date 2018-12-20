const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: String, default: 'leo' },
    createDate: Date
})
articleSchema.pre('save', function(next) {
    if (!this.createDate) this.createDate = new Date()
    if (!this.author) this.author = 'leo'

    next()
})

const ArticleModel = mongoose.model('Article', articleSchema)
module.exports = ArticleModel
