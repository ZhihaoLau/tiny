<template>
  <nav>
    <ul>
      <li><router-link to="/scrollbar">1. ScrollBar</router-link></li>
      <li><router-link to="/checklist">2. CheckList</router-link></li>
      <li><router-link to="/lazyload">3. LazyLoad</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #6D95EE;
  text-decoration: none;
}
.router-link-active {
  font-weight: bold;
  text-decoration-line: underline;
}
</style>
