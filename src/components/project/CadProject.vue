<template>
  <div class="card shadow-sm rounded d-flex flex-column">
    <section class=" divider_bottom">
      <BoxImage :image="project.avatar_url" />
    </section>
    <section class="body p-4">
      <header class="d-flex justify-content-between">
        <legend>{{ project.name }}</legend>
        <div><span class="badge badge-primary">Gerente</span></div>
      </header>
      <div class="mb-2">
        <span class="text-primary pr-1 divider_right">Sprint atual: 21</span>
        <span class="text-secondary ml-1">Contribuição 32h 24min </span>
      </div>
      <span class="w-100">Tarefas:</span>
      <div class="task-area">
        <!-- <div
          v-for="(task, i) in project.tasks.length > 3
            ? project.tasks.slice(0, 3)
            : project.tasks"
          :key="i"
          class="mt-1 "
        >
          <TaskLabel :class_color="statusStyles.get(task.status).class">
            <span class="text-secondary mr-1">#{{ task.id }}</span>
            <span class="task-item">{{ task.name }}</span>
          </TaskLabel>
        </div> -->
      </div>
    </section>
    <footer class="d-flex flex-row-reverse px-4 py-3">
      <AvatarList
        :list="mapCollaborators.get(project.id)"
      />
      <!-- <span v-else class="text-muted">Somente você</span> -->
    </footer>
  </div>
</template>

<script>
import TaskLabel from "../utils/LabelColorIndicator.vue";
import AvatarList from "../utils/AvatarList.vue";
import BoxImage from "../utils/BoxImage.vue";
import { mapGetters } from 'vuex';

export default {
  name: "CardProject",
  props: { project: Object },
  components: { TaskLabel, AvatarList, BoxImage },
  computed: {
    statusStyles() {
      return this.$store.getters.mapGlobalTaskStatusStyle;
    },
    ...mapGetters("project", ['mapCollaborators'])
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  .text-secondary {
    color: #999999;
    font-weight: 400;
  }
  span {
    font-size: 14px;
  }

    footer{
        height: 62px;
    }
  .task-area {
    height: 90px;

    // .task-item {
    //   width: 100px;
    //   white-space: nowrap;
    //   overflow: hidden;
    //   text-overflow: ellipsis;
    //   resize: horizontal;
    // }
  }
}
</style>
