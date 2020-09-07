export function renderPost(post, options= {}) {
  const tag = post.type === 'news'
    ? '<li class="tag tag-blue tag-rounded">News</li>'
    : '<li class="tag tag-rounded">None</li>'

  const button = (JSON.parse(localStorage.getItem('favorite')) || []).includes(post.id)
    ? `<button class="button-round button-small button-danger" data-id="${post.id}">Delete</button>`
    : `<button class="button-round button-small button-primary" data-id="${post.id}">Save</button>`

  return `
    <div class="panel">
      <div class="panel-head">
        <p class="panel-title">${post.title}</p>
        <ul class="tags">
          ${tag}
        </ul>
      </div>
      <div class="panel-body">
        <p class="multi-line">${post.fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${post.date}</small>
        ${options.withButton ? button : ''}
      </div>
    </div>
  `
}