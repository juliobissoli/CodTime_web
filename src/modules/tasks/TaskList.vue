<template>
  <div class="row p-0">
    <div class="col-12 p-4 px-4 bg-white divider_bottom">
      <div class="row px-3">
        <div class="col-4 p-0 d-flex align-items-center">
          <span class="title22 mr-4">
            Tarefas de:
            <small class="f14-light">({{ filter | rangeDateGlobal }})</small>
          </span>
          <AvatarList  :list="collaboratorsFiltered" />
        </div>
        <div class="col-4">
          <!-- <input type="text" class="form-control" /> -->
        <BarTop @get-search="changeFilter" 
        :not_scope="true"
        placeholder="Buscar por titulo ou descrição" />

        </div>
        <div class="col-4 pr-1 d-flex justify-content-end">
          <FilterDefault 
            :date_end="filter.date_end" 
            :date_init="filter.date_init"
            :avatar_list="allCollaborators"
            @change-filter="changeFilter"
             />
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="row p-3">
        <div class="col-3 px-2 ">
          <TaskListItem
            title="Pendente"
            badge_class="badge-danger"
            :list="mapTasks2State.get(0)"
          />
        </div>
        <div class="col-3 px-2 ">
          <TaskListItem
            title="Em andamento"
            badge_class="badge-primary"
            :list="mapTasks2State.get(1)"
          />
        </div>
        <div class="col-3 px-2 ">
          <TaskListItem
            title="Em revisão"
            badge_class="badge-warning"
            :list="mapTasks2State.get(2)"
          />
        </div>
        <div class="col-3 px-2 ">
          <TaskListItem
            title="Concluído"
            badge_class="badge-success"
            :list="mapTasks2State.get(3)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskListItem from "../../components/task/ListTaskItem.vue";
import FilterDefault from '../../components/utils/FilterDefalt.vue'
import AvatarList from '../../components/utils/AvatarList.vue'
import BarTop from '../../components/project/BarTop.vue'
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "IssueList",
  components: { TaskListItem, FilterDefault, AvatarList, BarTop},
  data() {
    return {
      filter: {
        date_init: moment().startOf("month").format("YYYY-MM-DD"), //fim
        date_end: moment().endOf("month").format("YYYY-MM-DD"), //inicio
        project_id: [],
        assignee_list: [],
        assignee_id: null
      },
    };
  },
  created() {
    if (this.projectList.length > 0) {
      this.filter.project_id = this.projectList.map((el) => el.id)
      this.setIssues({ ...this.filter, project_id: this.projectList.map((el) => el.id) });
    }
  },
  computed: {
    ...mapGetters("issue", ["mapTasks2State"]),
    ...mapGetters("project", ["projectList", 'allCollaborators']),

    collaboratorsFiltered(){
      return this.filter.assignee_list.length > 0 ? this.filter.assignee_list : this.allCollaborators
    }
  },
  watch: {
    projectList() {
      this.filter.project_id = this.projectList.map((el) => el.id)
      this.setIssues({ ...this.filter, project_id: this.projectList.map((el) => el.id)});
    },
  },
  methods: {
    ...mapActions("issue", ["setIssues"]),
    changeFilter(event){
      Object.assign(this.filter, event)
      this.setIssues(this.filter)
    },
  },
};
</script>

<style lang="scss" scoped></style>
