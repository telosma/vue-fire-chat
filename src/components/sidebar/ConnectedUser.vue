<template>
  <div class="connectedUser__container">
    <div class="ui items">
      <div class="item">
        <div class="ui mini image">
          <img :src="currentUser.photoURL" alt="">
        </div>
        <div class="middle aligned content">
          <div class="ui container">
            <div class="ui inverted header">
              {{ currentUser.displayName }}
            </div>
          </div>
        </div>
        <div class="extra">
          <button class="ui circular icon right floated button" @click="logout">
            <i class="icon sign out"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'connected-user',

    computed: {
      ...mapGetters(['currentUser'])
    },

    methods: {
      logout () {
        firebase.auth().signOut()
        this.$store.dispatch("setUser", null)
        this.$router.push({ 'name': 'login' })
      }
    }
  }
</script>

<style scoped>
  .connectedUser__container {
    font-size: 1rem;
    font-weight: 900;
    padding: 0 1rem;
    color: #fff;
    border-bottom: 1px solid #4d394b;
    background-color: #180719;
    position: relative;
    z-index: 50;
    flex-basis: 61px;
    flex-shrink: 0;
  }
</style>
