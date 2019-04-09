# vue-keep-ratio

## What

It's a vue directive to keep dom ratio

**Note: From 1.3.0 desktop chrome use `ResizeObserver` as default**

## How to use

_main.js_

```js
import KeepRatio from "vue-keep-ratio";
Vue.use(KeepRatio);
```

```HTML
<template>
  <div style="width: 1920px">
    <div id="screen" style="width: 100%" v-ratio></div>
  </div>
</template>
```

div `screen` will display as `width=1920px;height:1080px`

Or

```HTML
<template>
  <div style="width: 500px">
    <div id="cube" style="width: 100%" v-ratio="{ratio:1/1,fixed:'width',keep:true, debounce: 100}"></div>
  </div>
</template>
```

div `cube` will be a cube, and when browser resized, it still keep width/height = 1

## Demo

install [parcel](https://parceljs.org/)

```bash
parcel examples/base/index.html
```

## API

- **ratio**: The ratio you wanna keep, default 1920/1080
- **fixed**: Witch attr(width/height) should fixed, default change height
- **keep**: If keep ratio when window resized
- **debounce**: resize event debounce
- **cb**: resize event call back (return [width,height])


## Bugs

### Resize bouncing

What: before rezise there is no scroll bar, after rezise has, it will cause a bouncing loop
Why: cus we don't know if there will be a scroll bar after resize the dom obj
Fix: set scroll type to `scroll`, `overflow-y: scroll;`
