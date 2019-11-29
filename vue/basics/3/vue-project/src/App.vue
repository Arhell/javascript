<template>
  <div>
  <app-car>
    <h2 slot="title">{{carName}}</h2>
    <p slot="text">Lorem ipsum dolor.</p>
  </app-car>
  </div>
</template>

<script>
  import car from './car.vue'

export default {
    data() {
      return {
        carName: 'Ford'
      }
    },
  components: {
    appCar: car
  }
}
</script>

<style scoped>

</style>
