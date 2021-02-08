# vue-keep-ratio

<p align="center">
  <a href="https://cdnjs.com/libraries/vue-keep-ratio">
    <img src="https://img.shields.io/cdnjs/v/vue-keep-ratio.svg">
  </a>
  <a href="https://www.npmjs.org/package/vue-keep-ratio">
    <img src="https://img.shields.io/npm/v/vue-keep-ratio.svg">
  </a>
  <a href="https://npmcharts.com/compare/vue-keep-ratio?minimal=true">
    <img src="http://img.shields.io/npm/dm/vue-keep-ratio.svg">
  </a>
  <br>
  <a href="http://img.badgesize.io/https://unpkg.com/vue-keep-ratio/lib/index.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/vue-keep-ratio/lib/index.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/vue-keep-ratio/lib/theme-chalk/index.css?compression=gzip&label=gzip%20size:%20CSS">
    <img src="http://img.badgesize.io/https://unpkg.com/vue-keep-ratio/lib/theme-chalk/index.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

[[中文项目介绍](./README_cn.md)]

_As there comes a new css attribute: [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio), I picked up my old work `vue-keep-ratio`, use a more adaptive (but hack) way to achieve `keep dom ratio`_ 🍺

## What

It's a vue component to keep dom ratio. (just in CSS)

Demo: [Try it!](https://codepen.io/AielloChan/pen/GRNqJzd)

## Install

```bash
# npm
npm -i vue-keep-ratio
# yarn
yarn add vue-keep-ratio
```

### Global install
```js
// main.js
import VueKeepRatio from "vue-keep-ratio";
Vue.use(VueKeepRatio);
```

```vue
// page.vue
<template>
  <VueKeepRatio :ratio="16 / 9">
    this box is keep ratio as default 16 / 9
  </VueKeepRatio>
</template>
```

### Just in component
```vue
// page.vue
<template>
  <VueKeepRatio :ratio="16 / 9">
    this box is keep ratio as default 16 / 9
  </VueKeepRatio>
</template>

<script>
import VueKeepRatio from "vue-keep-ratio";

export default {
  components: {
    VueKeepRatio
  }
}
</script>
```

## Demo

use [vue cli](https://cli.vuejs.org/) start demo

```bash
vue serve examples/base/main.js
```

## API

**Props**
- **ratio**: {Number} [ratio=1/1] The ratio you wanna keep, default: 1 / 1.
- **width**: {String} Keep width value when dom resized, default.
- **height**: {String} Keep width value when dom resized.
- **innerClassName**: {String} [innerClassName=''] As the name, it specify inner div wrapper additional class name

## Bugs
- [ ]: Can't apply css `transition` animation on `VueKeepRatio`, because `transition` require affirmatory start and end value.
