<template>
  <div class="row p-0">
    <section class="col-12 bg-white p-3">
      <div class="page-wrapper">
        <BarTop placeholder="Buscar tarefa" btn_label="+ Tarefa" >
          <FilterDefault 
            :date_init="filter.date_init" 
            :date_end="filter.date_end"
            :avatar_list="members"
            @change-filter="handleChangeFilter"
             />
        </BarTop>
      </div>
    </section>
    <section class="col-12 py-3 px-0 page-wrapper">
      <header class="d-flex divider_bottom justify-content-between">
        <div class="d-flex align-items-center">
          <span class="title22">
            Issues({{taskList.length}})
            <small class="f14-light">({{ filter | rangeDateGlobal }})</small>
          </span>
          <span v-for="(item, i) in status_view" :key="i" class="ml-1 badge" :class="'badge-'+taskStyles.get(item.status).class">
            {{mapTasks2State.get(item.status).length}}
          </span>
        </div>
        <div class="d-flex align-items-center">
          <AvatarList :list="members" />
        </div>
        {{map_collaborators_project.length}}
      </header>
      <section  class="row mt-3">
        <div
          class="col-3 mb-3"
          v-for="(task, i) in  tasksFiltered"
          :key="i"
        >
          <CardTask :task="task" />
        </div>
      </section>
      <!-- <section v-for="item in status_view" :key="item.status" class="row mt-3">
        <div class="col-12 mb-2 px-3 text-secondary">
          <div class="divider_bottom d-flex w-100 ">
            <button @click="item.is_visible = !item.is_visible"  class="btn btn-sm text-secondary text-uppercase d-flex">
              {{  taskStyles.get(item.status).label}}
              <i class="icon " :class="item.is_visible ? 'icon-arrow_down' : 'icon-arrow_up'"></i>
            </button>
          </div>
        </div>
        <div
          class="col-3 mb-3"
          v-for="(task, i) in item.is_visible ? mapTasks2State.get(item.status) : []"
          :key="i"
        >
          <CardTask :task="task" />
        </div>
      </section> -->
    </section>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions, mapGetters, mapState } from "vuex";
import BarTop from "../../components/project/BarTop.vue";
import CardTask from "../../components/project/CardTasksFull.vue";
import AvatarList from "../../components/utils/AvatarList.vue";
import FilterDefault from '../../components/utils/FilterDefalt.vue'
export default {
  name: "ProjectTask",
  components: { BarTop, CardTask, AvatarList, FilterDefault },
  props: ["id"],
  data() {
    return {
      status_view: [
        { status: 1, is_visible: true },
        { status: 2, is_visible: true },
        { status: 0, is_visible: true },
        { status: 3, is_visible: true },
      ],
      filter: {
        project_id: this.id,
        date_init: moment().startOf("month").format("YYYY-MM-DD"), //fim
        date_end: moment().endOf("month").format("YYYY-MM-DD"), //inicio
      },
    };
  },
  created() {
    // this.setFilter({
    //   date_init: "2021-11-10", //fim
    //   date_end: "2021-11-20", //inicio
    //   search: 'Estruturar',
    //   project_id: this.id,
    // });
    // if (this.issues.length === 0) {
    this.setTasks(this.filter);
    // }
  },
  computed: {
    ...mapGetters("project", [
      "projectDetail",
      "mapCollaborators",
      'collaboratorsList'
    ]),
    ...mapGetters("task", ["mapTasks2State", 'taskList']),
    taskStyles() {
      return this.$store.getters.mapGlobalTaskStatusStyle;
    },

    tasksFiltered(){
      return this.taskList.sort((a, b) => a.status - b.status)
    },

    members(){
     const  list = this.collaboratorsList.filter(el => el.project_id == this.id)
     return list.length > 0 ? list[0].list : []
    },

    ...mapState('project', ['map_collaborators_project'])
  },
  methods: {
    ...mapActions("task", ["setTasks"]),
    handleChangeFilter(event){
      this.filter.date_init = event.date_init
      this.filter.date_end = event.date_end
      this.setTasks({...event, project_id: this.id});
    },

  },
};
</script>

<style lang="scss" scoped>
.icon {
  height: 20px;
  width: 20px;
  background-color: #999999;
}
</style>
