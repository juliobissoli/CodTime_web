<template>
  <div>
    <NewProject v-show="newProject" @close="newProject = false" />
    <div class="row my-5 ">
      <div class="col-md-12 d-flex justify-content-center">
        <AreaWorking />
      </div>
    </div>

    <div class="row mt-5 mb-3">
      <div class="col-md-12 d-flex justify-content-between subtitle">
        <h3>Projetos</h3>
        <button
          @click="newProject = !newProject"
          class="btn btn-outline-dark rounded"
        >
          + Projeto
        </button>
      </div>
    </div>
    <ProjectList :list="projects" />
  </div>
</template>

<script>
import AreaWorking from "../../components/AreaWorking";
import ProjectList from "../../components/statistcst/ProjectsList";
import NewProject from "../../components/statistcst/NewProject";
export default {
  name: "WorArea",
  components: { AreaWorking, ProjectList, NewProject },
  data() {
    return {
      newProject: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>
