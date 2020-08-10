// var promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3)
//   },2000)
// })
//
// promise
//   .then(num => num *= 3)
//   .catch(err => console.log(err))
//   .then(num => num *= 4)
//   .finally(() => console.log('finally'))

class MyPromise {
  constructor(callback) {

    this.onCatch = null
    this.onFinally = null
    this.thenCbs = []
    this.isRejected = false

    function resolver(data) {
      if(this.isRejected) {
        return
      }

      this.thenCbs.forEach(callback => {
        data = callback(data)
      })

      if(this.onFinally) {
        this.onFinally()
      }
    }

    function rejecter(error) {
      this.isRejected = true
      if(this.onCatch) {
        this.onCatch(error)
      }

      if(this.onFinally) {
        this.onFinally()
      }
    }

    callback(resolver.bind(this), rejecter.bind(this))
  }

  then(callback) {
    this.thenCbs.push(callback)
    return this
  }

  catch(callback) {
    this.onCatch = callback
    return this
  }

  finally(callback) {
    this.onFinally = callback
    return this
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('error')
    resolve(3)
  },2000)


})

promise
  .then(num => num *= 3)
  .catch(err => console.log(err))
  .then(num => num *= 4)
  .finally(() => console.log('finally'))
  .then(num => console.log('done', num))