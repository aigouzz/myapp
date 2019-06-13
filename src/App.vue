<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-link :to="{name: 'past'}">past</router-link>
    <router-link :to="{name: 'next'}">next</router-link>
    <router-link :to="{name: 'load'}">load</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
    };
  },
  created() {
    this.name = 'gg';
    console.log(this);
    console.log(window);
    console.log(window.performance);
  },
  mounted() {
    console.log(this);
    console.log(window);
    console.log(window.performance);
  },
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
  img{
    display: inline-block;
  }
  #app a{
    display: inline-block;
    width: 100px;
    text-align: center;
  }
</style>
