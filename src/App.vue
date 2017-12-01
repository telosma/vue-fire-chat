<template>
  <div id="app" class="ui container">
    <router-view></router-view>
  </div>
</template>

<script>
  const inBrowser = typeof window !== 'undefined'
  if (inBrowser) {
    var semantic = require('semantic-ui-css/semantic.js')
  }
</script>

<style>
  body {
    background-color: #DADADA;
    margin-left: calc(100vw - 100%);
  }
</style>
