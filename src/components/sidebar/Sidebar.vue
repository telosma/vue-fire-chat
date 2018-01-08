<template>
  <div class="sidebar">
    <h1 class="ui inverted center aligned header">#Dibo chit#</h1>
    <sidebar-connected-user></sidebar-connected-user>
  </div>
</template>

<script>
  import ConnectedUser from './ConnectedUser'
  export default {
    name: 'sidebar',
    components: { SidebarConnectedUser: ConnectedUser }
  }
</script>

<style scoped>
  .sidebar {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    padding: 10px;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #4d394b;
    z-index: 201;
    visibility: visible;
    box-sizing: border-box;
    flex-direction: column;
    height: 100%;
    min-width: 200px;
  }
</style>
