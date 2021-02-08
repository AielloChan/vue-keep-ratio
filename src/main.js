import VueKeepRatio from './VueKeepRatio'

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(VueKeepRatio.name, VueKeepRatio)
}

export default VueKeepRatio
