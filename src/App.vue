<template>
  <div id="app">
     <img src="./assets/logo.png" alt="">
    <router-view></router-view>

  </div>
</template>

<script>
export default {
    name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

@import './css/style.css';

</style>
