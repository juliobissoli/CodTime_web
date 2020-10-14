<template>
  <div>
    <div v-if="item" class="avatar rounded-circle">
      <img :src="item"  class="rounded-circle" />
    </div>
    <div v-else class="avatar bg rounded-circle">
      <img src="../assets/img/avatar_dafault.svg" class="" />
    </div>
  </div>
</template>

<script>

export default {
  name: "Avatar",
  props: ["item", "size"],

  computed: {
    src() {
      const images = require.context("../assets/img/", false, /\.jpg$/);
      return images("./" + this.item);
    },
    dimencion() {
      return this.size
        ? `{max-width: ${this.seze}px important!; max-height: ${this.size}px;}`
        : "{width: 30px; height: 30px;}";
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
     width: 50px;
  height: 50px;
  object-fit: scale-down;
  }
  .bg {
    background: #ccc;
  }
}
</style>

