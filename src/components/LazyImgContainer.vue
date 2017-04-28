<template lang="html">
  <div class="lazy-img-container" @scroll="onScroll">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LazyImgContainer',
  methods: {
    onScroll (e) {
      // console.log(e.target.scrollTop)
    }
  }
}
</script>

<style lang="css">
.lazy-img-container {
  position: relative;
}
</style>
