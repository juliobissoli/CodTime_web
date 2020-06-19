<template>
  <div class="modal">
    <div class="modal_body p-3">
      <header class="row header">
        <div class="col-10 ">
          <span>Selecionar projeto</span>
        </div>
        <div class="col-2 p-0 d-flex justify-content-end" @click="closeModal()">
          <button class="btn btn-lg btn-outline-dark" style="border:none">
            X
          </button>
        </div>
      </header>

      <div class="row mt-5">
        <div class="col-12">
          <multiselect
            @select_result="projectsSelecting"
            :options_select="projects"
          />
        </div>
      </div>
      <div class="row p-3">
        <div v-if="projectSelected !== null" class="col-12 ">
          <ProjectDescribe :item="projectSelected" />
        </div>
      </div>

      <footer class="row mt-5 footer">
        <div class="p-3 col-12 d-flex justify-content-end">
          <button @click="startTime()" class="btn btn-outline-dark">
            Start
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import multiselect from "./MultselectProject";
import ProjectDescribe from "./ProjectDescibe";
import Projects from "../../data/projetcs";
import momet from "moment";
export default {
  name: "ModalSelectProject",
  components: { multiselect, ProjectDescribe },
  data() {
    return {
      option: null,
    };
  },
  created() {
    this.option = this.projects;
  },
  computed: {
    projectSelected() {
      return this.$store.state.projectSelected;
    },
    timeNow() {
      return momet();
    },
    projects() {
      const list = this.$store.state.projects;
      // const list = Projects.projects;
      const l = list.map((el) => {
        return el;
      });
      console.log(l);
      return l;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("cleanSelectProject");
      this.$emit("close");
    },
    startTime() {
      this.$store.dispatch("startTime");
      this.$emit("close");
      console.log(this.$store.state.timeRuning);
    },
    projectsSelecting(item) {
      this.$store.commit("selectProject", item);
      console.log(this.$store.state.projectSelected);
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
