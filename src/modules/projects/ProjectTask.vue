<template>
  <div class="row p-0">
    <section class="col-12 bg-white p-3">
      <div class="page-wrapper">
        <BarTop  @get-search="handleChangeFilter" placeholder="Buscar tarefa" btn_label="+ Tarefa" >
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
            Issues({{issueList.length}})
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
    this.setIssues(this.filter);
  },
  computed: {
    ...mapGetters("project", [
      "projectDetail",
      "mapCollaborators",
      'collaboratorsList'
    ]),
    ...mapGetters("issue", ["mapTasks2State", 'issueList']),
    taskStyles() {
      return this.$store.getters.mapGlobalTaskStatusStyle;
    },

    tasksFiltered(){
      return this.issueList.sort((a, b) => a.status - b.status)
    },

    members(){
     const  list = this.collaboratorsList.filter(el => el.project_id == this.id)
     return list.length > 0 ? list[0].list : []
    },

    ...mapState('project', ['map_collaborators_project'])
  },
  methods: {
    ...mapActions("issue", ["setIssues"]),
    handleChangeFilter(event){
      // this.filter.date_init = event.date_init
      // this.filter.date_end = event.date_end

      Object.assign(this.filter, event)

      this.setIssues({...event, project_id: this.id});
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
