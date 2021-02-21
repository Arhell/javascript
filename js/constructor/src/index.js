import { model } from "./model";
import { title, text, columns, image } from "./templates";
import "./styles/main.css"

const $site = document.querySelector('#site')

model.forEach(block => {
  let html = ''

  if (block.type === 'title') {
    html = title(block)
  } else if (block.type === 'text') {
    html = text(block)
  } else if (block.type === 'columns') {
    html = columns(block)
  } else if (block.type === 'image') {
    html = image(block)
  }

  $site.insertAdjacentHTML('beforeend', html)
})
