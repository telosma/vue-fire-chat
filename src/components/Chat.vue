<template>
  <div class="chat__container">
    <div class="chat__content ui grid">
      <div class="row">
        <div class="three wide column">
          <main-sidebar></main-sidebar>
        </div>
        <div class="thirteen wide column">
          <app-header></app-header>
          <main-messages></main-messages>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from 'src/router'

  import Header from './common/Header'
  import Footer from './common/Footer'
  import Sidebar from './sidebar/Sidebar'
  import Messages from './messages/Messages'

  export default {
  	components: {
  		AppHeader: Header,
  		AppFooter: Footer,
      MainSidebar: Sidebar,
      MainMessages: Messages,
  	}
  }
</script>

<style scoped>
  .chat__container {
    height: calc(100vh);
  }
  .chat__content {
    height: 100%;
  }
  .ui.grid > .row > .column {
    padding: 0;
  }
</style>
