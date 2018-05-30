<template>
  <div id="app">
    <!--<app-header  v-if="$route.name != 'login'"></app-header> -->
   
 	<app-sidebar v-if="$route.name != 'login'"></app-sidebar>
    <router-view></router-view>
  </div>
</template>


<script>
import header from './components/header';
import sidebar from './components/sidebar';

export default {
  name: 'App',
  components: {
    'app-header' : header,
    'app-sidebar' : sidebar,
  },  
}
</script>

<style lang="scss">
@import 'assets/css/style.css';
#app {
 
}
</style>