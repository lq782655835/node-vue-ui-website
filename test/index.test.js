const { expect } = require('chai')
const assert = require('assert')
const articleModels = require('../server/models/article')

describe('test', () => {
    describe('test mocha', () => {
        it('mocha api', (done) => {
            assert.equal([1, 2, 3].indexOf(4), -1) // 同步
            articleModels.findById().then(done()) // 异步
        })
    })

    describe('test chai', () => {
        it('chai相关api', () => {
            expect(1).to.equal(1)
            expect('123').to.be.a('string')
            expect([1, 2, 3]).to.include(2)
            expect('everything').to.be.ok
        })
    })
})
