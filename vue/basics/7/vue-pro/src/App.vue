<template>
  <div>
    <h2>From inputs</h2>
    <input type="text" v-model.lazy="name">

    <p> {{name}}</p>

    <hr>

    <textarea v-model="textarea"></textarea>
    <p>{{textarea}}</p>

    <hr>

    <label>
      <input type="checkbox" value="Instagram" v-model="social"> Instagram
    </label>

    <label>
      <input type="checkbox" value="Github" v-model="social"> Github
    </label>

    <label>
      <input type="checkbox" value="Youtube" v-model="social"> Youtube
    </label>

    <ul>
      <li v-for="s in social">{{s}}</li>
    </ul>

    <hr>

    <label>
      <input type="radio" value="Instagram" v-model="socialRadio"> Instagram
    </label>

    <label>
      <input type="radio" value="Github" v-model="socialRadio"> Github
    </label>

    <label>
      <input type="radio" value="Youtube" v-model="socialRadio"> Youtube
    </label>

    <p>{{socialRadio}}</p>

    <hr>

    <select v-model="defaultSocialSelect">
      <option v-for="a in socialSelect">{{a}}</option>
    </select>

    <p>{{defaultSocialSelect}}</p>

    <hr>

    <input type="text" v-model.number="age">
    <p>{{age}}</p>

    <hr>

    <app-onoff v-model="switched"></app-onoff>

    <div>
      <h3 v-if="switched">Component is enabled</h3>
      <h3 v-else>Component is disabled</h3>
    </div>
  </div>
</template>

<script>
  import Onoff from './Onoff.vue'
export default {
  data () {
    return {
      name: 'default',
      textarea: 'default text',
      social: ['Github'],
      socialRadio: 'Github',
      socialSelect:['Instagram', 'Github', 'Yuotube'],
      defaultSocialSelect: 'Github',
      age: 20,
      switched: false
    }
  },
  watch: {
    age (value) {
      console.log(value)
      console.log(typeof value)
    }
  },
  components: {
    appOnoff: Onoff
  }
}
</script>

<style scoped>
  textarea {
    width: 400px;
    height: 100px;
  }
  p {
    white-space: pre;
  }
</style>
