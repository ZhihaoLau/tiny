<template lang="html">
  <li class="check-list-option" @click.prevent="toggle">
    <span class="checkbox" :class="{ 'checked': option.checked }">
      <img v-if="option.checked" src="~@/assets/checked.svg" />
    </span>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'CheckListItem',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggle () {
      this.$emit('toggle', this.option)
    }
  }
}
</script>

<style lang="css" scoped>
.check-list-option {
  list-style: none;
  display: flex;
  align-items: center;
  cursor: default;
  user-select: none;
}
.check-list-option span.checkbox {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  margin: 5px;
  border-radius: 100%;
  background-color: white;
  border: 1px solid #ddd;
  transition: all .1s ease-out;
}
.check-list-option span.checkbox.checked {
  background-color: #6D95EE;
  border: none;
}
.check-list-option span.checkbox img {
  display: block;
  height: 12px;
  width: 12px;
  animation: img-checked .2s ease-out;
}
@keyframes img-checked {
  0% { transform: scale(0.1, 0.1); }
  90% { transform: scale(1.3, 1.3); }
  100% { transform: scale(1, 1); }
}
</style>
