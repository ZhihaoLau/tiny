<template lang="html">
  <div class="check-list-page">
    <div class="doc">
      <h3># Template:</h3>
      <pre v-highlightjs>
        <code class="javascript">
          &lt;check-list
            v-model="selected"
            :options="options"
            :toggleAllAble="true"
          /&gt;
        </code>
      </pre>

      <h3># Props: </h3>

      <p><b>[v-model]</b> - Array of selected options</p>

      <p><b>[options]</b> - Array of option, for example: </p>
      <pre v-highlightjs>
        <code class="javascript">
          options: [
            {
              label: 'Disabled',
              value: 'Disabled-Value',
              disabled: true
            },
            {
              label: 'Selected-Disabled',
              value: 'Selected-Disabled-Value',
              disabled: true
            },
            {
              label: 'Option A',
              value: 'OptionA'
            },
            {
              label: 'Option B',
              value: 'OptionB'
            }
          ]
        </code>
      </pre>

      <p><b>[toggleAllAble]</b> - Boolean, if true, enable the 'Select All/None' button</p>

      <h3># Sample:</h3>
    </div>
    <div class="container">
      <check-list
        v-model="selected"
        :options="options"
        :toggleAllAble="true"
      />
      <p>Selected: {{ selected.map(item => item.label) }}</p>
    </div>
    <br><br><br>
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
          label: 'Disabled',
          value: 'Disabled-Value',
          disabled: true
        },
        {
          label: 'Selected-Disabled',
          value: 'Selected-Disabled-Value',
          disabled: true
        },
        {
          label: 'Option A',
          value: 'OptionA'
        },
        {
          label: 'Option B',
          value: 'OptionB'
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
