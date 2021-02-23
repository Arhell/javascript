import { model } from "./model";
import { templates } from "./templates";
import "./styles/main.css"

const $site = document.querySelector('#site')

model.forEach(block => {

  const toHtml = templates[block.type]
  if(toHtml) {
    $site.insertAdjacentHTML('beforeend', toHtml(block))
  }
  
})
