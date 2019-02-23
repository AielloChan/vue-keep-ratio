let config = {};
let adjustSizeWapper = null;
const defaultConfig = {
  ratio: 1920 / 1080,
  adjust: "height",
  keep: true
};

function adjustSize(el, ratio, adjust) {
  if (adjust === "width") {
    const height = el.offsetHeight;
    const width = height * ratio;
    el.style.width = width + "px";
  } else {
    const width = el.offsetWidth;
    const height = width / ratio;
    el.style.height = height + "px";
  }
}

export default {
  install: function(Vue, options) {
    Vue.directive("ratio", {
      inserted: function(el, binding) {
        config = Object.assign(defaultConfig, binding.value);
        adjustSizeWapper = function() {
          adjustSize(el, config.ratio, config.adjust);
        };
        adjustSizeWapper();
        if (config.keep) {
          window.addEventListener("resize", adjustSizeWapper);
        }
      },
      update: function(el, binding) {
        config = Object.assign(defaultConfig, binding.value);
        window.removeEventListener("resize", adjustSizeWapper);
        adjustSizeWapper = function() {
          adjustSize(el, config.ratio, config.adjust);
        };
        adjustSizeWapper();
        if (config.keep) {
          window.addEventListener("resize", adjustSizeWapper);
        }
      }
    });
  }
};
