console.log('Some text')
console.log('...')

setTimeout(function () {
  console.log('Some text')
  console.log('...')

  setTimeout(function () {
    console.log('some text')
    console.log('...')

    setTimeout(function () {
      console.log('some text')
      console.log('...')

      setTimeout(function () {
        console.log('Some text')
      }, 1000)
    }, 500)
  }, 500)
}, 1000)