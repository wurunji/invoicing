<template>
  <div id="app">
    <nav-top></nav-top>
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import NavTop from "./components/views/navbar/NavTop";
  import FooterBar from "./components/views/footerbar/FooterBar";

export default {
  name: 'App',
  components:{
    FooterBar,
    NavTop
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
  margin: 0;
  padding: 0;
}
</style>
