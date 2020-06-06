<template>
  <div class="modal">
    <div class="modal_body p-3">
      <div class="row title">
        <div class="col-10 ">
          <span>Selecionar projeto</span>
        </div>
        <div class="col-2 bd-highlight" @click="$emit('close')">
          <button class="btn btn-lg btn-outline-dark" style="border:none">
            X
          </button>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          Projeto
        </div>
      </div>
    </div>
  </div>
</template>

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
  border-radius: 0.5rem;

  .title {
    font-weight: 300;
    font-size: 24px;
    border-bottom: 1px solid #f1f1f1;
    padding: 10px 5px;
  }
}
</style>
