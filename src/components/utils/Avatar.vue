<template>
  <div>
    <div v-if="item" class="avatar">
      <div class="item" >
        
        <img :src="item.avatar_url" :class="small ? 'small' : ''" :style="size ? { width:size + 'px', height:size + 'px'} : ''" />
        <div class="discribe">
          <span class="label">{{ item.name }}</span>
        </div>
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
  props: ["item", "size", "small"],
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
  border: 1px solid #f1f1f1f1;

  .item {
    display: flex;
      height: 100%;
      width: 100%;
  }
  @media (max-width: 756px) {
    .small {
      width: 25px !important;
      height: 25px !important;
    }
  }

  .discribe {
    display: none;
    position: fixed;
    width: auto;
    font-size: 11px;
    height: auto;
    border-radius: 0.3rem;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 5px;
    text-align: center;
    color: #fff;
    z-index: 999;
    margin-left: -2px;
    margin-top: 30px;
  }
  // .discribe:before {
  //   content: "";
  //   display: inline;
  //   vertical-align: center;
  //   margin-top: -5px;
  //   position: absolute;
  //   top: -8px;
  //   margin-left: 10px;
  //   border-right: 9px solid transparent;
  //   border-left: 9px solid transparent;
  //   border-bottom: 13px solid rgba(0, 0, 0, 0.6);
  // }
  :hover {
    .discribe {
      display: inline-block;
      animation: show 900ms;
    }
  }
}

img {
  // display: flex;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>
