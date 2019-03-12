import Debounce from "lodash.debounce";
import IsEqual from "lodash.isequal";

const defaultConfig = {
  ratio: 1920 / 1080,
  fixed: "width",
  keep: true,
  debounce: 300
};

let idx = 0;
const CallbackStore = new Map();
window.addEventListener("resize", () => {
  for (let cb of CallbackStore.values()) {
    cb && cb();
  }
});

// modify dom obj size
function adjustSize(el, ratio, fixed) {
  if (fixed === "width") {
    const width = el.offsetWidth;
    const height = width / ratio;
    el.style.height = height + "px";
  } else {
    const height = el.offsetHeight;
    const width = height * ratio;
    el.style.width = width + "px";
  }
}

function update(el, binding, __, oldVnode) {
  if (oldVnode.data.directives) {
    // avoid update when directive config not have changed
    const oldValue = oldVnode.data.directives.find(
      directive => (directive.name = "ratio")
    ).value;
    if (IsEqual(binding.value, oldValue)) return;
  }

  // init directive config
  const config = Object.assign({}, defaultConfig, binding.value);
  // assign dom id
  if (!el.dataset.retioId) {
    el.dataset.retioId = idx++;
  }
  adjustSize(el, config.ratio, config.fixed);

  if (config.keep) {
    // add resize listen
    CallbackStore.set(
      el.dataset.retioId,
      Debounce(() => {
        adjustSize(el, config.ratio, config.fixed);
      }, config.debounce)
    );
  } else {
    CallbackStore.delete(el.dataset.retioId);
  }
}

export default {
  install: function(Vue, options) {
    Vue.directive("ratio", {
      inserted: update,
      update: update,
      unbind: function(el) {
        CallbackStore.delete(el.dataset.retioId);
      }
    });
  }
};
