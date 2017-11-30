<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  const inBrowser = typeof window !== 'undefined'
  if (inBrowser) {
    var semantic = require('semantic-ui-css/semantic.js')
  }
</script>

<style lang="scss">
</style>
