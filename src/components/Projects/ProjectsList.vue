<template>
  <div class="row">
    <div
      v-for="(item, i) in list"
      :key="i"
      class="col-xl-3 col-lg-4 col-md-6 col-sm-12  mb-3"
    >
      <CardProject
        :title="item.name"
        :tesks="item.tasks.length"
        :hours="item.totla_minuts"
      />
    </div>
  </div>
  <!-- <div v-else class="row">
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12  mb-3">
      <CardProject title="Criar projeto" tesks="" hours="" />
    </div>
  </div> -->
</template>

<script>
import CardProject from "./CardProjects";

export default {
  name: "ProjectList",
  props: ["list"],
  components: { CardProject },
};
</script>
