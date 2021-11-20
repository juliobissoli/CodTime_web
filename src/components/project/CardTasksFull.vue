<template>
  <div class="card shadow-sm">
    <header
      class="divider_bottom px-3 py-2 title truncate line-clap-2"
      :style="styleStatus.get(task.status)"
    >
      <span class="f-16">#{{ task.iid }} {{ task.title }}</span>
    </header>

    <section class=" px-3 py-2 truncate describe line-clap-4">
      <span v-for="(line, i) in task.description_lines " :key="i" class="f-12 ">
        {{line}} <br>
      </span>
    </section>
    <section class="px-3 py-1 d-flex flex-column">
      <span class="f-12 text-secondary">
        Milestone:
        <span v-if="task.milestone" :class="`text-${styleStatus.get(task.status).class}`">#{{ task.milestone ? task.milestone.iid : '--'}}</span>
      </span>
      <span class="f-12 text-secondary">
        Status:
        <span :class="`text-${styleStatus.get(task.status).class}`">
          {{  styleStatus.get(task.status).label | firstChartUpper}}
        </span>
      </span>
      <DifficultyInfo :difficulty="task.time_stats.time_estimate" />
    </section>
    <footer
      class="f-12 d-flex justify-content-between align-items-center divider_top px-3 py-2"
    >
      <span class="text-secondary">{{styleStatus.get(task.status).action_label}} {{task.updated_at | fromNowFormatGlobal}}</span>
      <div style="width: 30px; height: 30px">
        <Avatar :item="task.assignee" :small="null" />
      </div>
    </footer>
  </div>
</template>

<script>
import moment from 'moment';
import Avatar from "../utils/Avatar.vue";
import DifficultyInfo from "../utils/DifficultyTaskInfo.vue";
export default {
  name: "CardTaskFull",
  props: { task: Object },
  components: { Avatar, DifficultyInfo },

  computed: {
    styleStatus() {
      return this.$store.getters.mapGlobalTaskStatusStyle;
    },
  },
  filters: {
    firstChartUpper(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    dateFromNow(date){
      return date ? moment(date).fromNow() : '--'
    }
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
  .title {
    height: 60px;
    border-radius: 10px 10px 0 0;
    
  }
  .describe{
    height: 94px;
  }
  .avatar {
    height: 34px;
    width: 34px;
  }

  // .truncate{
  //      border-radius: 10px 10px 0 0;
  //   width: 100%;
  //   // white-space: nowrap;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  // }
}
.icon {
  height: 20px;
  width: 20px;
}

.text-muted {
  color: #999999;
}
small {
  font-size: 12px;
}
.text-warning{
  color: #BF78CA !important;
}
</style>
