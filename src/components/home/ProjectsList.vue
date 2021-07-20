<template>
  <div class="row">
    <div
      v-for="(item, i) in list"
      :key="i"
      class="col-12  mb-3"
    >
      <CardProject
        @card-clicked="cardClicked(item)"
        :project="item"
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
import CardProject from "./CardProjects.vue";

export default {
  name: "ProjectList",
  props: ["list"],
  components: { CardProject },
  methods: {
    cardClicked(item) {
      this.$store.commit("detailProject", item);
      this.$router.push({ name: "StatistcstDetail" });
    },
  },
};
</script>
