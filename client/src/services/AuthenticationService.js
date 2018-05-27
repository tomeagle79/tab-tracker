// authenticates user login

// Example of using the AuthenticationService object, with the register method, with credentials as shown
// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123'
// })
import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials) // Here, 'register' means when you go to /register
  }
}
