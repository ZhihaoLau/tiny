<template lang="html">
  <div class="lazy-img">
    <img :class="{ 'active': action }" :src="src" />
  </div>
</template>

<script>
import base64Placeholder from './utils/base64Placeholder'
export default {
  name: 'LazyImg',
  props: {
    dataSrc: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      action: false,
      src: base64Placeholder
    }
  },
  methods: {
    /**
     * Reference:
     * http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
     */
    getRelativeRect (el) {
      let parentRect = this.$el.parentElement.getBoundingClientRect()
      let thisRect = this.$el.getBoundingClientRect()
      return {
        top: thisRect.top - parentRect.top,
        right: thisRect.right - parentRect.right,
        bottom: thisRect.bottom - parentRect.bottom,
        left: thisRect.left - parentRect.left
      }
    },
    /**
     * 由于子元素可能比父元素的尺寸大，所以只计算top与left符不符合规则
     */
    isElementAppearInParentView (el) {
      let parentRect = this.$el.parentElement.getBoundingClientRect()
      let relRect = this.getRelativeRect(el)
      return (
        relRect.top <= parentRect.height &&
        relRect.left <= parentRect.width
      )
    },
    load () {
      /* for demo */
      setTimeout(() => {
        this.src = this.dataSrc
        this.action = true
      }, 300)
    },
    handleScroll () {
      if (this.isElementAppearInParentView(this.$el)) {
        this.load()
        this.unbindScrollEvent()
      }
    },
    unbindScrollEvent () {
      this.$el.parentElement.removeEventListener('scroll', this.handleScroll)
    }
  },
  mounted () {
    if (this.isElementAppearInParentView(this.$el)) {
      this.load()
    }
    this.$el.parentElement.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    this.unbindScrollEvent()
  }
}
</script>

<style lang="css" scoped>
@keyframes fade-in {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
}
.active {
  animation: fade-in .8s ease-in;
  animation-fill-mode: both;
}
</style>
