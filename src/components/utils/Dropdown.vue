<template>
    <div class="dropdown shadow-sm" >
      <div class="row header">
        <div
          class="col-12 "
        >
        <div class="divider_bottom px-3 py-2">
          <slot name="header" class=""></slot>
        </div>
        </div>

        <div class="col-12">
          <div class="p-3">

            <slot></slot>
          </div>
        </div>
        <div
          v-show="error"
          class=" col-12 px-4"
        >
        <small class="alert d-flex w-100 alert-danger ">
          {{ error }}
        </small>
        </div>
        <div class="col-12 p-0">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "BoxForm",
  props: {messageError: String},
  data() {
    return {
      error: "",
    };
  },
  created() {
    this.error = this.messageError;
  },
  watch: {
    messageError() {
      this.error = this.messageError;
      setTimeout(() => {
        this.error = "";
        this.$emit("clean-error");
      }, 4000);
    },
  },
  methods: {
    clickOut(event){
      console.log('Ta aqui ', event)
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: absolute;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 0.8rem;
  z-index: 66;

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
