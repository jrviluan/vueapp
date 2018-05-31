<template>
  <div id="app">
    <!--<app-header  v-if="$route.name != 'login'"></app-header> -->
   
 	<app-sidebar v-if="$route.name != 'login'"></app-sidebar>
    <router-view></router-view>
    <app-footer></app-footer>
    <ap
  </div>
</template>


<script>
import header from './components/header';
import sidebar from './components/sidebar';
import footer from './components/footer';


export default {
  name: 'App',
  components: {
    'app-header' : header,
    'app-sidebar' : sidebar,
    'app-footer' : footer,
  } 
}
</script>

<style lang="scss">
@import 'assets/css/style.css';
#app {
 
}
</style>