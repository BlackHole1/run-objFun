const kindOf = require('kind-of')

const entry = (obj) => {
  if (kindOf(obj) !== 'object') return false

  let keys = Object.keys(obj)
  let i = keys.length

  while (i--) {
    let key = keys[i]
    const fun = obj[key]
    kindOf(fun) === 'function' && fun()
  }
  return true
}

module.exports = entry
