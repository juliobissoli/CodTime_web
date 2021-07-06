<template>
  <div class="app p-0 m-0">
    <div>
      <BarTop />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import BarTop from "../components/BarTop";

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

<style lang="scss" scoped>
.app {
  // display: flex;
  background-color: #FAFAFA;
  flex-direction: row;
  height: 100%;
  overflow: inherit !important;

  .main {
    // background-color: #f8f9fa;
    width: 100vw;
    height: calc(100vh - 65px);
    
    overflow-x: auto;
    padding: 0 1rem 0 1rem;
  }
}
</style>
