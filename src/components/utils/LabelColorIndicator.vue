<template>
  <div class="d-flex">
    <svg class="pointer" height="24" width="24">
      <circle
        cx="12"
        cy="12"
        r="6.5"
        :fill="
        getColor()
        "
      />
    </svg>
    <div class="ml-1 text-truncate max-w">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LabelColorIndicator",
  props: {
    color: { type: String, default: null},
    class_color: { type: String, default: null},
    issues_status: { type: Number, default: null},
  },

  computed: {
    issueMapColor() {
      return this.$store.getters.mapGlobalTaskStatusStyle;
    },
    mapColor() {
      return new Map([
        ["success", "#50E3C2"],
        ["danger", "#DB717E"],
        ["warning", "#BF78CA"],
        ["secondary", "#999999"],
        ["primary", "#0070F3"],
      ]);
    },
  },

  methods: {
    getColor() {
      const value  = this.issues_status != null  ? this.issues_status : this.class_color

      if (typeof value === 'number') {
        return this.issueMapColor.get(value) ? this.issueMapColor.get(value).color : '#cccccc'; 
      }
      else {
        return this.mapColor.get(value) || '#cccccc'
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.line {
  border-left: 3px solid #ccc;
}
.max-w{
  width: calc(100% - 30px);
}
.pointer {
  // position: absolute;
}
</style>
