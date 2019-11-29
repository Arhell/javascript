<template>
  <div class="container text-center pt-5">
    <h1>{{title}}</h1>
    <hr>
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <hr>
    <app-actions></app-actions>
  </div>
</template>

<script>
  import Counter from './Counter'
  import Actions from './Actions'
  import SecondCounter from './SecondCounter'

export default {
  components: {
    appCounter: Counter,
    appActions: Actions,
    appSecondCounter: SecondCounter
  },
  computed: {
    title () {
      return this.$store.getters.title
    }
  }
}
</script>

<style scoped>

</style>
