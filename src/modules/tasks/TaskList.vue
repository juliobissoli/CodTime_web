<template>
  <div class="row p-0">
    <div class="col-12 p-4 px-4 bg-white divider_bottom">
      <div class="row ">
        <div class="col-4 ">
          <span class="title22">Essa semana  <small class="text14_light">(04 a 10 Jun 2021)</small></span>
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
          <TaskListItem title="Pendente" badge_class="badge-danger" :list="mapTasks2State.get(0)" />
        </div>
        <div class="col-3 px-2 ">
           <TaskListItem title="Em andamento" badge_class="badge-primary" :list="mapTasks2State.get(1)" />
        </div>
        <div class="col-3 px-2 ">
           <TaskListItem title="Em revisão" badge_class="badge-warning" :list="mapTasks2State.get(2)" />
        </div>
        <div class="col-3 px-2 ">
          <TaskListItem title="Concluído" badge_class="badge-success" :list="mapTasks2State.get(3)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskListItem from '../../components/task/ListTaskItem.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "TaskList",
  components: {TaskListItem},
  created(){
    this.setTasks()
  },
  computed: {
    ...mapGetters('task',['mapTasks2State'])
  },
  methods: {
    ...mapActions('task',['setTasks'])
  }
}
</script>

<style lang="scss" scoped></style>
