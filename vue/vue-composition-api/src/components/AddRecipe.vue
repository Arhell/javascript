<template>
  <form class="form" @submit.prevent="submit">
    <h1>Добавить рецепт</h1>
    <div v-if="visible">
      <div class="input">
        <input type="text" placeholder="Название рецепта" v-model="title">
      </div>
      <div class="input">
        <input type="text" placeholder="Описание рецепта" v-model="description">
      </div>
    </div>

    <div class="buttons">
      <button class="btn" type="submit" :disabled="!valid">Создать</button>
      <button class="btn secondary" type="button" @click="toggle">
        {{ visible ? 'Убрать' : 'Показать' }} форму
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      title: '',
      description: '',
      visible: true
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    },
    submit() {
      const recipe = {
        title: this.title.trim(),
        description: this.description.trim(),
        id: Date.now().toString()
      }

      this.title = this.description = ''

      this.onAdd(recipe)
    }
  },
  computed: {
    valid() {
      return this.title.trim() && this.description.trim()
    }
  }
}
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #eee;
    margin-bottom: 1rem;
  }

  .form h1 {
    margin: 0;
    margin-bottom: 1rem;
  }

  .input {
    margin-bottom: 1rem;
  }

  .input input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 8px;
    width: 400px;
  }

  .buttons {
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
</style>
