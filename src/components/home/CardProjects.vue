<template>
  <div
    @click="$emit('card-clicked')"
    class="card_project rounded bg-white shadow-sm"
  >
    <div class="row p-0 m-0">
      <div class="col-12 p-3 px-4  d-flex d-flex justify-content-between">
        <h3 class="title">{{ project ? project.name : "--" }}</h3>
      </div>
      <div
        v-if="issues.length > 0"
        class="col-12 py-3"
      >
        <LabelColor
          v-for="(commit, i) in issues"
          :key="i"
          :issues_status="commit.status "
        >
          <span>{{ commit.title }} </span>
        </LabelColor>
      </div>
      <span v-else class="col-12 text-center text-muted p-3">
        Nenhum issue nesse mês!
      </span>
      <footer class="col-12 p-3 divider_top   d-flex flex-row-reverse">
        <AvatarList :list="collaborators.get(project.id)" />
      </footer>
    </div>
  </div>
</template>

<script>
import LabelColor from "../utils/LabelColorIndicator.vue";
import AvatarList from "../utils/AvatarList.vue";
import { mapGetters } from "vuex";
export default {
  name: "CardProject",
  props: {
    project: Object,
  },
  components: { LabelColor, AvatarList },
  computed: {
    ...mapGetters("project", ["collaboratorsList"]),
    ...mapGetters('task', { issueProject: "issueProject"}),

issues(){
  // return this.issueProject || []
  let list = this.issueProject(this.project.id) || []
  return this.project ?  list.length > 3 ? list.splice(0, 3) : list  : []
},


collaborators() {
      const map = new Map();
      this.collaboratorsList.forEach((el) => {
        map.set(el.project_id, el.list);
      });
      return map;
    },
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.card_project {
  border: 1px solid #fafafafa;
  cursor: pointer;
  .title {
    font-size: 22px;
    font-weight: 500;
    color: #444444;
  }
}
</style>
