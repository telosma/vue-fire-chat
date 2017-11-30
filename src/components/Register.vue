<template>
  <div class="container">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui teal image header">
          <div class="content">
            Register new account
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="name" v-model="name" placeholder="Your name">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="mail icon"></i>
                <input type="email" name="email" v-model="email" placeholder="E-mail address">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" v-model="password" placeholder="Password">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password_confirmation" v-model="password_confirmation" placeholder="Confirm password">
              </div>
            </div>
            <div class="ui fluid large teal button" @click.prevent="register">Register</div>
          </div>
          <div class="ui error message"></div>
        </form>
        <div class="ui message">
          Already has account <router-link :to="{ name: 'login' }">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }),
    methods: {
      register () {
        console.log('register')
      }
    }
  }
</script>

<style lang="scss">
  body {
    background-color: #DADADA;
  }
  body {
    .grid {
      height: 100%;
    }
  }
  .image {
    margin-top: -100px;
  }
  .column {
    max-width: 450px;
  }
</style>
