<template lang="html">
  <div class="lazy-img">
    <img :class="{ 'active': action }" :src="src" />
  </div>
</template>

<script>
import base64Placeholder from '../base64Placeholder'
import findParentVM from '../findParentVM'
let viewportRect = {
  top: 0,
  right: window.innerWidth,
  bottom: window.innerHeight,
  left: 0,
  height: window.innerHeight,
  width: window.innerWidth
}

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
  computed: {
    container () {
      /**
       * If can't find 'LazyImgContainer' component,
       * fall back to window DOM object, as known as viewport
       */
      let parentVM = findParentVM(this, 'LazyImgContainer')
      if (parentVM) return parentVM.$el
      return window
    }
  },
  methods: {
    /**
     * Reference:
     * http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
     */
    getRelativeRect (el) {
      let parentRect = (this.container === window)
                      ? viewportRect
                      : this.container.getBoundingClientRect()
      let thisRect = this.$el.getBoundingClientRect()

      return {
        top: thisRect.top - parentRect.top,
        right: thisRect.right - parentRect.right,
        bottom: thisRect.bottom - parentRect.bottom,
        left: thisRect.left - parentRect.left
      }
    },
    /**
     * Since child's size might larger than parent,
     * If only coordinate top and left appear in parent's view, is consider entered
     */
    isElementAppearInParentView (el) {
      let parentRect = (this.container === window)
                      ? viewportRect
                      : this.container.getBoundingClientRect()
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
      this.container.removeEventListener('scroll', this.handleScroll)
    }
  },
  mounted () {
    if (this.isElementAppearInParentView(this.$el)) {
      this.load()
    }
    this.container.addEventListener('scroll', this.handleScroll)
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
