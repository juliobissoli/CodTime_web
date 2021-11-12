<template>
  <div class="row p-0">
    <section class="col-12 bg-white p-3">
      <div class="page-wrapper">
        <BarTop placeholder="Buscar tarefa" btn_label="+ Tarefa" />
      </div>
    </section>
    <div class="col-12 py-3 px-0 page-wrapper">
      <!-- <h1>Lista de Epcs</h1> -->
      <header class="d-flex divider_bottom justify-content-between">
        <div class="d-flex align-items-center">
          <!-- <span class="ml-2 f14-light">({{}})</span> -->
        </div>
        <!-- <div class="d-flex">
          <AvatarList :list="[{ url: null }]" />
          <h4 class="ml-5 text-secondary">Total: 21</h4>
        </div> -->
      </header>
      <section class="row my-3">
        <div class="col-3 mb-3" v-for="(task, i) in tasksListBackLog" :key="i">
          <CardTask :task="task" />
        </div>
      </section>
      <header class="d-flex divider_bottom justify-content-between">
        <div class="d-flex align-items-center">
          <h4 class="">Sprint Tasks</h4>
          <!-- <span class="ml-2 f14-light">({{}})</span> -->
        </div>
        <!-- <div class="d-flex">
          <AvatarList :list="[{ url: null }]" />
          <h4 class="ml-5 text-secondary">Total: 21</h4>
        </div> -->
      </header>

      <section class="row mt-3">
        <div class="col-3 mb-3" v-for="(task, i) in issues" :key="i">
          <CardTask :task="task" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BarTop from "../../components/project/BarTop.vue";
import CardTask from "../../components/project/CardTasksFull.vue";
import AvatarList from "../../components/utils/AvatarList.vue";
export default {
  name: "ProjectTask",
  components: { BarTop, CardTask, AvatarList },
  props: ['id'],
  created(){
    if(this.issues.length === 0){
      this.setTasks(this.id)
    }
  },
  computed: {
    ...mapGetters("project", ["tasksList", 'tasksListBackLog', 'projectDetail']),
    ...mapGetters('task', {tasks: 'taskProject'}),
    issues(){  return this.tasks(this.projectDetail.id)}
  },
  methods: {
    ...mapActions('task', ['setTasks'])
  }

};
</script>
