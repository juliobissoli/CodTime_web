<template>
  <div class="bg-white rounded shadow-sm p-4">
    <!-- <span class="d-flex justify-content-between">
      <span class="title18">Status x issues</span>
      <div style="width: 150px" class="d-flex">
        <BtbDropdown label="Dia"/>
      </div>
    </span> -->
    <div class="row">
      <div class="col-6">
        <Chart
          :key="key_render"
          :chartdata="chartData"
          :options="options"
          v-if="chartData.datasets"
        />
      </div>
      <div class="col-6 mt-3">
        <div class="row">
          <legend class="col-12">Issues({{ totalIssues }})</legend>
        </div>
        <div class="row mt-3">
          <div
            v-for="(item, i) in list_data"
            :key="i"
            class="col-6 p-1 d-flex flex-column"
          >
          <LabelColor :class_color="stylesIssues.get(item.status).class">
             <span class="f-12">{{ stylesIssues.get(item.status).label }}</span>
          </LabelColor>
            <small class="py-2 px-3 bg-light rounded" :class="'text-' +stylesIssues.get(item.status).class"> 
                {{ item.total_issues }} de {{totalIssues}}
                <span class="text-muted">| {{getPercent(totalIssues, item.total_issues)}}%</span>
             </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "../utils/ChartDoughnut.vue";
import BtbDropdown from "../utils/BtnDropdown.vue";
import LabelColor from '../utils/LabelColorIndicator.vue'
// import topStatistics from "../utils/TopStatistics";
export default {
  name: "ChartHours",
  components: { Chart, BtbDropdown, LabelColor },
  props: { list_data: Array },
  data() {
    return {
      key_render: 0,
      display: false,
    };
  },
  watch: {
    list_data() {
      this.key_render++;
    },
  },
  computed: {
    totalIssues() {
      return this.list_data.length > 0
        ? this.list_data.map((el) => el.total_issues).reduce((x, xs) => x + xs)
        : 0;
    },
    stylesIssues() {
      return this.$store.getters.mapGlobalTaskStatusStyle;
    },
    chartData() {
      return {
        labels: this.list_data.map(
          (el) => this.stylesIssues.get(el.status).label
        ),
        datasets: [
          {
            data: this.list_data.map((el) => el.total_issues),
            backgroundColor: this.list_data.map(
              (el) => this.stylesIssues.get(el.status).color
            ),
          },
        ],
      };
    },
    options() {
      return {
        legend: {
          display: this.display,
          position: "bottom",
          align: "start",
          labels: {
            fontColor: "#444",
            padding: 10,
          },
        },
      };
    },
  },
  methods: {
      getPercent(total, value){
          if(total && total !== 0 && value){
              return ((value / total) * 100).toFixed(0)
          }
          else return 0
      }
  }
};
</script>
<style lang="scss" scoped>
.box-chart {
  .result {
    position: absolute;
    vertical-align: middle;
  }
}
.icon {
  width: 24px;
  height: 24px;
}
</style>
