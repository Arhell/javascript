console.log('Some text1')
console.log('...')

setTimeout(function () {
  console.log('Some text2')
  console.log('...')

  setTimeout(function () {
    console.log('some text3')
    console.log('...')

    setTimeout(function () {
      console.log('some text4')
      console.log('...')

      setTimeout(function () {
        console.log('Some text5')
      }, 1000)
    }, 500)
  }, 500)
}, 1000)