import image from "./assets/img.jpg"
import {Block} from './classes/blocks'

export const model = [
  new Block('title', 'Text',{
    tag: 'h2',
    styles: {
      background: 'red',
      color: '#fff',
      padding: '1rem',
      'text-align': 'center'
    }
  }),

  new Block('title','Text', {
    styles: {
      padding: '1rem'
    }
  }),

  new Block('columns',
    [
          '123',
          '456',
          '789'
    ],
{
        styles: {
          padding: '2rem',
          color: 'red'
        }
    }),

  new Block('image', image, {
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
  })
]