export class View {
  constructor(api) {
    this.app = document.getElementById('app')
    this.api = api

    this.title = this.createElement('h1', 'title')
    this.title.textContent = 'Github search users'


    this.searchWrapper = this.createElement('div', 'search-wrapper')
    this.searchInput = this.createElement('input', 'search-input')
    this.searchCounter = this.createElement('span', 'counter')

    this.searchWrapper.append(this.searchInput)
    this.searchWrapper.append(this.searchCounter)

    this.usersWrapper = this.createElement('div', 'users-wrapper')
    this.usersList = this.createElement('ul', 'users-list')
    this.userWrapper = this.createElement('div','user-info')
    this.usersWrapper.append(this.usersList)

    this.main = this.createElement('div', 'main')
    this.main.append(this.usersWrapper)
    this.main.append(this.userWrapper)

    this.loadMoreBtn = this.createElement('button', 'btn')
    this.loadMoreBtn.textContent = 'Load more'
    this.loadMoreBtn.style.display = 'none'
    this.usersWrapper.append(this.loadMoreBtn)


    this.app.append(this.title)
    this.app.append(this.searchWrapper)
    this.app.append(this.main)
  }

  createElement(elTag, elTagClass) {
    const el = document.createElement(elTag)
    if(elTagClass) {
      el.classList.add(elTagClass)
    }
    return el
  }

  createUser(userData) {
    const userElemet = this.createElement('li', 'user-item')
    userElemet.addEventListener('click', () => this.showUserdata(userData))
    userElemet.innerHTML = `<img class="user-avatar" src="${userData.avatar_url}" alt="${userData.login}">
                            <span class="user-name">${userData.login}</span>`
    this.usersList.append(userElemet)
  }

  showUserdata(userData) {
    const userEl = this.createElement('div', 'user')
    this.userWrapper.innerHTML = ''
    this.api.loadUserData(userData.login)
      .then(res => {
        const [following, followers, repos] = res
        const followingList = this.createDataList(following, 'Following')
        const followersList = this.createDataList(followers, 'Followers')
        const reposList = this.createDataList(repos, 'Repos')

        userEl.innerHTML = `<img src="${userData.avatar_url}" alt="${userData.login}">
                            <h2>${userData.login}</h2>>
                            ${followingList}
                            ${followersList}
                            ${reposList}`
    })

    this.userWrapper.append(userEl)
  }

  createDataList(list, title) {
    const block = this.createElement('div', 'user-block')
    const titleTag = this.createElement('h3', 'user-block-title')
    const listTag = this.createElement('ul', 'user-list')
    titleTag.textContent = title

    list.forEach(item => {
      const el = this.createElement('li', 'user-list-item')
      el.innerHTML = `<a href="${item.html_url}">${item.login ? item.login : item.name}</a>`

      listTag.append(el)
    })

    block.append(titleTag)
    block.append(listTag)

    return block.innerHTML
  }

  toggleLoadMoreBtn(show) {
    this.loadMoreBtn.style.display = show ? 'block' : 'none'
  }

  setCounterMessage(message) {
    this.searchCounter.textContent = message
  }
}