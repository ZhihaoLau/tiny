<template lang="html">
  <div class="lazy-load-page">
    <div class="demo">
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
.lazy-load-page .demo {

  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  height: 50vh;
  border: 1px solid #ddd;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  -webkit-overflow-scrolling: touch;
}
.lazy-load-page .demo img {
  display: inline-block;
  min-height: 300px;  /* for demo */
  background-color: #eee;
}
</style>
