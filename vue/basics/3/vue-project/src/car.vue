<template>
  <div>
    <slot name="title"></slot>
    <hr>
    <hr>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {

}

</script>

<style scoped>
  div {
    border: 1px solid black;
    padding: 10px;
  }
  h2 {
    color: red;
  }
</style>