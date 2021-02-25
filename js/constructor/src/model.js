import image from "./assets/img.jpg"

export const model = [
  {
    type: 'title',
    value: 'Text',
    options: {
      tag: 'h2',
      styles: {
        background: 'red',
        color: '#fff',
        padding: '1rem',
        'text-align': 'center'
      }
    }
  },
  {
    type: 'text',
    value: 'Text2'
  },
  {
    type: 'columns',
    value: [
      '123',
      '456',
      '789'
    ]
  },
  {
    type: 'image', value: image
  }
]