<template>
  <div @click="$emit('card-clicked')" class="card_project p-3 d-flex">
    <div class="p-3 icon d-flex align-items-center">
      <img src="../../assets/codTags.svg" alt="" />
    </div>
    <div class="row pl-2 ">
      <div class="col-12 d-flex d-flex justify-content-end">
        <span class="">start</span>
      </div>
      <div class="col-12 text-rigth mb-3">
        <span class="title">{{ title }}</span>
      </div>
      <div class="col-12 d-flex justify-content-between">
        <div class="pl-3 d-flex flex-column">
          <span>Horas: </span>
          <span>{{ clock(hours) }} </span>
        </div>
        <div class="d-flex flex-column text-center">
          <span>Tarefas:</span>
          <span>{{ tesks }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProject",
  props: ["title", "tesks", "hours"],
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
  border: 1px solid #aaa;
  border-radius: 0.5rem;
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
