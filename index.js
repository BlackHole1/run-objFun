const kindOf = require('kind-of')

const entry = (obj) => {
  if (kindOf(obj) !== 'object') return false
  for (let key in obj) {
    const fun = obj[key]
    if (kindOf(fun) === 'function') fun()
  }
  return true
}

module.exports = entry
