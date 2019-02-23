import Vue from "vue";

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

Vue.directive("ratio", {
  inserted: function(el, binding) {
    const config = Object.assign(defaultConfig, binding.value);
    const adjustSizeWapper = () => {
      adjustSize(el, config.ratio, config.adjust);
    };
    adjustSizeWapper();
    if (config.keep) {
      window.addEventListener("resize", adjustSizeWapper);
    } else {
      window.removeEventListener("resize", adjustSizeWapper);
    }
  }
});
