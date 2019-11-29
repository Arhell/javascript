<template>
  <div class="container">
    <form class="pt-3" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">
          Email field is required
        </div>

        <div class="invalid-feedback" v-if="!$v.email.email">
          This email shoud be an email
        </div>

        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">
          This is already exists
        </div>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
                type="password"
                id="password"
                class="form-control"
                :class="{'is-invalid': $v.password.$error}"
                @blur="$v.password.$touch()"
                v-model="password"
        >
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min length of password is {{$v.password.$params.minLength.min}}. Now it is {{password.length}}.
        </div>
      </div>

      <div class="form-group">
        <label for="confirm">Confirm password</label>
        <input
                type="password"
                id="confirm"
                class="form-control"
                :class="{'is-invalid': $v.confirmPassword.$error}"
                @blur="$v.confirmPassword.$touch()"
                v-model="confirmPassword"
        >
        <div class="invalid-feedback" v-if="!$v.password.sameAs">
          Passwords should match
        </div>
      </div>
      <button
              class="btn btn-success"
              type="submit"
              :disabled="$v.$invalid"
      >Submit</button>
    </form>
  </div>
</template>

<script>
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

 export default {
   data () {
     return {
       email: '',
       password: '',
       confirmPassword: ''
     }
   },
   methods: {
     onSubmit () {
       console.log('Email', this.email)
       console.log('Password', this.password)
     }
   },
   validations: {
     email: {
       required,
       email,
       uniqEmail: function (newEmail) {
         if (newEmail === "") return true

         return new Promise((resolve, reject) => {
           setTimeout(() => {
             const value = newEmail !== 'test@test.test'
            resolve(value)
           }, 1000)
         })
       }
     },
     password: {
       minLength: minLength(6)
     },
     confirmPassword: {
       sameAs: sameAs('password')
     }
   }
 }
</script>
