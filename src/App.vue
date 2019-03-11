<template>
  <div id="app">
    <side-bar />
    <router-view />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar/index.vue'

export default {
  name: 'app',
  components: {
    SideBar,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #b3b3b3;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to right bottom, rgb(18, 18, 18), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%);
}

body {
  margin: 0;
}
</style>
