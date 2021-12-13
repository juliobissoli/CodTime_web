<template>
  <div class="bg-white shadow-sm rounded p-4">
    <div class="row">
      <div class="col-6">
        <small class="text-muted text-uppercase">{{comparing_label}}</small>
        <h1 class="d-flex align-items-end">
          {{ (comparing / 60) | horusFormatGlobal }}
          <small
            class="f-12 d-flex m-2"
            :class="!hasNegative ? 'text-success' : 'text-danger'"
          >
            <i
              class="icon "
              :class="!hasNegative ? 'icon-arrow_down' : 'icon-arrow_up'">
            </i>
            {{ percent }}%
          </small>
        </h1>
      </div>
      <div class="col-6 divider_left text-right">
        <small class="text-muted text-uppercase">{{base_label}}</small>
        <h1>
          {{ (base / 60) | horusFormatGlobal }}
        </h1>
      </div>
      <small class="col-12 text-center mt-1 text-lowercase text-secondary">
        <!-- 12% > que a estimativa -->
        {{ (diff / 60) | horusFormatGlobal }}
        {{ hasNegative ? "a cima " : "dentro " }} do {{base_label}}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComparative",
  props: {
    base: { type: Number, default: 0 },
    comparing: { type: Number, default: 0 },
    comparing_label: { type: String, default: "" },
    base_label: { type: String, default: "" },
  },
  computed: {
    percent() {
      let div = (this.base - this.comparing) / (this.base > 0 ? this.base : 1);
      return (div * 100).toFixed(0);
    },
    diff() {
      let diff = this.base - this.comparing;
      return diff < 0 ? diff * -1 : diff;
    },
    hasNegative() {
      return this.comparing > this.base;
    },
  },
  methods: {
    getCount(max, min) {
      let div = (max - min) / max;
      return (div * 100).toFixed(0);
    },
  },
};
</script>

<style lang="scss" scoped>
.icon{
    width: 18px;
    height: 18px;
}
</style>
