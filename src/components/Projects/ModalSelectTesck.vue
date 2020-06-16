<template>
  <div class="modal">
    <div class="modal_body p-3">
      <header class="row header">
        <div class="col-10 ">
          <span>Finalizar Trabalho</span>
        </div>
        <div class="col-2 p-0 d-flex justify-content-end" @click="closeModal()">
          <button class="btn btn-lg btn-outline-dark" style="border:none">
            X
          </button>
        </div>
      </header>
      <div class="mt-4">
        <div class="row ">
          <div class="col-12 d-flex justify-content-between">
            <h5 style="font-size:20px">
              Associar a uma tarefa
            </h5>
            <toggle-button
              :value="notTesck"
              @change="swethChange"
              widt="80"
              :labels="{ checked: 'on', unchecked: 'off' }"
            />
          </div>
        </div>
        <div class="row  p-4 rounded bg-light" v-show="!notTesck">
          <div class="col-12">
            <multselectProjetc
              @select_result="taskSelecting"
              :options_select="tescks"
            />
          </div>
          <div class="col-12 mt-1 text-center">
            <button class="btn">+ Tarefa</button>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <form class="col-12">
          <div class="form-group">
            <label for="exampleInputEmail1">Tarefa finalizada</label>
            <textarea
              type="text"
              rows="3"
              class="form-control"
              placeholder="Mensagem"
            />
            <small id="emailHelp" class="form-text text-muted"
              >Escreva a descrição da atividade realizada!!</small
            >
          </div>
        </form>
      </div>
      <footer class="row mt-5 footer">
        <div class="p-3 col-12 d-flex justify-content-end">
          <button @click="startTime()" class="btn btn-outline-dark">
            Commit
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import ProjectDescribe from "./ProjectDescibe";
import multselectProjetc from "./MultselectProject";
import { ToggleButton } from "vue-js-toggle-button";

import momet from "moment";
export default {
  name: "ModalSelectTesck",
  components: { ProjectDescribe, multselectProjetc, ToggleButton },
  data() {
    return {
      notTesck: false,
      tescks_selected: null,
    };
  },
  computed: {
    tescks() {
      return this.$store.state.productSelected.tescks;
    },
    timeNow() {
      return moment();
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("cleanSelectProject");
      this.$emit("close");
    },
    startTime() {
      this.$store.commit("startTime", this.timeNow);
      console.log(this.timeNow);
      this.$emit("close");
    },
    taskSelecting(item) {
      this.tescks_selected = item;
    },
    swethChange(value) {
      this.notTesck = value.value;
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
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
  .btn {
    color: #444;
    border-bottom: 1px solid #444;
    padding: 4px;
    border-radius: 0;
  }
}
</style>
