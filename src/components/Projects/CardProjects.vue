<template>
  <div class="card_project p-3 d-flex bg-light">
    <div class="p-3 icon d-flex align-items-center">
      <img src="../../assets/codTags.svg" alt="" />
    </div>
    <div class="row pl-2 ">
      <div class="col-12 mb-3">
        <button class="btn btn-outline-info btn-sm">start</button>
      </div>
      <div class="col-12 mb-3">
        <span class="title">{{ title }}</span>
      </div>
      <div class="col-6 d-flex flex-column text-center">
        <span>Horas</span>
        <span>{{ hours }}h</span>
      </div>
      <div class="col-6  d-flex flex-column text-center">
        <span>Tarefas</span>
        <span>{{ tesks }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProject",
  props: ["title", "tesks", "hours"],
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
