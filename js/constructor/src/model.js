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
    value: 'Text2',
    options: {
      styles: {
        padding: '1rem'
      }
    }
  },
  {
    type: 'columns',
    value: [
      '123',
      '456',
      '789'
    ],
    options: {
      styles: {
        padding: '2rem',
        color: 'red'
      }
    }
  },
  {
    type: 'image',
    value: image,
    options: {
      styles: {
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center'
      },
      imageStyles: {
        width: '500px',
        height: 'auto'
      },
      alt: 'alt'
    }
  }
]