<template lang="html">
  <div class="check-list-page">
    <h2>Samples:</h2>

    <p>A simple use case:</p>
    <div class="demo">
      <check-list
        v-model="selected1"
        :options="options1"
      />
      <p>Selected: {{ selected1.map(item => item.label) }}</p>
    </div>

    <p>You can also disabled option by simply passing a "disabled" preperty:</p>
    <div class="demo">
      <check-list
        v-model="selected2"
        :options="options2"
      />
      <p>Selected: {{ selected2.map(item => item.label) }}</p>
    </div>

    <p>If you pass a "toggleAllAble" prop, you'll got a "Selected All/None" button to toggle all options:</p>
    <blockquote>
      NOTE: "toggleAllAble" will not change a disabled option's value
    </blockquote>
    <div class="demo">
      <check-list
        v-model="selected"
        :options="options"
        :toggleAllAble="true"
      />
      <p>Selected: {{ selected.map(item => item.label) }}</p>
    </div>
    <br>
    <div class="doc" v-html="doc" v-highlightjs></div>
  </div>
</template>

<script>
import marked from 'marked'
import README from '@/components/CheckList/README.md'
import CheckList from '@/components/CheckList'
export default {
  name: 'CheckListPage',
  components: {
    CheckList
  },
  data () {
    return {
      doc: marked(README),
      selected1: [],
      options1: [
        {
          label: 'Option A',
          value: 'OptionA'
        },
        {
          label: 'Option B',
          value: 'OptionB'
        }
      ],
      selected2: [
        {
          label: 'Option A',
          value: 'OptionA',
          disabled: true
        }
      ],
      options2: [
        {
          label: 'Option A',
          value: 'OptionA',
          disabled: true
        },
        {
          label: 'Option B',
          value: 'OptionB'
        }
      ],
      selected: [
        {
          label: 'Selected-Disabled',
          value: 'Selected-Disabled-Value',
          disabled: true
        }
      ],
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
.check-list-page .demo {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  text-align: left;
}
blockquote {
  border-left: 3px solid #6D95EE;
  padding-left: 15px;
  margin: 15px 0;
}
</style>
