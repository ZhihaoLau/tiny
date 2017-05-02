## Usage:
### Template:

Using in window's viewport
```html
<lazy-img dataSrc="path-to-image" />
```

Using in block element, in this case, you need to declare a container.
```html
<lazy-img-container>
  ...
  <lazy-img dataSrc="path-to-image" />
</lazy-img-container>  
```

Even works on nested DOM/Component:
```html
<lazy-img-container>
  ...
  <div class="useless-div">
    <div class="another-useless-div">
      <lazy-img dataSrc="path-to-image" />
    </div>
  </div>
</lazy-img-container>  
```

### Props
[dataSrc] - String, path to image