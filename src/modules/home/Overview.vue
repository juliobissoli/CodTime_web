<template>
  <div>
    <NewProject v-show="newProject" @close="newProject = false" />
    <div class="row  bg-white ">
      <div class="col-12  my-5 pb-5  page-wrapper ">
        <div class="row p-0">
          <div class="col-7">
            <UserOverview />
          </div>
          <div class="col-5  d-flex justify-content-end bg-white  p-0">
            <div>
              <button
                @click="newProject = !newProject"
                class="btn btn-outline-dark px-5"
              >
                Projeto
              </button>
            </div>
            <div class="pl-3">
              <button
                @click="newProject = !newProject"
                class=" btn btn-dark px-5"
              >
                Iniciar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-3  describe-area">
      <div class=" page-wrapper col-12">
        <div class="row">
          <div class="col-7 ">
            <ProjectList :list="projectList" />
          </div>
          <div class="col-5 pl-5">
            <h3>Últimos commits:</h3>
            <div class="mt-3">
              <LastCommitItem :list="commitsList" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AreaWorking from "../../components/AreaWorking";
import ProjectList from "../../components/home/ProjectsList.vue";
import NewProject from "../../components/statistcst/NewProject";

import UserOverview from "../../components/home/UserOverview.vue";
import LastCommitItem from "../../components/home/LastCommitsItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "WorArea",
  components: {
    AreaWorking,
    ProjectList,
    NewProject,
    UserOverview,
    LastCommitItem,
  },
  data() {
    return {
      newProject: false,
    };
  },
  async created() {
    if (this.projectList) {
      if (this.commitsList.length == 0) {
        this.projectList.forEach((el) => {
          this.setCommits(el.id);
        });
      }
    }

    // await this.setUser();
    // await this.setProjects().then(
    //   res => {
    //     console.log('Ta aqui --> ', res)
    //     res.forEach(el => {
    //       this.setCommits(el.id)
    //     })
    //     // this.setCommits();
    //   }
    // );
  },

  watch: {
    projectList() {
      if (this.projectList) {
        if (this.commitsList.length == 0) {
          this.projectList.forEach((el) => {
            this.setCommits(el.id);
          });
        }
      }
    },
  },
  computed: {
    ...mapGetters("hours", ["commitsList"]),
    ...mapGetters("project", ["projectList", "allCollaborators"]),
    // ...mapGetters("/", ["projectList"]),
    // projectList(){
    //   return this.$store.getters.projectList
    // },

    user() {
      return this.$store.state.user;
    },
    // projects() {
    //   return this.$store.state.projects;
    // },
  },

  methods: {
    ...mapActions("user_info", ["setUser"]),
    ...mapActions("hours", ["setCommits"]),
    ...mapActions("project", ["setProjects"]),
  },
};
</script>

<style lang="scss" scoped>
.describe-area {
  margin-top: -40px;
}
</style>
