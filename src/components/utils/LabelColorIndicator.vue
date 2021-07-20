<template>
  <div class="d-flex flex-row">
    <svg class="pointer" height="24" width="24">
      <circle cx="12" cy="12" r="6.5" :fill="color" />
    </svg>
    <div class="ml-1">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LabelColorIndicator",
  props: {
      color: String,
  },

};
</script>

<style lang="scss" scoped>
.line {
  border-left: 3px solid #ccc;

}

  .pointer {
    // position: absolute;
  }
</style>
