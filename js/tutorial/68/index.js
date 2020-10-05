console.log('Data')

// setTimeout(() => {
//   console.log('Data')
//
//   const backData = {
//     server: 'server',
//     port: 1000,
//     status: 'true'
//   }
//
//   setTimeout(() => {
//     backData.modified = true
//     console.log('Data', backData)
//   },2000)
// },1000)

const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Data')

    const backData = {
      server: 'server',
      port: 1000,
      status: 'true'
    }
    resolve(backData)
  },2000)
})

p.then(data => {
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true
      resolve(data)
    },2000)
  })
}).then(clientData => {
  console.log('Client data', clientData)
  clientData.fromPromise = true
  return clientData
}).then(data => {
  console.log("Mod data", data)
}).catch(err => console.error('Error', err))
  .finally(() => {
    console.log('Finally')
  })


const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(),ms)
  })
}

sleep(2000).then(() => console.log('after 2 sec'))

Promise.all([sleep(2000), sleep(4000)])
  .then(() => {
    console.log('All')
  })

Promise.race([sleep(2000), sleep(4000)])
  .then(() => {
    console.log('Race')
  })
