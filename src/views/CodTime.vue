<template>
  <div class="px-5 py-2">
    <BarTop />
    <div class="row my-5 ">
      <div class="col-md-12 d-flex justify-content-center">
        <SelectProject />
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-12  subtitle">
        <h3>Projetos</h3>
      </div>
    </div>
    <div class="row">
      <div v-for="(item, i) in projects" :key="i" class="col-3 mb-3">
        <CardProject
          :title="item.name"
          :tesks="item.tescks.length"
          :hours="item.total_hours"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectProject from "../components/AreaWorking";
import BarTop from "../components/BarTop";
import CardProject from "../components/Projects/CardProjects";

import Projects from "../data/projetcs";
export default {
  name: "CodTime",
  components: { BarTop, SelectProject, CardProject },
  computed: {
    projects() {
      return Projects.projects;
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
