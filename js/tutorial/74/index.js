function* strGenerator() {
  yield 'H'
  yield 'e'
  yield 'l'
  yield 'l'
  yield 'o'
}

const str = strGenerator()

function* numberGen(n = 10) {
  for(let i = 0; i < n; i++) {
    yield i
  }
}

const number = numberGen(7)

const iterator = {
  gen(n = 10) {
    let i = 0
    return {
      next() {
        if (i < n) {
          return {value: ++i, done: false}
        }
        return {value: undefined, done: true}
      }
    }
  }
}

const iterator2 = {
  [Symbol.iterator2](n = 10) {
    let i = 0
    return {
      next() {
        if (i < n) {
          return {value: ++i, done: false}
        }
        return {value: undefined, done: true}
      }
    }
  }
}

for (let k of iterator2) {
  console.log(k)
}

function* iter(n = 10) {
  for (let i = 0; i< n; i++ ) {
    yield i
  }
}

for (let k of iter(7)) {
  console.log(k)
}