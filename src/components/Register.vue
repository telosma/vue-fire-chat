<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui teal image header">
        <div class="content">
          {{ $t('register.title') }}
        </div>
      </h2>
      <form class="ui large form" :class="{ error: hasErrors }">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="name" v-model.trim="name" :placeholder="$t('register.input_text.name')">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="mail icon"></i>
              <input type="email" name="email" v-model.trim="email" :placeholder="$t('register.input_text.mail')">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" v-model.trim="password" :placeholder="$t('register.input_text.password')">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password_confirmation" v-model.trim="password_confirmation" :placeholder="$t('register.input_text.confirm_password')">
            </div>
          </div>
          <div class="ui fluid large teal button" @click.prevent="register">{{ $t('register.buttons.register') }}</div>
        </div>
        <div class="ui error message" v-if="hasErrors">
          <p v-for="error in errors">{{ error }}</p>
        </div>
      </form>
      <div class="ui message">
        {{ $t('register.messages.exist_account') }} <router-link :to="{ name: 'login' }">{{ $t('login.buttons.login') }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import md5 from 'md5'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data: () => ({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: [],
      usersRef: firebase.database().ref('users')
    }),

    computed: {
      hasErrors () {
        return this.errors.length > 0
      },

      ...mapGetters([
        'currentUser',
      ])
    },

    methods: {
      ...mapActions([
        'setUser'
      ]),

      register () {
        this.errors = []

        if (this.isFormValid()) {
          console.log('register')
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
              console.log('register success')
              user.updateProfile({
                displayName: this.name,
                photoUrl: "http://www.gravatar.com/avatar/" + md5(user.email) + "?d=identicon",
              }).then(() => {
                console.log('setUser')
                this.saveUserToUsersRef(user)
                this.setUser(user)
                this.$router.push('/')
                console.log('Done!')
              }, (error) => {
                console.log(error)
                this.errors.push(error.message)
              })
            })
            .catch(error => {
              console.log(error)
              this.errors.push(error.message)
            })
        }
      },

      isEmpty () {
        if (this.name.length === 0 || this.password.length === 0
            || this.email.length === 0 || this.password_confirmation === 0) {
          return true
        }
        return false
      },

      passwordInvalid () {
        if (this.password.length < 6 || this.password_confirmation.length < 6) {
          this.errors.push('Do dai password phai tu 6 ky tu tro len')
          return true
        }
        if (this.password !== this.password_confirmation) {
          this.errors.push('Xac nhan password khong thanh cong')
          return true
        }

        return false
      },

      isFormValid () {
        console.log('aa')
        if (this.isEmpty()) {
          this.errors.push('Khong duoc de trong thong tin')
          return false
        }

        if (this.passwordInvalid()) {
          return false
        }

        return true
      },

      saveUserToUsersRef (user) {
        this.usersRef.child(user.uid).set({
          name: user.displayName,
          avatar: user.photoURL
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .grid {
    height: 100vh;
  }
  .column {
    max-width: 450px;
  }
</style>
