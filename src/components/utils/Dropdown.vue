<template>
  <transition name="slide-fade shadow">
    <div class="box-form">
      <div class="row header">
        <div
          class="col-12  p-0 d-flex justify-content-between align-items-center"
        >
          <slot name="header"></slot>
        </div>

        <div class="col-12">
          <form class="">
            <slot></slot>
          </form>
        </div>
        <div
          v-show="error"
          class=" col-12 alert alert-danger mt-3"
          role="alert"
        >
          {{ error }}
        </div>
        <div class="col-12 p-0">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BoxForm",
  props: ["mensageError"],
  data() {
    return {
      error: "",
    };
  },
  created() {
    this.error = this.mensageError;
  },
  watch: {
    mensageError() {
      this.error = this.mensageError;
      setTimeout(() => {
        this.error = "";
        this.$emit("clean-error");
      }, 4000);
    },
  },
};
</script>

<style lang="scss" scoped>
.box-form {
  position: absolute;
  //   border: 1px solid #ecedf1;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 0.8rem;
  // padding: 33px;
  z-index: 66;
  input,
  select {
    border: 1px solid #666;
  }
  .header {
    // font-size: 18px;
    // color: #444;
    // font-weight: 400;
    // border-bottom: 1px solid #ccc;
    .icon {
      height: 24px;
      width: 24px;
    }
  }
}
</style>
