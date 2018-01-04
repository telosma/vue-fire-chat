<template>
  <header
    class="app-header"
  >
    <div class="ui stackable borderless menu">
      <router-link
        class="item"
        :to="{ name: 'home' }"
        exact
      >Dibo Chat</router-link>
      <div class="item link right">Logout</div>
    </div>
  </header>
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
