## Usage:
### Template:

```html
<check-list
  v-model="selected"
  :options="options"
  :toggleAllAble="true"
>
```

### Props:
[v-model] - Array of selected options

[options] - Array of option, for example:

```javascript
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
```

[toggleAllAble] - Boolean, if true, enable the 'Select All/None' button
