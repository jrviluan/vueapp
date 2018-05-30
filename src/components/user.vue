<template>
  <div class="container content">
    <nav class="navbar navbar-default">
        <div class="container-fluid">

            <div class="navbar-header">
                <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                    <i class="glyphicon glyphicon-align-left"></i>
                    <span>Toggle Sidebar</span>
                </button>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <md-button class="md-raised md-primary" v-on:click="addUser">Add User</md-button>

    <div v-if="isActive">
      <form novalidate class="md-layout">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">Users</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('firstName')">
                  <label for="first-name">First Name</label>
                  <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                  <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('lastName')">
                  <label for="last-name">Last Name</label>
                  <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                  <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('gender')">
                  <label for="gender">Gender</label>
                  <md-select name="gender" v-model="form.gender" md-dense :disabled="sending">
                    <md-option disabled>- Please Select -</md-option>
                    <md-option value="M">M</md-option>
                    <md-option value="F">F</md-option>
                  </md-select>
                  <span class="md-error">The gender is required</span>
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('age')">
                  <label for="age">Age</label>
                  <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.age.required">The age is required</span>
                  <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
                </md-field>
              </div>
            </div>

            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
              <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
              <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            </md-field>

            <md-field :class="getValidationClass('password')">
              <label for="password">Password</label>
              <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password" :disabled="sending" />
              <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
              <span class="md-error" v-if="!$v.form.password.minLength">The password must be atleast 8 characters</span>
            </md-field>

            <md-field :class="getValidationClass('cpassword')">
              <label for="cpassword">Confirm Password</label>
              <md-input type="password" name="cpassword" id="cpassword" autocomplete="cpassword" v-model="form.cpassword" :disabled="sending" />
              <span class="md-error" v-if="!$v.form.cpassword.sameAsPassword">The confirm password must be same with password</span>
            </md-field>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" /></md-progress-bar>

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending" v-on:click.prevent="validateUser">Create user</md-button>
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
      </form>
    </div>
    <div v-else-if="!isActive">
        <app-user></app-user>
    </div>

  </div>
</template>

<script>
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
          this.$http.post('https://vue-tutorial-5d9a4.firebaseio.com/posts.json', this.form).then(function(data){
          console.log(data)
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
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>