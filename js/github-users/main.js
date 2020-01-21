class View {
  constructor() {
    this.app = document.getElementById('app')

    this.title = document.createElement('h1', 'title')
    this.title.textContent = 'Github search users'


    this.searchWrapper = this.createElement('div', 'serach-wrapper')
    this.searchInput = this.createElement('input', 'serach-input')
    this.searchCounter = this.createElement('span', 'counter')

    this.searchWrapper.append(this.searchInput)
    this.searchWrapper.append(this.searchCounter)

    this.usersWrapper = this.createElement('div', 'users-wrapper')
    this.usersList = this.createElement('ul', 'users-list')
    this.usersWrapper.append(this.usersList)

    this.main = this.createElement('div', 'main')
    this.main.append(this.usersWrapper)


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
    userElemet.innerHTML = `<img class="user-avatar" src="${userData.avatar_url}" alt="${userData.login}">
                            <span class="user-name">${userData.login}</span>`
    this.usersList.append(userElemet)
  }
}

class Search {
  constructor(view) {
    this.view = view

    this.view.searchInput.addEventListener('keyup', this.serachUsers.bind(this))
  }

  async serachUsers() {
    return await fetch(`https://api.github.com/search/users?q=${this.view.searchInput.value}`)
      .then(
        (response)=> {
          if(response.ok) {
            response.json().then(response => {
              response.items.forEach(user => this.view.createUser(user))
            })
          } else {

          }
        })
  }


}

new Search(new View())

