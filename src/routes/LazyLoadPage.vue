<template lang="html">
  <div class="lazy-load-page">
    <p>LazyLoadPage</p>
    <div class="area">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/walk-spread-02_1x.png" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/walk-spread-03_1x.png" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/walk-spread-05_1x.png" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/walk-spread-06_1x.png" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
    </div>
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
.area img {
  display: inline-block;
  min-height: 300px;  /* for demo */
  background-color: #eee;
}
</style>
