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
        <span class="w-100 px-2 title">{{ epc.name }}</span>
        <small class="px-2 py-1 text-secondary">
          {{ epc.description }}
        </small>
      </div>
      <div class="col-8 p-3">
        <div class="w-100">
          <!-- <EpcChar :small="false" :total="epc.tasks.length" :data_list="getStats(epc)" /> -->
          <Chart :small="false" :total="epc.tasks.length" :data_list="getStats(epc)" />
        </div>
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
import Chart from '../utils/CharHorizontal.vue'
export default {
  name: "EpcItem",
  props: { epc: Object },
  components: { BadgePriority, Chart },
  computed: {
    statisticsTask() {
    //   if(this.epc)
    // return [0, 1, 2, 3].map((i) => {
    //     return {
    //       value:
    //         epc.tasks.length > 0
    //           ? this.epc.tasks
    //               .filter((el) => el.priority === i)
    //           : 0,
    //       priority: i,
    //     };
    //   });
    },
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
          value: epc.tasks.map((el) => el.status == i ? 1 : 0).reduce((at, ac) => ac + at),
          status: i,
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