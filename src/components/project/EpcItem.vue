<template>
  <div class="card bg-white rounded">
    <div class="row p-0 m-0">
      <div class="col-4 divider_right d-flex flex-column">
        <div class="d-flex w-100 px-2 pt-2 justify-content-between">
          <span class="text-secondary">#{{ epc.iid }}</span>
          <small class="text-secondary"
            >prioridade:
            <!-- <BadgePriority :priority="epc.priority" /> -->
            <span
              class="badge"
              :class="
                epc.state === 'active' ? 'badge-primary' : 'badge-secondary'
              "
              >{{ epc.state }}</span
            >
          </small>
        </div>
        <span class="w-100 px-2 title">{{ epc.title }}</span>
        <small class="px-2 py-1 text-secondary">
          {{ epc.description }}
        </small>
      </div>
      <div class="col-8 p-3">
        <div class="w-100">
          <Chart
            :small="issues_visible"
            label_null="Nenhuma isseus atribuída"
            :total="
              issues_map.get(epc.id) ? issues_map.get(epc.id).length : 100
            "
            :data_list="
              getStats(issues_map.get(epc.id) ? issues_map.get(epc.id) : null)
            "
          />
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <button @click="issues_visible = !issues_visible" class="btn pl-0 pr-0 f14-light mt-1 d-flex">
            <span class="text-secondary">ISSUES: </span>
            <span class="ml-2 text-dark">
              {{  issues_map.get(epc.id) ? issues_map.get(epc.id).length : 0}}
            </span>

            <i class="ml-1 icon " :class="!issues_visible ? 'icon-arrow_down' : 'icon-arrow_up'"></i>
          </button>
          <!-- <small class="ml-5 text-secondary">  criado {{ epc.created_at | fromNowFormatGlobal }}</small> -->
        </div>
        <div v-show="issues_visible" class="w-100 divider_top">
          <LabelColor
            v-for="(issue, i) in issues_map.get(epc.id)
              ? issues_map.get(epc.id)
              : []"
            :key="i"
            :issues_status="issue.status"
          >
            <small class="">{{ issue.title }}</small>
          </LabelColor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BadgePriority from "../utils/BadgePriority.vue";
import Chart from "../utils/CharHorizontal.vue";
import LabelColor from "../utils/LabelColorIndicator.vue";
export default {
  name: "EpcItem",
  props: { epc: Object, issues_map: Map },
  components: { BadgePriority, Chart, LabelColor },
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

    statusStyles() {
      return this.$store.getters.mapGlobalTaskStatusStyle;
    },
  },

  data() {

    return {
      issues_visible: false,
      list: [
        { value: 3.33333, priority: 1 },
        { value: 3.33333, priority: 2 },
        { value: 3.43333, priority: 0 },
      ],
    };
  },
  methods: {
    getStats(issues) {
      if (issues) {
        return [0, 1, 2, 3].map((i) => {
          return {
            value: issues
              .map((el) => (el.status == i ? 1 : 0))
              .reduce((at, ac) => ac + at),
            status: i,
          };
        });
      } else return [0, 1, 2, 3].map((i) => ({ value: 0, status: i }));
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

.icon {
  height: 20px;
  width: 20px;
  background-color: #999999;
}
</style>
