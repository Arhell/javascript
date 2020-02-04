const USER_PER_PAGE = 10

export class Search {
  setCurrentPage(pageNumber) {
    this.currentPage = pageNumber
  }

  setUsersCount(count) {
    this.usersCount = count
  }

  constructor(view) {
    this.view = view

    this.view.searchInput.addEventListener('keyup', this.debounce(this.loadUsers.bind(this)), 500)
    this.view.loadMoreBtn.addEventListener('click', this.loadUsers.bind(this))
    this.currentPage = 1
    this.usersCount = 0
  }

  async loadUsers() {
    const searchValue = this.view.searchInput.value
    let totalCount
    let users
    if(searchValue) {
      return await fetch(`https://api.github.com/search/users?q=${searchValue}&per_page=${USER_PER_PAGE}&page=${this.currentPage}`)
        .then(
          (response) => {
            if (response.ok) {
              this.setCurrentPage(this.currentPage + 1)
              response.json().then(response => {
                users = response.items
                totalCount = response.total_count
                this.setUsersCount(this.usersCount + response.items.length)
                this.view.toggleLoadMoreBtn(totalCount > USER_PER_PAGE && this.currentPage !== totalCount);
                users.forEach(user => this.view.createUser(user))
              })
            } else {

            }
          })
    } else {
      this.clearUsers()
    }
  }

  clearUsers() {
    this.view.usersList.innerHTML = ''
  }

  debounce(func, wait, immediate) {
    let timeout
    return function () {
      const context = this, args = arguments
      const later = function () {
        timeout = null
        if(!immediate) func.apply(context, args)
      }

      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }
}