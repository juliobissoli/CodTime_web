<template>
  <div class="card bg-white rounded">
    <div class="row p-0 m-0">
      <div class="col-4 divider_right d-flex flex-column">
        <div class="d-flex w-100 px-2 pt-3 justify-content-between">
          <span class="text-secondary">#12</span>
          <small class="text-secondary"
            >prioridade
            <BadgePriority :priority="0" />
          </small>
        </div>
        <span class="w-100 p-2 title">Desigge aba de projetp</span>
        <small class="px-2 pb-2 text-secondary">
          Descrição da tarefa a ser feita, Descrição da tarefa a ser
          feitaDescrição
        </small>
      </div>
      <div class="col-8 p-4">
        <div class="w-100">
          <EpcChar :total="10" :data_list="list" />
        </div>
        <div class="d-flex flex-row-reverse">
          <div class="f14-light mt-1">
            <span class="text-secondary">TAREFA: </span>
            <span class="text-dark">12</span>
            <span class="ml-5 text-secondary">criado a 20 dis</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BadgePriority from "../utils/BadgePriority.vue";
import EpcChar from "./EpcChartHorizontal.vue";
export default {
  name: "EpcItem",
  components: { BadgePriority, EpcChar },
  data() {
    return {
      list: [
        {
          color: "#50E3C2",
          class: "success",
          value: 3.33333,
          label: "Concluídas",
        },
        {
          color: "#BF78CA",
          class: "warning",
          value: 3.33333,
          label: "Revisão",
        },
        {
          color: "#DB717E",
          class: "danger",
          value: 3.43333,
          label: "Pendente",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
small {
  font-size: 12px;
}

.title {
  font-size: 16px;
}
</style>