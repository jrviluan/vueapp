import userList from './userList'
import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs
} from 'vuelidate/lib/validators'

export default {
  components: {
          'app-user': userList
  },
  name: 'FormValidation',
  mixins: [validationMixin],
  data: () => ({
    isActive: false,
    form: {
      firstName: null,
      lastName: null,
      gender: null,
      age: null,
      email: null,
      password: null,
      cpassword: null,
    },
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      age: {
        required,
        maxLength: maxLength(3)
      },
      gender: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      cpassword: {
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    addUser(){
          this.isActive = !this.isActive;
        // some code to filter users
    },
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form.firstName = null
      this.form.lastName = null
      this.form.age = null
      this.form.gender = null
      this.form.email = null
      this.form.password = null
      this.form.cpassword = null
    },
    saveUser () {
        this.$http.post('https://vue-tutorial-5d9a4.firebaseio.com/user.json', this.form).then(function(data){
        this.sending = true;
      });
    },
    validateUser () {

      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.saveUser()
      }
    }
  }
}