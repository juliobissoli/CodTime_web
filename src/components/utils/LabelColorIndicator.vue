<template>
  <div class="d-flex flex-row">
    <svg class="pointer" height="24" width="24">
      <circle cx="12" cy="12" r="6.5" :fill="mapColor.get(class_color)" />
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
      class_color: String
  },

  computed: {
    mapColor(){
      return new Map(
        [
          ['success', "#50E3C2"],
          ['danger', '#DB717E'],
          ['warning', '#BF78CA'],
          ['secondary', '#999999']
        ]
      )
    }
  }

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
