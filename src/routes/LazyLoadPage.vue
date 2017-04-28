<template lang="html">
  <div class="lazy-load-page">
    <p>LazyLoadPage</p>
    <lazy-img-container class="area">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <img src="https://cdn.dribbble.com/users/25686/screenshots/3462705/dribbble4_1x.jpg" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <lazy-img
        dataSrc="https://cdn.dribbble.com/users/35877/screenshots/3462035/grace-beziers-dribbble_1x.jpg"
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <img src="https://cdn.dribbble.com/users/203/screenshots/3462390/dribbble.vwmarks_1x.png" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <img src="https://cdn.dribbble.com/users/164367/screenshots/3462970/good-grip-athletic-chalk_1x.png" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
    </lazy-img-container>
  </div>
</template>

<script>
import LazyImg from '@/components/LazyImg'
import LazyImgContainer from '@/components/LazyImgContainer'
export default {
  name: 'LazyLoadPage',
  components: {
    LazyImgContainer,
    LazyImg
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
  height: 50vh;
  width: 60vw;
  border: 1px solid #ddd;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
