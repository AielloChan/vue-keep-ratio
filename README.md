# vue-keep-ratio

_As there comes a new css attribute: [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio), I picked up my old work `vue-keep-ratio`, use a more adaptive (but hack) way to achieve `keep dom ratio`_ 🍺

## What

It's a vue component to keep dom ratio

## How to use

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

## Demo

use [vue cli](https://cli.vuejs.org/) start demo

```bash
vue serve examples/base/main.js
```

## API

**Props**
- **ratio**: {Number} [ratio=1/1] The ratio you wanna keep, default: 1 / 1.
- **width**: {String} [width='100%'] Keep width value when dom resized, default.
- **height**: {String} [height=undefined] Keep width value when dom resized.
- **innerClassName**: {String} [innerClassName=''] As the name, it specify inner div wrapper additional class name

## Bugs
- [ ]: Can't apply css `transition` animation on `VueKeepRatio`, because `transition` require affirmatory start and end value.
