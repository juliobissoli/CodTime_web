<template>
  <div class="card shadow-sm rounded d-flex flex-column">
    <section class=" divider_bottom">
      <BoxImage :image="project.avatar_url" />
    </section>
    <section class="body p-4">
      <header class="d-flex justify-content-between">
        <legend>{{ project.name }}</legend>
        <div v-if="accessLevel">
          <span class="badge badge-primary">
            {{ accessLevel.label }}
          </span>
        </div>
      </header>
      <div class="mb-2">
        <span class="text-primary pr-1 divider_right" >
          ID: {{ project.id }}
        </span>
        <span class="text-secondary ml-1">
          Ultimas atividade:
          {{ project.last_activity_at | fromNowFormatGlobal }}
        </span>
      </div>
      <div class="d-flex">
        <span>Repositório</span>
        <span class="bg-light rounded text-secondary px-2">
          {{ project.name_with_namespace }}
        </span>

      </div>
    </section>
    <footer class="d-flex flex-row-reverse px-4 py-3">
      <AvatarList :list="collaborators.get(project.id)" />
    </footer>
  </div>
</template>

<script>
import TaskLabel from "../utils/LabelColorIndicator.vue";
import AvatarList from "../utils/AvatarList.vue";
import BoxImage from "../utils/BoxImage.vue";
import { mapGetters } from "vuex";

export default {
  name: "CardProject",
  props: { project: Object },
  components: { TaskLabel, AvatarList, BoxImage },
  computed: {
    statusStyles() {
      return this.$store.getters.mapGlobalTaskStatusStyle;
    },
    ...mapGetters("project", ["collaboratorsList"]),

    accessLevel() {
      if (
        this.project.permissions.group_access &&
        this.project.permissions.group_access.access_level
      ) {
        return this.$store.getters.mapGlobalAccessLevel.get(
          this.project.permissions.group_access.access_level
        );
      } else return null;
    },
    collaborators() {
      const map = new Map();
      this.collaboratorsList.forEach((el) => {
        map.set(el.project_id, el.list);
      });
      return map;
    },
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

  footer {
    height: 62px;
  }
  .task-area {
    height: 90px;
  }
}
</style>
