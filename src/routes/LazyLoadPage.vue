<template lang="html">
  <div class="lazy-load-page">
    <p>A simple implement of image lazy load, aviable not only in window's viewport, but also any block. </p>
    <h2>Sample:</h2>
    <p>Lazy-load when component appear in a block element:</p>
    <lazy-img-container class="demo">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/walk-spread-02_1x.png" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/walk-spread-03_1x.png" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/walk-spread-05_1x.png" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/walk-spread-06_1x.png" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
    </lazy-img-container>

    <br><br>
    <p>Mutiple block element container in window's viewport are supported.</p>
    <div class="mutiple-col">
      <lazy-img-container class="demo">
        <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/call_your_rep_mark_1x.png" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
        <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/do-better-postcards.gif" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
        <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/do-better-print_1x.png" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
        <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/go-vote-2_1x.png" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
        <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/go-vote-3_1x.png" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
      </lazy-img-container>

      <lazy-img-container class="demo">
        <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/call_your_rep_mark_1x.png" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
        <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/do-better-postcards.gif" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
        <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/do-better-print_1x.png" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
        <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/go-vote-2_1x.png" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur! Nesciunt, ipsa quos. Atque illum impedit et tempora laudantium, placeat, cumque voluptates vel qui adipisci ipsa minima natus saepe, quo.</p>
        <div class="useless-div">
          <div class="another-useless-div">
            <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/go-vote-3_1x.png" />
          </div>
        </div>
      </lazy-img-container>
    </div>

    <br><br>
    <p>Lazy-load in window's viewport: </p>
    <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/nodapl-print_1x.png" />
    <lazy-img dataSrc="http://veryawesomeproject.oss-cn-shenzhen.aliyuncs.com/do-better-print_1x.png" />
    <div class="doc" v-html="doc" v-highlightjs></div>
  </div>
</template>

<script>
import marked from 'marked'
import README from '@/components/LazyImg/README.md'
import LazyImg from '@/components/LazyImg'
import LazyImgContainer from '@/components/LazyImg/src/LazyImgContainer'
export default {
  name: 'LazyLoadPage',
  components: {
    LazyImgContainer,
    LazyImg
  },
  data () {
    return {
      doc: marked(README)
    }
  }
}
</script>

<style lang="css">
.lazy-load-page {
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
.lazy-load-page .mutiple-col {
  display: flex;
  justify-content: space-between;
}
.lazy-load-page .mutiple-col .demo {
  width: 48%;
}
.lazy-load-page .demo img {
  display: inline-block;
  min-height: 300px;  /* for demo */
  background-color: #eee;
}
.mutiple-col .demo img {
  width: 100%;
  min-height: 100px  /* for demo */;
}
</style>
