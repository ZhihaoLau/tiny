<template lang="html">
  <div class="lazy-load-page">
    <p>LazyLoadPage</p>
    <div class="area" @scroll="onScroll">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.
      </p>
      <img src="https://cdn.dribbble.com/users/35877/screenshots/3462035/grace-beziers-dribbble_1x.jpg" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.
      </p>
    </div>
  </div>
</template>

<script>
// import LazyImg from '@/components/LazyImg'
export default {
  name: 'LazyLoadPage',
  methods: {
    onScroll (e) {
      console.log(e.target.scrollTop)
    }
  }
}
</script>

<style lang="css">
.lazy-load-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.area {
  height: 40vh;
  width: 30vh;
  overflow: scroll;
  border: 1px solid #ddd;
}
</style>
