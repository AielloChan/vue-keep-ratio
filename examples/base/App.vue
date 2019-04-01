<template>
  <section class="example">
    <h1><a href="https://github.com/AielloChan/vue-keep-ratio">Vue Keep Ratio</a></h1>

    <h2 class="text-left">Dynamic change config</h2>
    <div id="dynamic"
         v-if="showDynamic"
         v-ratio="dynamicRatio">
      <h2>Dynamic change ratio in 2 seconds</h2>
    </div>

    <h2 class="text-left">Fixed width (Try change window width)</h2>
    <div>
      <div class="fixed-width"
           v-ratio="{ratio: 4 / 3,cb:afterResize}">
        <h2>Ratio: 4 / 3</h2>
      </div>
      <div class="fixed-width"
           v-ratio="{ratio: 16 / 9, keep: false}">
        <h2>Ratio: 16 / 9; Keep: false</h2>
      </div>
      <div class="fixed-width"
           v-ratio="{ratio: 1 / 1}">
        <h2>Ratio: 1 / 1</h2>
      </div>
      <div class="fixed-width"
           v-ratio="{ratio: 4 / 1}">
        <h2>Ratio: 4 / 1</h2>
      </div>
    </div>

    <h2 class="text-left">Fixed height (Try change window height)</h2>
    <div>
      <div class="fixed-height"
           v-ratio="{ratio: 16 / 9, fixed: 'height'}">
        <h2>Ratio: 16 / 9</h2>
      </div>
      <div class="fixed-height"
           v-ratio="{ratio: 4 / 3, fixed: 'height', keep: false}">
        <h2>Ratio: 4 / 3; Keep: false</h2>
      </div>
    </div>

    <h2 class="text-left">Debounce (Try change window width)</h2>
    <div>
      <div class="fixed-width"
           v-ratio="{ratio: 4 / 3, debounce: 1000}">
        <h2>Ratio: 4 / 3; Debounce: 1000</h2>
      </div>
      <div class="fixed-width"
           v-ratio="{ratio: 4 / 3, debounce: 10}">
        <h2>Ratio: 4 / 3; Debounce: 10</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showDynamic: true,
      dynamicRatio: { ratio: 1920 / 1080 }
    };
  },
  mounted() {
    // dynamic change ratio
    setTimeout(() => {
      this.dynamicRatio = { ratio: 4 / 3, keep: true };
      // remove el
      setTimeout(() => {
        this.showDynamic = false;
      }, 2e3);
    }, 2e3);
  },
  methods: {
    afterResize(val) {
      console.log("afterResize", val);
    }
  }
};
</script>


<style lang="css">
.example {
  text-align: center;
  padding: 10px 200px;
}
.text-left {
  text-align: left;
}
.example div {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 250ms;
}

#dynamic {
  width: 30%;
  background: lightgray;
}
.fixed-width {
  display: inline-block;
  width: 20%;
  background: lime;
  margin: 10px;
}
.fixed-height {
  display: inline-block;
  height: 20vh;
  background: lightcoral;
  margin: 10px;
}
</style>
