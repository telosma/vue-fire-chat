<template>
  <div class="container">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui teal image header">
          <div class="content">
            Log-in to your account
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="email" name="username" v-model="username" placeholder="E-mail address">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" v-model="password" placeholder="Password">
              </div>
            </div>
            <div class="ui fluid large teal button" @click.prevent="login">Login</div>
          </div>
          <div class="ui error message"></div>
        </form>
        <div class="ui message">
          New to us? <router-link :to="{ name: 'register' }">Register</router-link>
        </div>
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
