# vue-keep-ratio

## What

It's a vue directive to keep dom ratio

## How to use

*main.js*

```js
import KeepRatio from 'vue-keep-ratio'
Vue.use(KeepRatio)
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
    <div id="cube" style="width: 100%" v-ratio="{ratio:1,adjust:'height',keep:true"></div>
  </div>
</template>
```
div `cube` will be a cube, and when browser resized, it still keep width/height = 1

## API

- **ratio**: The ratio you wanna keep, default 1920/1080
- **adjust**: Witch attr(width/height) should change, default change height
- **keep**: If keep ratio when window resized
