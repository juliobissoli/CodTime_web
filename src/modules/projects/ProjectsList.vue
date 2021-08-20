<template>
  <!-- <router-view /> -->
  <section>
    <div class="row bg-white  divider_bottom p-2 pr-4 ">
      <div class="col-12 page-wrapper">
        <div class="row ">
          <div class="col-10">
            <input type="text" class="form-control" />
          </div>
          <button class="col-2 btn btn-dark">Filter</button>
        </div>
      </div>
    </div>
    <div class="row page-wrapper p-2">
      <div class="col-12 ">
        <div class="row">
          <div v-for="(project, i) in projectList" :key="i" class="col-6  p-1 pb-3 ">
            <div class=" p-1 pb-3 " @click="changeToPage(project)">
              <CadProject :project="project" /> 
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CadProject from "../../components/project/CadProject.vue";
export default {
  name: "ProjectList",
  components: { CadProject },
  created(){
    this.setProjects()
  },
  computed: {
    ...mapGetters('project' ,['projectList']),
  },
  methods: {
    ...mapActions('project', ['setProjects']),

    changeToPage(project) {
      this.$router.push({ name: "ProjectDetail", params: {id: project.id} });
    },
  },
};
</script>
<style lang="scss" scoped>
// button{
//   border: none;
//   background-color: transparent;
// }
</style>
