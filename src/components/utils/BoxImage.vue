<template>
  <div>
    <div v-if="image" class="avatar">
      <div class="item" >
        <img
          :src="image"
          :class="small ? 'small' : ''"
          class="rounded"
          
        />
      </div>
    </div>
    <div v-else class="avatar ">
      <img  src="../../assets/img/thumb_default.png" class="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxImage",
  props: ["image", "size", 'small'],
  computed: {
    // src() {
    //   const images = require.context("../../assets/images/", false, /\.jpg$/);
    //   return images("./" + this.image);
    // },
  },
};
</script>

<style lang="scss" scoped>
  img{
  //   height: -webkit-fill-available;
  //  max-height: 700px;
    // object-fit: contain;
    border-radius: 10px 10px 0 0;
    width:100%;
    height:auto;
    max-height:100%;
  }
.avatar {
  // overflow: hidden;
  height: 230px;
//   border-radius: 50%;

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
