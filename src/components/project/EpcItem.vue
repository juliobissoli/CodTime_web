<template>
  <div class="card bg-white rounded">
    <div class="row p-0 m-0">
      <div class="col-4 divider_right d-flex flex-column">
        <div class="d-flex w-100 px-2 pt-2 justify-content-between">
          <span class="text-secondary">#{{ epc.id }}</span>
          <small class="text-secondary"
            >prioridade
            <BadgePriority :priority="epc.priority" />
          </small>
        </div>
        <span class="w-100 title">{{ epc.name }}</span>
        <small class="p-2 text-secondary">
          {{ epc.description }}
        </small>
      </div>
      <div class="col-8 p-3">
        <div class="w-100">
          <EpcChar :total="10" :data_list="list" />
        </div>
        {{getStats(epc)}}
        <div class="mt-2 d-flex flex-row-reverse">
          <div class="f14-light mt-1">
            <span class="text-secondary">TAREFA: </span>
            <span class="text-dark">{{ epc.tasks.length }}</span>
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
  props: { epc: Object },
  components: { BadgePriority, EpcChar },
  computed: {
    statisticsTask() {},
  },

  data() {
    return {
      list: [
        { value: 3.33333, priority: 1 },
        { value: 3.33333, priority: 2 },
        { value: 3.43333, priority: 0 },
      ],
    };
  },
  methods: {
    getStats(epc) {
      return [0, 1, 2, 3].map((i) => {
        return {
          value:
            epc.tasks.length > 0
              ? this.epc.tasks
                  .filter((el) => el.priority === i)
                  .reduce((ac, at) => at + ac)
              : 0,
          priority: i,
        };
      });
    },
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