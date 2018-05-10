require('mocha')
const expect = require('chai').expect
const runObjFun = require('./index')

describe('Functions in running objects', function() {
  it('Skip non object', function() {
    let i = 0
    const fun1 = () => {
      ++i
    }
    const fun2 = () => {
      ++i
    }
    /* istanbul ignore next */
    const generator1 = function * () {
      ++i
    }
    const array1 = [1, 2, 3]
    const number1 = 123
    const regexp1 = /foo/
    const string1 = 'string'
    const bool1 = true
    const bool2 = false
    const undefined1 = undefined
    const null1 = null

    const obj = {
      fun1,
      fun2,
      generator1,
      array1,
      number1,
      regexp1,
      string1,
      bool1,
      bool2,
      undefined1,
      null1
    }

    runObjFun(obj)
    expect(i).to.equal(2)
  })

  it('Type judgment', function() {
    const array1 = [1, 2, 3, 4]
    const fun1 = {}
    expect(runObjFun(array1)).to.be.false
    expect(runObjFun(fun1)).to.be.true
  })
})
