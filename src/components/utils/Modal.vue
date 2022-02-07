<template>
  <transition name="slide-fade">
    <div class="modal" v-on:click.self="$emit('close')">
      <div class="modal_body d-flex flex-column justify-content-between p-3 px-2">
        <header class="row header border-bottom">
          <div class="col-10 pl-2 d-flex align-items-end">
            <slot name="header"></slot>
          </div>
          <div class="col-2 p-0 d-flex justify-content-end">
            <button
              class="btn btn-lg"
              @click="$emit('close')"
              style="border: none"
            >
              <i class="icon icon-close"></i>
            </button>
          </div>
        </header>

        <div class="body row">
          <div class="col-12 p-4">
            <slot></slot>
          </div>
        </div>
        <div class="body row">
          <div class="col-12 p-4">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalDefalt",
  props: ["open", "messageError", "large"],
  watch: {
    messageError() {
      setTimeout(() => {
        this.messageError = "";
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}

.modal_body {
  background-color: #ffffff;
  height: auto;
  width: 700px;
  overflow-y: auto;
  border-radius: 10px;
  i {
    height: 30px;
    width: 30px;
  }
  .header {
    font-weight: 300;
    font-size: 24px;
    // border-bottom: 1px solid #f1f1f1;
    padding: 10px 5px;
  }
  .footer {
    border-top: 1px solid #f1f1f1;
  }

  @media (max-width: 765px) {
    width: 100% !important;
  }
}
.animate-start {
  animation: traslateLeft 1000ms;
}

@keyframes traslateLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100);
  }
}
</style>
