<template>
  <div class="app p-0 m-0">
    <div>
      <MainMenu />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";

export default {
  name: "CodTime",
  components: { MainMenu },
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
  background-color: #fafafa;
  flex-direction: row;
  height: 100%;
  overflow: inherit !important;

  .main {
    // background-color: #f8f9fa;
    width: 100vw;
    height: calc(100vh - 65px);

    // overflow-x: auto;
    overflow-y: scroll;
    padding: 0 1rem 0 1rem;


  }


    /* Hide scrollbar for IE, Edge and Firefox */
    .main {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }

    .main::-webkit-scrollbar {
      display: none;
    }
}
</style>
