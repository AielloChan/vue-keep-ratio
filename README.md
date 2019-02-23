# vue-keep-ratio

## What

It's a vue directive to keep dom ratio

## How to use

```HTML
<template>
  <div style="width: 500px">
    <div style="width: 100%" v-ratio></div>
  </div>
</template>

<script>
import "keep-ratio"
export default {}
</script>
```

Or

```HTML
<template>
  <div style="width: 500px">
    <div style="width: 100%" v-ratio="{ratio:4/3,adjust:'height',keep:true}"></div>
  </div>
</template>

<script>
import "keep-ratio"
export default {}
</script>
```

## API

- **ratio**: The ratio you wanna keep, default 1920/1080
- **adjust**: Witch attr(width/height) should change, default change height
- **keep**: If keep ratio when window resized
