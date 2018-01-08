<template>
  <div class="ui stackable borderless menu">
    <router-link
      class="item"
      :to="{ name: 'home' }"
      exact
    >Dibo Chat</router-link>
  </div>
</template>

<style scoped>
  .ui.menu {
    font-size: 1.15rem;
    white-space: nowrap;
    .item {
      color: black;
    }
  }
</style>

<script>
export default {
}
</script>
