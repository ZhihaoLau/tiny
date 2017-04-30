<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
      <span>A light-weight UI Library for Vue.js</span>
    </header>
    <navigation></navigation>

    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'app',
  components: {
    Navigation
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
#app header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#app header img {
  display: block;
  width: 100px;
}
#app header span {
  display: block;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}
.doc {
  width: 40vw;
  min-width: 400px;
  text-align: left;
}
.doc table {
  display: block;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid #ddd;
  padding: 10px;
}
.doc table th,
.doc table tr {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
