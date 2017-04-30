<template lang="html">
  <ul class="check-list">
    <check-list-item
      v-for="(option, index) in options_copy"
      :key="index"
      :option="option"
      v-on:toggle="toggleOption"
    >
      {{ option.label }}
    </check-list-item>

    <a class="toggle-all-btn" @click.prevent="toggleAll" v-if="toggleAllAble">
      <span class="checkbox" :class="{ 'checked': isAllSelected }">
        <img v-if="isAllSelected" src="~@/assets/checked.svg" />
      </span>
      <span>Select All/None</span>
    </a>
  </ul>
</template>

<script>
import Vue from 'vue'
import CheckListItem from '@/components/CheckListItem'
export default {
  name: 'CheckList',
  components: {
    CheckListItem
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    toggleAllAble: {
      type: Boolean,
      require: true
    }
  },
  data () {
    return {
      options_copy: this.options.map(o => Object.assign({}, o, { checked: false }))
    }
  },
  computed: {
    checkedOptions () {
      return this.options_copy.filter(o => o.checked)
    },
    isAllSelected () {
      return !this.options_copy.some(o => !o.checked)
    }
  },
  methods: {
    toggleOption (option) {
      Vue.set(option, 'checked', !option.checked)
      this.$emit('input', this.checkedOptions)
    },
    toggleAll () {
      if (this.isAllSelected) {
        this.options_copy = this.options.map(o => Object.assign({}, o, { checked: false }))
        this.$emit('input', this.checkedOptions)
        return
      }

      this.options_copy = this.options.map(o => Object.assign({}, o, { checked: true }))
      this.$emit('input', this.checkedOptions)
    }
  }
}
</script>

<style lang="css" scoped>
.check-list {
  padding: 0;
  margin: 0;
}
.toggle-all-btn {
  margin-top: 10px;
  display: flex;
  align-items: center;
  height: 24px;
  cursor: pointer;
  user-select: none;
}
.toggle-all-btn .checkbox {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  margin: 5px;
  /*border-radius: 100%;*/
  background-color: white;
  border: 1px solid #ddd;
  transition: all .1s ease-out;
}
.toggle-all-btn .checkbox.checkbox.checked {
  background-color: #6D95EE;
  border: none;
}
.toggle-all-btn .checkbox.checkbox img {
  display: block;
  height: 12px;
  width: 12px;
  animation: img-checked .3s ease-in;
}
</style>
