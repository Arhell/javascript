import image from "./assets/img.jpg"
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
  new TitleBlock( 'Text',{
    tag: 'h2',
    styles: {
      background: 'red',
      color: '#fff',
      padding: '1rem',
      'text-align': 'center'
    }
  }),

  new TextBlock('Text', {
    styles: {
      padding: '1rem'
    }
  }),

  new ColumnsBlock(
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

  new ImageBlock( image, {
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