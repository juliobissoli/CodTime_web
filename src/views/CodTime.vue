<template>
  <div class="px-5 py-2">
    <BarTop />
    <router-view />
  </div>
</template>

<script>
import BarTop from "../components/BarTop";

import Projects from "../data/projetcs";
export default {
  name: "CodTime",
  components: { BarTop },
  created() {
    if (!this.user || !this.projects) {
      this.$store.dispatch("setValues");
    }
  },
};
</script>
