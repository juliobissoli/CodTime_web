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
</template>

<script>
import CardProject from "./CardProjects.vue";

export default {
  name: "ProjectList",
  props: ["list"],
  components: { CardProject },
  methods: {
    cardClicked(item) {
       this.$router.push({ name: "ProjectDetail", params: { id: item.id } });
    },
  },
};
</script>
