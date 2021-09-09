<template>
  <div>
    <div v-if="item" class="avatar">
      <div class="item" >
        <img
          :src="item"
          :class="small ? 'small' : ''"
        />
      </div>
    </div>
    <div v-else class="avatar bg rounded-circle">
      <img src="../../assets/img/avatar_dafault.svg" class="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["item", "size", 'small'],
  computed: {
    src() {
      const images = require.context("../../assets/img/", false, /\.jpg$/);
      return images("./" + this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  overflow: hidden;
  border-radius: 50%;
  .item {
    display: flex;
  }
  @media (max-width: 756px) {
    .small {
      width: 25px !important;
      height: 25px !important;
    }
  }
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>
