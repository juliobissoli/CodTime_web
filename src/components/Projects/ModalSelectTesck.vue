<template>
  <div class="modal">
    <div class="modal_body p-3">
      <header class="row header">
        <div class="col-10 ">
          <span>Finalizar Trabalho</span>
        </div>
        <div
          class="col-2 pr-3 d-flex justify-content-end"
          @click="closeModal()"
        >
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
            <!-- <toggle-button
              :value="notTesck"
              @change="swethChange"
              widt="80"
              :labels="{ checked: 'on', unchecked: 'off' }"
            /> -->
          </div>
        </div>
        <div class="row p-3 " v-show="!notTesck">
          <div v-if="!newTask" class="col-12 p-3 bg-light rounded">
            <div class="">
              <multselectProjetc
                @select_result="taskSelecting"
                :options_select="tescks"
              />
            </div>
            <div class=" text-center mt-3">
              <button @click="newTask = true" class="btn">+ Tarefa</button>
            </div>
          </div>
          <!-- New task -->
          <div v-else class="col-12 p-3 bg-light rounded">
            <div class="">
              <div class="col-12">
                <div class="form-group row">
                  <input
                    type="text"
                    class="form-control col-10 pr-1"
                    placeholder="Nome da tarefa"
                    v-model="newTaskName"
                  />
                  <div class="col-2 pr-0">
                    <button
                      style="width:100%"
                      class="btn btn-lg btn-outline-dark rounded"
                      @click="createTask()"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class=" text-center mt-3">
              <button @click="newTask = false" class="btn">
                Voltar
              </button>
            </div>
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
              placeholder="Escreva a descrição da atividade realizada!!"
              v-model="mensage"
            />
          </div>
        </form>
      </div>
      <div v-show="mensageError" class="alert alert-danger">
        {{ mensageError }}
      </div>
      <div v-show="mensageSuccess" class="alert alert-success">
        {{ mensageSuccess }}
      </div>
      <footer class="row mt-5 footer">
        <div class="p-3 col-12 d-flex justify-content-between">
          <button
            @click="calcelCommit()"
            style="border: none"
            class="btn btn-outline-danger rounded"
          >
            Cancelar
          </button>
          <button @click="finishRunning()" class="btn btn-outline-dark rounded">
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
      task_selected: null,
      mensage: "",
      task: "",
      task_id: null,
      mensageError: "",
      newTask: false,
      newTaskName: "",
      mensageSuccess: "",
    };
  },
  watch: {
    mensageError() {
      if (this.mensageError.length > 0) {
        setInterval(() => {
          this.mensageError = "";
        }, 4000);
      }
    },
    mensageSuccess() {
      if (this.mensageSuccess.length > 0) {
        setInterval(() => {
          this.mensageSuccess = "";
        }, 8000);
      }
    },
  },
  computed: {
    tescks() {
      return this.$store.state.projectSelected.tasks;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },

    taskSelecting(item) {
      this.task_selected = item;
      this.task = item.name;
      this.task_id = item.id;
    },
    swethChange(value) {
      this.notTesck = value.value;
    },
    validateCommit() {
      if (this.mensage.length < 5) {
        this.mensageError = "Escreve direito esse commit !!";
        return false;
      } else if (!this.notTesck && this.task_selected == null) {
        this.mensageError =
          'Selecione uma tarefa ou desmarque "Associar a uma tarefa"';
        return false;
      }
      return true;
    },
    async finishRunning() {
      if (this.validateCommit()) {
        await this.$store.dispatch("setCommit", {
          mensage: this.mensage,
          task: this.task,
          task_id: this.task_id,
        });
        await this.$store.dispatch("finishTime");
        this.$emit("close");
      }
    },
    async createTask() {
      if (this.newTaskName.length > 5) {
        await this.$store.dispatch("createTask", this.newTaskName);
        this.task_selected = this.$store.state.dataTamp;
        this.mensageSuccess = `A tarefa '${this.task_selected.name}' foi criada com sucesso`;
      } else {
        this.mensageError = "Escreve certo essa tarefa irmão!!";
      }
    },
    async calcelCommit() {
      await this.$store.dispatch("finishTime");
      this.$emit("close");
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
}
</style>
