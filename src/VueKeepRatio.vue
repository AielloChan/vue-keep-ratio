<script>
export default {
  name: "VueKeepRatio",
  props: {
    ratio: { default: 1 / 1 },
    width: { type: String },
    height: { type: String },
    innerClassName: { default: "" },
  },
  computed: {
    fixedRatioPlaceholder() {
      return (
        `data:image/svg+xml,%3Csvg width='${this.ratio}' height='1' ` +
        `xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E`
      );
    },
    sizeStyle() {
      if (this.height) {
        // fixed height
        return { width: "auto", height: this.height };
      } else if (this.width) {
        // fiexd width
        return { width: this.width, height: "auto" };
      }
      return {};
    },
  },
  render(h) {
    return h(
      "section",
      {
        class: "v-keep-ratio",
        style: {
          position: "relative",
          display: "block",
          width: "100%",
          ...this.sizeStyle,
        },
      },
      [
        h("img", {
          attrs: { src: this.fixedRatioPlaceholder },
          class: "v-keep-ratio__img",
          style: {
            border: "none",
            width: "100%",
            ...this.sizeStyle,
          },
        }),
        [
          h(
            "div",
            {
              class: ["v-keep-ratio__box", this.innerClassName].join(" "),
              style: {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              },
            },
            [this.$slots.default]
          ),
        ],
      ]
    );
  },
};
</script>
