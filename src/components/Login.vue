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
            <div class="ui fluid large teal button" @click.prevent="login">{{ $t("login.buttons.login") }}</div>
          </div>
          <div class="ui error message"></div>
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
      password: ''
    }),
    methods: {
      login () {
        console.log('login')
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
