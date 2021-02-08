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

[[English](./README.md)]

_新的 CSS 属性 [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) 来了，但是兼容性不是很好，所以我又捡起了自己的老项目 `vue-keep-ratio`通过另一种兼容性更好的办法（hack）来实现`固定 DOM 长宽比`_ 🍺

## 这是什么

这是一个基于 Vue.js 的固定 DOM 长宽比的组件。（仅仅通过 CSS 实现）

Demo: [试一试！](https://codepen.io/AielloChan/pen/GRNqJzd)

## 安装使用

```bash
# npm
npm -i vue-keep-ratio
# yarn
yarn add vue-keep-ratio
```

### 全局安装
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

### 单文件组件中安装
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

使用 [vue cli](https://cli.vuejs.org/) 来在本地启动一个 Demo

```bash
vue serve examples/base/main.js
```

## API

**Props**
- **ratio**: {Number} [ratio=1/1] 宽度和高度的比例，默认为 1 / 1。
- **width**: {String} 当设置这个值时，默认在缩放时保持宽度不变，默认为此模式。
- **height**: {String} 在缩放时，保持此高度不变。
- **innerClassName**: {String} [innerClassName=''] 正如其名，他用于设置内部容器的类名。

## 已知缺陷
- [ ]: 无法通过添加 `transition` 属性来使得 `VueKeepRatio` 的变化更平缓（也就是动画），因为 `transition` 属性要求动画开始和结束都是明确的数值，但我们是通过 100% 再到某一个值的，所以无法使用动画。
