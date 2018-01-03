<template>
    <div class="ui middle aligned center aligned grid">
      <div class="column login-wrapper">
        <h2 class="ui teal image header">
          <div class="content">
            {{ $t("login.title") }}
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="email" name="username" v-model="username" :placeholder="$t('login.input_text.email')">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" v-model="password" :placeholder="$t('login.input_text.password')">
              </div>
            </div>
            <div class="ui fluid large teal button" @click.prevent="login" :class="{ 'loading': isLoading }">{{ $t("login.buttons.login") }}</div>
          </div>
          <div :class="[!!errors.length ? 'visible' : '', 'ui error message']">
            <ul class="list">
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </div>
        </form>
        <div class="ui message">
          {{ $t("login.messages.none_account") }} <router-link :to="{ name: 'register' }">{{ $t("login.messages.register") }}</router-link>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      username: '',
      password: '',
      isLoading: false,
      errors: [],
    }),
    methods: {
      login() {
        this.errors = []
        if (this.isFormValid()) {
          this.isLoading = true
          console.log('Loging')
          firebase.auth().signInWithEmailAndPassword(this.username, this.password)
          .then((user) => {
            this.$store.dispatch('setUser', user)
            this.isLoading = false
            this.$router.push('/')
          }).catch((error) => {
            this.errors.push(error.message)
            this.isLoading = false
          })
        }
      },
      isFormValid() {
        if (this.username.length > 0 && this.password.length > 0) {
          return true
        }

        return false
      }
    }
  }
</script>

<style scoped>
  .grid {
    height: 100vh;
  }
  .login-wrapper {
    max-width: 450px;
  }
</style>
