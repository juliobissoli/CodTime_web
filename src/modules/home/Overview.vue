<template>
  <div>
    <div class="row  bg-white ">
      <div class="col-12  my-5 pb-5  page-wrapper ">
        <div class="row p-0">
          <div class="col-12 col-md-7">
            <UserOverview />
          </div>
          <div class="col-12 col-md-5  d-flex justify-content-end bg-white pt-5  p-0">
            <div>
              <button
                @click="showHelper({topic: 'project'})"
                class="btn btn-outline-dark px-5"
              >
                + Projeto
              </button>
            </div>
            <div class="pl-3">
              <button
                @click="showHelper({topic: 'hour'} )"
                class=" btn btn-dark px-5"
              >
                + Hora
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
import ProjectList from "../../components/home/ProjectsList.vue";
import UserOverview from "../../components/home/UserOverview.vue";
import LastCommitItem from "../../components/home/LastCommitsItem.vue";
import { mapActions, mapGetters } from "vuex";
import moment from 'moment';
export default {
  name: "WorArea",
  components: {
    ProjectList,
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
          this.setCommits(this.projectList.map(el=> el.id));
      }


    }

    this.setIssues({
      date_init: moment().startOf('month').format('YYYY-MM-DD'),
      date_end: moment().endOf('month').format('YYYY-MM-DD'),
      })
  },

  watch: {
    projectList() {
      if (this.projectList) {
        if (this.commitsList.length == 0) {
          
          this.setCommits(this.projectList.map(el=> el.id));
        }
      }
    },
  },
  computed: {
    ...mapGetters("hours", ["commitsList"]),
    ...mapGetters("project", ["projectList", "allCollaborators"]),

    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    ...mapActions("user_info", ["setUser"]),
    ...mapActions("hours", ["setCommits"]),
    ...mapActions("project", ["setProjects"]),
    ...mapActions("issue", ["setIssues"]),
    ...mapActions(['showHelper'])

  },
};
</script>

<style lang="scss" scoped>
.describe-area {
  margin-top: -40px;
}
</style>
