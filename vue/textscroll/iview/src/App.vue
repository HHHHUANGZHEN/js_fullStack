<template>
  <div id="app">
    <father-list />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import father from './components/view/demo1/father'
export default {
  name: 'App',
  components: {
    'father-list': father
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html, body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
