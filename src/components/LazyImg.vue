<template lang="html">
  <div class="lazy-img">
    <img :src="dataSrc" />
  </div>
</template>

<script>
export default {
  name: 'LazyImg',
  props: {
    dataSrc: {
      type: String,
      required: true
    }
  },
  methods: {
    getElementInnerHeight (elem) {
      let style = window.getComputedStyle(elem, null)
      return parseFloat(style.getPropertyValue('height'))
    },
    handleScroll (e) {
      let offsetTop = this.$el.offsetTop
      let parentHeight = this.getElementInnerHeight(this.$parent.$el)

      if ((e.target.scrollTop + parentHeight) > offsetTop) {
        console.log('parentscrolltop: ' + e.target.scrollTop)
      }
    }
  },
  mounted () {
    this.$parent.$el.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    this.$parent.$el.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="css">
</style>
