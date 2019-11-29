<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">New ad</h1>
        <v-form
          ref="form"
          v-model="valid"
          validation
          class="mb-3"
        >
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-text-field
            name="description"
            label="Ad description"
            type="text"
            v-model="description"
            multi-line
            :rules="[v => !!v || 'Description is required']"
          ></v-text-field>
        </v-form>

        <v-layout row class="mb-3">
          <v-flex>
            <v-btn class="warning" @click="triggerUpload">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <input
              ref="fileInput"
              type="file"
              style="display: none"
              accept="image/*"
              @change="onFileChange"
            >
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <img :src="imageSrc" height="100" alt="" v-if="imageSrc">
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <v-switch
                    v-model="promo"
                    :label="'Add to promo?'"
                    color="primary"
            ></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loading"
              :disabled="!valid || !image || loading"
              class="success"
              @click="createAd"
            >Create ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false,
        image: null,
        imageSrc: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate() && this.image) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            image: this.image
          }
          this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/list')
            })
            .catch(() => {})
        }
      },
      triggerUpload () {
        this.$refs.fileInput.click()
      },
      onFileChange (event) {
        const file = event.target.files[0]

        const reader = new FileReader()
        reader.onload = e => {
          this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
      }
    }
  }
</script>

<style scoped>

</style>