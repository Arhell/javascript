export default {
  data () {
    return {
      searchName: '',
      names: ['Mazda', 'Adio', 'Ford', 'Reno']
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  },
  create() {
    console.log('created')
  }
}