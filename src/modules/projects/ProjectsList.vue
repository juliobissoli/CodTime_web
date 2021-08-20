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
            <router-link class="col-6  p-1 pb-3 " :to="{ name: 'ProjectDetail',  params: {id: project.id} }">
              <CadProject :project="project" /> 
             </router-link>
          </div>
          <!-- <router-link class="col-6  p-1 pb-3 " :to="{ name: 'ProjectDetail' }">
            <CadProject /> </router-link
          >
          <router-link
            class="col-6  p-1 pb-3 "
            :to="{ name: 'ProjectDetail' }"
          >
            <CadProject />
          </router-link>
          <router-link class="col-6  p-1 pb-3 " :to="{ name: 'ProjectDetail' }">
            <CadProject />
          </router-link> -->

          <!-- <button class="col-6  p-1 pb-3 " @click.prevent="changeToPage()">
            <div class="p-5 shadow-sm bg-white rounded">
              <span> Projeto 1 </span><br />
              <small>Descrição do projeto</small><br /><br />
            </div>
          </button>
          <button class="col-6  p-1 pb-3 " @click.prevent="changeToPage()">
            <div class="p-5 shadow-sm bg-white rounded">
              <span> Projeto 1 </span><br />
              <small>Descrição do projeto</small><br /><br />
            </div>
          </button>
          <button class="col-6  p-1 pb-3 " @click.prevent="changeToPage()">
            <div class="p-5 shadow-sm bg-white rounded">
              <span> Projeto 1 </span><br />
              <small>Descrição do projeto</small><br /><br />
            </div>
          </button> -->
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

    changeToPage() {
      this.$router.push({ name: "ProjectDetail" });
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
