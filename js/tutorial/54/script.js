console.log('Some text1')
console.log('...')

// setTimeout(function () {
//   console.log('Some text2')
//   console.log('...')
//
//   setTimeout(function () {
//     console.log('some text3')
//     console.log('...')
//
//     setTimeout(function () {
//       console.log('some text4')
//       console.log('...')
//
//       setTimeout(function () {
//         console.log('Some text5')
//       }, 1000)
//     }, 500)
//   }, 500)
// }, 1000)

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Some text2')
    console.log('...')
    resolve()
  }, 1000)
})

promise.then(function () {
  return  new Promise(function (resolve, reject) {
    setTimeout(function () {
      var users = [
        { uid: 'id1', name: 'Some' },
        { uid: 'id2', name: 'Text'}
      ]
      // reject('!!!!!!!!!!!!!!!!!!!')
      console.log('Some text3', users)
      console.log('...')
      resolve(users)
    }, 500)
  })
})
.then(function (dbUsers) {
  return  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Some text4')
      console.log('...')
      var users = dbUsers.map(function (user) {
        return {
          id: user.uid,
          firstName: user.name,
          timestamp: Date.now()
        }
      })
      resolve(users)
    }, 500)
  })
})
.then(function (users) {
  setTimeout(function () {
    console.log('Some text5', users)
  }, 1000)
})
.catch(function (error) {
  console.log(error)
})
// .finally(function () {
//   console.log('!!!')
// })