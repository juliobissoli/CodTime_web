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

      <form class="row mt-3">
        <div class="form-group col-12">
          <label>Nome</label>
          <input
            type="text"
            class="form-control  pr-1"
            placeholder="Nome do projeto"
            v-model="project_name"
          />
        </div>
        <div class="form-group col-12 mt-3">
          <label>Tipo de projeto</label>
          <select v-model="project_type" class="form-control">
            <option value="Web">Web</option>
            <option value="Designer">Designer</option>
            <option value="DevOps">DevOps</option>
            <option value="App">App</option>
            <option value="Dektop">Desktop</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
      </form>
      <footer class="row mt-5 footer">
        <div class="p-3 col-12 d-flex justify-content-end">
          <button @click="criateProject()" class="btn btn-outline-dark">
            Criar
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewProject",
  data() {
    return {
      project_name: "",
      project_type: "Web",
      mensageError: "",
    };
  },
  methods: {
    async criateProject() {
      if (this.project_name.length < 2 || this.project_type === null) {
        this.mensageError = "Coloca o nome bom pra esse projeto!!";
      } else {
        await this.$store.dispatch("createProject", {
          name: this.project_name,
          type: this.project_type,
        });
        this.$emit("close");
      }
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
