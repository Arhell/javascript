import { row, col, css } from "./utility";

function title(block) {
  const {tag = "h1", styles} = block.options
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
  return row(col(`<p>${block.value}</p>`))
}

function columns(block) {
  const html = block.value.map(col).join('')

  return row(html)
}

function image(block) {
  return row(`<img src="${block.value}">`)
}

export const templates = {
  title,
  text,
  image,
  columns
}