const { expect } = require('chai')

describe('test/server/config.test.js', () => {
    it('这是一个测试文件', () => {
        expect(1).to.equal(1)
        expect('123').to.be.a('string')
        expect([1, 2, 3]).to.include(2)
        expect('everything').to.be.ok
    })
})
