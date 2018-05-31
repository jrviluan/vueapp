<template>
  <div class="login row">
    <div class="container offset-md-4 col-md-6">
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-60 md-small-size-100 card border-primary">
        <md-card-header>
          <div class="md-title text-center">
            <img src="../assets/images/logo-afreight.png" class="img-fluid">
          </div>
        </md-card-header>

        <md-card-content>
          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>
        </md-card-content>

        <md-card-content>
          <md-field :class="getValidationClass('password')">
            <label for="email">Password</label>
            <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.minlength">Invalid password</span>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending"/></md-progress-bar>

        <md-card-actions class="lg-btn">
          <md-button type="submit" class=" text-white md-button btn-block btn-primary" :disabled="sending">Login</md-button>
        </md-card-actions>
      </md-card>
    </form>
    </div>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        password: null,
        email: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        password: {
          required,
          minLength: minLength(8)
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
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
        this.form.password = null
        this.form.email = null
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
    
          this.$router.push('user');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  .login{
    padding-top: 5rem;
  }
  .img-fluid { 
    height: 8rem; 
  }
  .lg-btn{
    padding-top: 2rem;
  }
</style>