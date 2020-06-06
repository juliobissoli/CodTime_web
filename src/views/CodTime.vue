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
      <div v-for="i in 5" :key="i" class="col-3 mb-3">
        <CardProject title="Linhagua" tesks="23" hours="34" />
      </div>
    </div>
  </div>
</template>

<script>
import SelectProject from "../components/SelectProject";
import BarTop from "../components/BarTop";
import CardProject from "../components/Projects/CardProjects";

export default {
  name: "CodTime",
  components: { BarTop, SelectProject, CardProject },
};
</script>

<style lang="scss" scoped>
.subtitle {
  // border-bottom: 1px solid #f1f1f1;
  // background-color: red;
}
</style>
