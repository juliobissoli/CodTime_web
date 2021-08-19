<template>
  <div
    @click="$emit('card-clicked')"
    class="card_project rounded bg-white shadow-sm"
  >
    <div class="row p-0 m-0">
      <div class="col-12 p-3 px-4  d-flex d-flex justify-content-between">
        <h3 class="title">{{ project ? project.name : "--" }}</h3>
        <button class="btn btn-sm btn-outline-dark">Iniciar</button>
      </div>
      <div v-if="project ? project.commits.length > 0 : false" class="col-12">
        <LabelColor
          v-for="(commit, i) in project ? project.commits : []"
          :key="i"
          color="#cccccc"
        >
          <span>{{ commit }}</span>
        </LabelColor>
      </div>
      <span v-else class="col-12 text-center text-muted p-3">
        Nenhum Commit efetuado!
      </span>
      <!-- <div class="col-12 d-flex justify-content-between">
        <div class="pl-3 d-flex flex-column">
          <span>Horas: </span>
          <span>{{ clock(hours) }} </span>
        </div>
        <div class="d-flex flex-column text-center">
          <span>Tarefas:</span>
          <span>{{ tesks }}</span>
        </div>
      </div> -->
      <footer class="col-12 p-3 divider_top   d-flex flex-row-reverse">
        <AvatarList :list="collaborator"/>
      </footer>
    </div>
  </div>
</template>

<script>
import LabelColor from "../utils/LabelColorIndicator.vue";
import AvatarList from '../utils/AvatarList.vue'
export default {
  name: "CardProject",
  props: {
    project: Object,
  },
  components: { LabelColor, AvatarList },
  computed: {
    collaborator(){
      return [
        {name: 'ZéMalandro', url: ''},
        {name: 'ZéMalandro', url: ''},
        {name: 'ZéMalandro', url: ''}
      ]
    }
  },
   methods: {
    clock(minutis) {
      return minutis < 60
        ? `${parseInt(minutis, 10)} min`
        : `${Math.trunc(minutis / 60)}:${(minutis % 60).toFixed(0)}min`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card_project {
  //   background-color: #eee;
  border: 1px solid #fafafafa;
  // border-radius: 0.5rem;
  // cursor: pointer;
  .icon {
    background-color: #eee;
    border-radius: 0.5rem;
  }
  .title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
