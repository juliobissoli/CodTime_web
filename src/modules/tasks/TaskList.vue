<template>
  <div class="row p-0">
    <div class="col-12 p-4 px-4 bg-white divider_bottom">
      <div class="row ">
        <div class="col-4 ">
          <span class="title22">
            Tarefas de:
            <small class="f14-light">({{ filter | rangeDateGlobal }})</small>
          </span>
        </div>
        <div class="col-4">
          <input type="text" class="form-control" />
        </div>
        <div class="col-4 pr-1 d-flex justify-content-end">
          <div>
            <button class="btn btn-outline-dark">Filter</button>
          </div>
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
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "TaskList",
  components: { TaskListItem },
  data() {
    return {
      filter: {
        date_init: moment()
          .startOf("month")
          .format("YYYY-MM-DD"), //fim
        date_end: moment()
          .endOf("month")
          .format("YYYY-MM-DD"), //inicio
      },
    };
  },
  created() {
    if (this.projectList.length > 0) {
      console.log(this.projectList.map((el) => el.id));
      this.setTasks({ ...this.filter, project_id: this.projectList.map((el) => el.id) });
    }
  },
  computed: {
    ...mapGetters("task", ["mapTasks2State"]),
    ...mapGetters("project", ["projectList"]),
    // rangeDateFilter(){
    //   return `${moment(this.filter.date_init).format('DD')} a ${moment(this.filter.date_end).format('DD MMM YYYY')}`
    // }
  },
  watch: {
    projectList() {
      console.log(typeof this.projectList.map((el) => el.id));
      this.setTasks({ ...this.filter, project_id: this.projectList.map((el) => el.id)});
    },
  },
  methods: {
    ...mapActions("task", ["setTasks"]),
  },
};
</script>

<style lang="scss" scoped></style>
