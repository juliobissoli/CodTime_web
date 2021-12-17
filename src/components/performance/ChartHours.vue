<template>
  <div class="bg-white rounded shadow-sm p-4 d-flex flex-column">
    <span class="d-flex justify-content-between">
      <span class="title18 mb-3">Horas x Dia</span>
      <!-- <div style="width: 150px" class="d-flex">
        <BtbDropdown label="Dia"/>
      </div> -->
      Media de trabalho diário estimado =
      {{ (avgEstimateWor * 60) | horusFormatGlobal }}
    </span>
    <Chart
      :key="key_render"
      :chartdata="chartData"
      :options="options"
      v-if="chartData.datasets"
    />
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import Chart from "../utils/ChartBar.vue";
import BtbDropdown from "../utils/BtnDropdown.vue";
// import topStatistics from "../utils/TopStatistics";
export default {
  name: "ChartHours",
  components: { Chart, BtbDropdown },
  props: { map_hors: Map, date_init: String, date_end: String },
  data() {
    return {
      key_render: 0,
      display: false,
    };
  },
  watch: {
    map_hors() {
      this.key_render++;
    },
  },
  computed: {
    ...mapGetters("hours", { dateRange: "daysInterval" }),
    ...mapGetters("task", ["statisticsTotals"]),

    chartData() {
      return {
        labels: this.rangeDate.map((el) => el.label),
        datasets: [
          {
            label: "Hora trabalhada",
            data: this.rangeDate.map(
              (el) => this.map_hors.get(el.date).second_spend / 60 / 60
            ),
            backgroundColor: this.rangeDate.map((el) => el.color),
            order: 1,
          },
          {
            label: "Prospecção de esforço ideal",
            data: this.rangeDate.map(
              (el, i) =>
                this.statisticsTotals.time_estimate / 60 / 60 -
                i * this.avgEstimateWor
            ),
            backgroundColor: "transparent",
            borderColor: "#cccccc",
            type: "line",
            order: 0,
          },
          {
            label: "Esforço real necessário",
            data: this.getRemainingEffort(),
            backgroundColor: "transparent",
            borderColor: "#4273c5",
            type: "line",
            order: 0,
          },
          {
            label: "Prospecção de esforço real",
            data: this.rangeDate.map(
              (el, i) =>
                this.statisticsTotals.time_estimate / 60 / 60 -
                i * (this.avgWor)
            ),
            backgroundColor: "transparent",
            borderColor: 'red',
            type: "line",
            order: 0,
          },
        ],
      };
    },
    avgEstimateWor() {
      return (
        this.statisticsTotals.time_estimate /
        60 /
        60 /
        (this.rangeDate.length - 1)
      );
    },
    avgWor() {
      return (
        this.statisticsTotals.total_time_spent /
        60 /
        60 /
        (this.rangeDate.length - 1)
      );
    },
    rangeDate() {
      return this.dateRange({
        date_init: this.date_init,
        date_end: this.date_end,
      }).map((el) => ({
        date: el,
        label: moment(el).format("DD MMM"),
        color: "#0070F3",
      }));
    },
    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        steppedLin: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
        },
      };
    },
  },
  methods: {
    getRemainingEffort() {
      let acc = 0;
      return this.rangeDate.map((el, i) => {
        let hours_work = this.map_hors.get(el.date).second_spend / 60 / 60;
        acc += hours_work;
        return this.statisticsTotals.time_estimate / 60 / 60 - acc;
      });
    },
  },
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
