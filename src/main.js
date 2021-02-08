import VueKeepRatio from './VueKeepRatio'

function install(vue){
  vue.component(VueKeepRatio.name, VueKeepRatio)
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// for global install
VueKeepRatio.install = install

export default VueKeepRatio
