<template>
  <div class="px-5 py-2">
    <BarTop />
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
    <!-- <div class="row">
      <div
        v-for="(item, i) in projects"
        :key="i"
        class="col-xl-3 col-lg-4 col-md-6 col-sm-12  mb-3"
      >
        <CardProject
          :title="item.name"
          :tesks="item.tescks.lenght"
          :hours="item.totla_minuts"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
import AreaWorking from "../components/AreaWorking";
import BarTop from "../components/BarTop";
// import CardProject from "../components/Projects/CardProjects";
import ProjectList from "../components/Projects/ProjectsList";

import Projects from "../data/projetcs";
export default {
  name: "CodTime",
  components: { BarTop, AreaWorking, ProjectList },
  created() {
    if (!this.user || !this.projects) {
      this.$store.dispatch("setValues");
    }
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

<style lang="scss" scoped>
.subtitle {
  // border-bottom: 1px solid #f1f1f1;
  // background-color: red;
}
</style>
