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
import {mapActions} from 'vuex'
export default {
  name: "CodTime",
  components: { MainMenu },
  async created() {
    if (!this.user || !this.projects) {
      await this.setUser();
      await this.setProjects()
      .then(res => {
          this.setCollaborators(res)
      })
    }
  },

  methods: {
      ...mapActions("user_info", ["setUser"]),
      ...mapActions('project', ['setCollaborators']),
      ...mapActions('hours', ['setCommits']),
      ...mapActions(['getProjects']),
      ...mapActions('project', ['setProjects'])
  }
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
