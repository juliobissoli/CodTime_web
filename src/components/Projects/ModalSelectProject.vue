<template>
  <div class="modal">
    <div class="modal_body p-3">
      <header class="row header">
        <div class="col-10 ">
          <span>Selecionar projeto</span>
        </div>
        <div
          class="col-2 p-0 d-flex justify-content-end"
          @click="$emit('close')"
        >
          <button class="btn btn-lg btn-outline-dark" style="border:none">
            X
          </button>
        </div>
      </header>

      <div class="row mt-5">
        <div class="col-12">
          <multiselect />
        </div>
      </div>

      <footer class="row mt-5 footer">
        <div class="p-3 col-12 d-flex justify-content-end">
          <button class="btn btn-outline-dark">
            Start
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import multiselect from "./MultselectProject";

export default {
  name: "ModalSelectProject",
  components: { multiselect },
  data() {
    return {
      value: null,
    };
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 1;
}

.modal_body {
  background-color: #ffffff;
  width: 40%;
  // height: 670px;
  border-radius: 0.5rem;

  .header {
    font-weight: 300;
    font-size: 24px;
    border-bottom: 1px solid #f1f1f1;
    padding: 10px 5px;
  }
  .footer {
    border-top: 1px solid #f1f1f1;
    // display: flex;
    // align-items: flex-end;
    // background: red;
  }
}
</style>
