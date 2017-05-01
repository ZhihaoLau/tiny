<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
      <span>A light-weight UI Library for Vue.js</span>
    </header>
    <navigation></navigation>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer>
      Released under the MIT License Copyright © 2017 <a href="http://www.lozio.me">Zio Lau</a>
    </footer>
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
.content {
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  max-width: 860px;
  margin: 0 auto;
}
.doc {
  width: 100%;
}
.hljs {
  padding: 15px !important;
  font-size: 14px;
}
footer {
  text-align: center;
  padding: 50px 0;
  color: black;
}
footer a {
  color: #6D95EE;
  text-decoration-line: none;
}
</style>
