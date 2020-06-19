<template>
  <div>
    <div class="row my-5 ">
      <div class="col-md-12 d-flex justify-content-center">
        <AreaWorking />
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-12  subtitle">
        <h3>Projetos</h3>
      </div>
    </div>
    <ProjectList :list="projects" />
  </div>
</template>

<script>
import AreaWorking from "../../components/AreaWorking";
import ProjectList from "../../components/Projects/ProjectsList";

export default {
  name: "WorArea",
  components: { AreaWorking, ProjectList },
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
