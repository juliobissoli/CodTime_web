<template>
  <div class="card shadow-sm">
    <header class=" px-3 pt-2 pb-0">
      <h5 class="m-0">{{ projectMap.get(task.project_id).name }}</h5>
    </header>
    <section class=" p-3">
      <span class="text-muted">#{{ task.iid }}</span>
      <span class="ml-1">{{ task.title }}</span>
    </section>
    <footer class="d-flex justify-content-between divider_top px-3 py-2">
      <div class="d-flex align-items-center">
        <small
          v-if="task.time_stats.time_estimate !== 0"
          class=" d-flex  text-muted align-items-center p-0 mr-3"
        >
          <i class="icon icon-thermostat"></i>
          {{ (task.time_stats.time_estimate / 60) | horusFormatGlobal }}
        </small>

        <small
          v-if="task.time_stats.total_time_spent !== 0"
          class=" d-flex badge badge-secondary text-muted align-items-center p-0 px-1"
        >
          <i class="icon icon-timer "></i>
          {{ (task.time_stats.total_time_spent / 60) | horusFormatGlobal }}
        </small>
        <!-- <small class="text-muted">{{task.difficulty}}</small> -->
      </div>
      <div class="d-flex align-items-center">
        <small class="text-muted" v-show="task.milestone"
          >Sprint: #{{ task.milestone ? task.milestone.iid : "" }}</small
        >
        <!-- <BadgePriority class="ml-1" :priority="task.epc.priority" /> -->
        <div class="avatar ml-1">
          <Avatar :item="task.collaborator" :small="true" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import BadgePriority from "../utils/BadgePriority.vue";
import Avatar from "../utils/Avatar.vue";
export default {
  name: "KambanCardTask",
  props: { task: Object },
  components: { BadgePriority, Avatar },
  computed: {
    projectMap() {
      return this.$store.getters.mapProjects;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  border: 1px solid #f1f1f1f1;
  background-color: #ffffff;
  font-size: 14px;
  cursor: pointer;

  .avatar {
    height: 34px;
    width: 34px;
  }
}
.icon {
  height: 16px;
  width: 16px;
}
.icon-timer {
  background-color: #999999;
}

.text-muted {
  color: #999999;
}
small {
  font-size: 12px;
}
</style>
