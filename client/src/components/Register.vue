<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <br>
    <input type="password" name="password" placeholder="password" v-model="password" />
    <br>
    <!-- @click will call the register method from the controller below -->
    <button @click="register">Register</button>
  </div>
</template>

<script>
// Below is the controller
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  // watch: { // this is watching the email input's value. when it changes, it will be logged out to the console
  //   email (value) {
  //     console.log('Email has changed value', value)
  //   }
  // },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
    // register () {
    //   console.log('register button was clicked', this.email, this.password)
    // }
  }
}
</script>
