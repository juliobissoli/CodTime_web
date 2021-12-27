<template>
  <!-- <router-view /> -->
  <section>
    <div class="row bg-white divider_bottom p-2 pr-4">
      <div class="col-12 page-wrapper">
        <div class="row">
          <div class="col-12 px-4">
            <BarTop
              @get-search="handleChangeFilter"
              placeholder="Buscar milestone"
              :not_scope="true"
              btn_label="+ Milestone"
            />
          </div>
          <!-- <div class="col-10">
            <input type="text" class="form-control" />
          </div>
          <button class="col-2 btn btn-dark">+Projeto</button> -->
        </div>
      </div>
    </div>
    <div class="row page-wrapper p-2">
      <div class="col-12">
        <div class="row">
          <div
            v-for="(project, i) in projectFiltereds"
            :key="i"
            class="col-6 p-1 pb-3"
          >
            <div class="p-1 pb-3" @click="changeToPage(project)">
              <CadProject :project="project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BarTop from "../../components/project/BarTop.vue";
import CadProject from "../../components/project/CadProject.vue";
export default {
  name: "ProjectList",
  components: { CadProject, BarTop },
  data(){
    return {
      search: ''
    }
  },
  created() {
    this.setProjects();
  },
  computed: {
    ...mapGetters("project", ["projectList"]),
    
    projectFiltereds(){
      return this.projectList.filter(el => 
       this.search.length  ? el.name.toLowerCase().includes(this.search.toLowerCase()): true 
      )
    }
  },
  methods: {
    ...mapActions("project", ["setProjects"]),

    changeToPage(project) {
      this.$router.push({ name: "ProjectDetail", params: { id: project.id } });
    },
    handleChangeFilter(event){
      this.search = event.search
    }
  },
};
</script>
<style lang="scss" scoped>
// button{
//   border: none;
//   background-color: transparent;
// }
</style>
