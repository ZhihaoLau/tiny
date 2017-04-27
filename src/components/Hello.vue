<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/scrollbar">1. 定义滚动条组件</router-link>
      </li>
      <li>
        <router-link to="/checklist">2. 多选框组件</router-link>
      </li>
      <li>
        <router-link to="/lazyload">3. 图片懒加载组件</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  color: #42b983;
}
</style>
