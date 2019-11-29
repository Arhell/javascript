<template>
  <div>
    <h1>Car id {{id}}</h1>

    <button class="btn btn-sm btn-light mb-2" @click="goBackToCars">Back</button>
    <hr>

    <router-link
            class="btn btn-info mt-2"
            tag="button"
            :to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2000}, hash: '#scroll'}"
    >Full info</router-link>
    <hr>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // id: this.$router.currentRoute.params['id']
        id: this.$route.params['id']
      }
    },
    methods: {
      goBackToCars () {
        this.$router.push('/cars')
      }
    },
    watch: {
      $route (toR, fromR) {
        this.id = toR.params['id']
      }
    },
    beforeRouteLeave (to, from, next) {
      console.log("beforeRouteLeave")
      if(window.confirm("Are you sure you want to leave?")) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>

<style scoped>

</style>