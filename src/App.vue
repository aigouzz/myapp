<script src="../dist/static/js/app.8ceef173f80d80a2e34a.js"></script>
<script src="../dist/static/js/vendor.e6fd53d781ab289523c8.js"></script>
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import hello from './components/HelloWorld.vue';
import past from './components/Past/index.vue';
console.log(hello);
export default {
  name: 'App',
  components: {
    hello,
    past,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
