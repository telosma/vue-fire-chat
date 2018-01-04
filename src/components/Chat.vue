<template>
  <div>
    <AppHeader/>
    <div class="app-content-wrapper">
    </div>
    <AppFooter/>
  </div>
</template>

<script>
  import router from 'src/router'

  import Header from './common/Header'
  import Footer from './common/Footer'

  export default {
  	components: {
  		AppHeader: Header,
  		AppFooter: Footer
  	}
  }
</script>

<style>

</style>
