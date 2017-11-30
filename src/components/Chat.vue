<template>
  <div>
    Chat
  </div>
</template>

<script>
  import router from 'src/router'
  export default {
    beforeRouteEnter (to, from, next) {
      router.go({ name: 'login' })
    }
  }
</script>

<style lang="scss">

</style>
