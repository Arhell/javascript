<template>
  <h2>Second counter {{counter}}</h2>
</template>

<script>
  export default {
    computed: {
      counter () {
        return this.$store.getters.computedCounter
      }
    }
  }
</script>

<style scoped>

</style>