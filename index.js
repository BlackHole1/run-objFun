let ToString = val => ({}).toString.call(val)
let isArray = arr => ToString(arr) === "[object Array]"
let isFun = fun => typeof fun === "function"
let isObject = obj => (obj != null && typeof obj === "object" && !isArray(obj) && ToString(obj) === "[object Object]")

const entry = (obj) => {
  if (!isObject(obj)) return false

  let keys = Object.keys(obj)
  let i = keys.length

  while (i--) {
    let key = keys[i]
    const fun = obj[key]
    isFun(fun) && fun()
  }
  return true
}

module.exports = entry
