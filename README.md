# run-objFun [![npm](https://img.shields.io/npm/dy/run-objfun.svg)](https://www.npmjs.com/package/run-objfun) [![npm](https://img.shields.io/github/issues/BlackHole1/run-objFun.svg)](https://github.com/BlackHole1/all-equal) [![npm](https://img.shields.io/github/forks/BlackHole1/run-objFun.svg)](https://github.com/BlackHole1/all-equal) [![npm](https://img.shields.io/github/stars/BlackHole1/run-objFun.svg)](https://github.com/BlackHole1/all-equal) [![npm](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/BlackHole1/all-equal)

> Functions in running objects

## install

``` bash
# Install with npm
$ npm install run-objFun --save

# Install with yarn
$ yarn add run-objFun

# Install with bower
$ bower install run-objFun --save
```

## Usage

### function is ES5 or ES6

``` javascript
const runObjFun = require('run-objFun')

let arr = []
const fun1 = () => {
  arr.push(1)
}
const fun2 = function() {
  arr.push(2)
}
const obj = {
  fun1,
  fun2,
  fun3: function() {
    arr.push(3)
  },
  fun4: () => {
    arr.push(4)
  }
}

runObjFun(obj) //=> true
console.log(arr) //=> [1, 2, 3, 4]
```

### Skip non object

``` javascript
const runObjFun = require('run-objFun')

let i = 0
const fun1 = () => {
  ++i
}
const fun2 = () => {
  ++i
}
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

runObjFun(obj) //=> true
console.log(i) //=> 2
```

### Type judgment

``` javascript
const runObjFun = require('run-objFun')

const arr = []

runObjFun(arr) //=> false
```

## Running tests

Install dev dependencies:

``` bash
$ npm i -d && npm test
```

## Contributing


| **Commits** | **Contributor** | 
| --- | --- |
| 1 | [Black-Hole](https://github.com/BlackHole1) |

## Author

**Black-Hole**

* Email：158blackhole@gmail.com
* Blog：[http://bugs.cc](http://bugs.cc)
* WeiBo：[http://weibo.com/comelove](http://weibo.com/comelove)
* Twitter：[https://twitter.com/Free_BlackHole](https://twitter.com/Free_BlackHole)