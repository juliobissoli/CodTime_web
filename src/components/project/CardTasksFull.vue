<template>
  <div class="card shadow-sm">
    <header
      class="divider_bottom px-3 py-2 title truncate"
      :style="styleStatus.get(task.status)"
    >
      <span class="f-16">#{{ task.id }} {{ task.name }}</span>
    </header>
    <section class=" px-3 py-2 describe truncate">
      <span class="f-12 ">
        {{ task.description }}
      </span>
    </section>
    <section class="px-3 py-1 d-flex flex-column">
      <span class="f-12 text-secondary">
        Epx:
        <span :class="`text-${styleStatus.get(task.status).class}`">#12</span>
      </span>
      <span class="f-12 text-secondary">
        Status:
        <span :class="`text-${styleStatus.get(task.status).class}`">{{
          styleStatus.get(task.status).label | firstChartUpper
        }}</span>
      </span>
      <DifficultyInfo :difficulty="8" />
    </section>
    <footer
      class="f-12 d-flex justify-content-between align-items-center divider_top px-3 py-2"
    >
      <span class="text-secondary">iniciado a 4 horas</span>
      <div style="width: 30px; height: 30px">
        <Avatar :item="null" :small="null" />
      </div>
    </footer>
  </div>
</template>

<script>
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
    
  }
  .describe{
    height: 130px;
  }
  .avatar {
    height: 34px;
    width: 34px;
  }

  .truncate{
       border-radius: 10px 10px 0 0;
    width: 100%;
    // white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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
</style>
