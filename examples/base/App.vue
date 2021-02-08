<template>
  <section class="example">
    <h1>
      <a href="https://github.com/AielloChan/vue-keep-ratio">Vue Keep Ratio</a>
    </h1>

    <h2 class="text-left">Fixed width (Try changing the window width)</h2>
    <div class="flex items-center">
      <VueKeepRatio class="fixed-width">
        <h2>Default Ratio: 1 / 1</h2>
      </VueKeepRatio>
      <VueKeepRatio :ratio="4 / 3" class="fixed-width inline-block mr-10">
        <h2>Ratio: 4 / 3</h2>
      </VueKeepRatio>
      <VueKeepRatio :ratio="16 / 9" class="fixed-width inline-block mr-10">
        <h2>Ratio: 16 / 9</h2>
      </VueKeepRatio>
      <VueKeepRatio
        :ratio="4 / 1"
        class="fixed-width inline-block mr-10"
        innerClassName="text-white"
      >
        <h2>Ratio: 4 / 1</h2>
      </VueKeepRatio>
    </div>

    <h2 class="text-left">Fixed height (Try changing the window height)</h2>
    <div class="flex justify-center">
      <VueKeepRatio
        :ratio="16 / 9"
        class="fixed-height inline-block mr-10"
        innerClassName="text-white"
        height="20vh"
      >
        <h2>Ratio: 16 / 9</h2>
      </VueKeepRatio>
      <VueKeepRatio
        :ratio="4 / 3"
        class="fixed-height inline-block mr-10"
        innerClassName="flex justify-center items-center text-white"
        height="20vh"
      >
        <h2>Ratio: 4 / 3</h2>
      </VueKeepRatio>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="css">
// base css
.text-left {
  text-align: left;
}
.text-black {
  color: black;
}
.text-white {
  color: white;
}
.text-cyan {
  color: cyan;
}
.inline-block {
  display: inline-block;
}
.mr-10 {
  margin: 10px;
}
.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.items-center {
  align-items: center;
}
</style>

<style lang="css">
.example {
  text-align: center;
  padding: 10px 200px;
}
.fixed-width {
  background: #00b3b3;
}
.fixed-height {
  background: lightcoral;
}
</style>
