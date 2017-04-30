<template lang="html">
  <div class="scroll-bar-page">
    <p>ScrollBarPage</p>
    <div v-html="compiledMarkdown" v-highlightjs></div>
  </div>
</template>

<script>
const marked = require('marked')
import textMD from '@/TEST.md'
export default {
  name: 'ScrollBarPage',
  data () {
    return {
      text: textMD
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.text)
    }
  }
}
</script>

<style lang="css">
.scroll-bar-page {
  text-align: left;
}
</style>
