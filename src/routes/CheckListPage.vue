<template lang="html">
  <div class="check-list-page">
    <h4><router-link to="/">&lt;-返回</router-link></h4>

    <div class="container">
      <check-list
        v-model="selected"
        :options="options"
        :toggleAllAble="true"
      />
      <p>选中的值: {{ selected.map(item => item.label) }}</p>
    </div>
  </div>
</template>

<script>
import CheckList from '@/components/CheckList'
export default {
  name: 'CheckListPage',
  components: {
    CheckList
  },
  data () {
    return {
      selected: [],
      options: [
        {
          label: '被禁用',
          value: '值F',
          disabled: true
        },
        {
          label: '选中禁用',
          value: '选中禁用的值',
          disabled: true
        },
        {
          label: '选项A',
          value: '值A'
        },
        {
          label: '选项B',
          value: '值B'
        }
      ]
    }
  }
}
</script>

<style lang="css">
.check-list-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container {
  width: 40vh;
  padding: 20px;
  border: 1px solid #ddd;
  text-align: left;
}
</style>
