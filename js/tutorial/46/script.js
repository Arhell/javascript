const createPost = (title, text = 'default', date = new Date().toLocaleDateString()) => {
  return {title, text, date}
}

const post = createPost('Some text', 'text', '2020')
console.log(post)