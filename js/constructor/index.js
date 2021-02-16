const model = [
  {
    type: 'title',
    value: 'Text'
  },
  {
    type: 'text',
    value: 'Text2'
  },
  {
    type: columns,
    value: [
      '123',
      '456',
      '789'
    ]
  }
]

const $site = document.querySelector('#site')

model.forEach(block => {
  let html = ''

  if (block.type === 'title') {
    html = `
      <div class="row">
        <div class="col-sm">
          <h1>${block.value}</h1>
        </div>
      </div>
    `
  } else if (block.type === 'text') {
    html = `
      <div class="row">
        <div class="col-sm">
          <p>${block.value}</p>
        </div>
      </div>
    `
  } else if (block.type === 'columns') {

  }

  $site.insertAdjacentHTML('beforeend', html)
})