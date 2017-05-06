<template lang="html">
  <div class="scroll-bar">
    <ul class="the-only-child">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import IScroll from 'iscroll'
const iscrollOption = {
  scrollbars: 'custom',
  mouseWheel: true,
  interactiveScrollbars: true,
  fadeScrollbars: true,
  bounce: false,
  disablePointer: true,
  disableTouch: true
}
export default {
  name: 'scrollBar',
  data () {
    return {
      iscroll: null
    }
  },
  mounted () {
    this.iscroll = new IScroll(this.$el, iscrollOption)
  },
  updated () {
    console.log('updated')
    this.refresh()
  },
  destroyed () {
    this.iscroll.destroy()
    this.iscroll = null
  },
  methods: {
    refresh () {
      this.$nextTick(() => {
        this.iscroll.refresh()
      })
    }
  }
}
</script>

<style lang="css">
.scroll-bar {
  height: 300px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,.5);
}
.the-only-child {
  padding: 0;
  margin: 0;
}
.the-only-child li {
  box-sizing: border-box;
  padding: 10px;
}
</style>
