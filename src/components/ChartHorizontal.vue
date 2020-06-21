<template>
  <div class="chart">
    <div class="row ml-1 py-2 px-2 mb-2">
      <div class="col-md-4">
        <strong class="">
          Tarefas
        </strong>
      </div>
      <div class="col-md-8 text-center">
        <strong class="">
          Horas Trabalhadas
        </strong>
      </div>
    </div>
    <div class="ml-4" v-for="(item, index) in list" :key="index">
      <div class="row line chart-content mb-2 ">
        <div class="col-md-4 p-0">
          <div class="">
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div class="col-md-8 p-0 pl-1">
          <div>
            <div class="bar-item">
              <div
                class="bar_success legend"
                :style="getSizeWidth(item.minuts)"
              >
                <span class=" value_primary mr-1">
                  {{ item.label }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "CharHorizoltal",
  props: ["title", "list"],
  data() {
    return {
      data: this.statistics,
      maxTotal: this.maxNunbe,
      chargeSelected: 0,
    };
  },
  watch: {
    chargeSelected() {
      this.$emit("change-select-cherge", this.charge[this.chargeSelected]);
    },
  },
  methods: {
    getSizeWidth(mimuts) {
      return "width:" + (mimuts * 1).toFixed(0) + "%;";
    },
  },
};
</script>
<style lang="scss" scoped>
.line {
  border-radius: 0.4rem;
}
.chart {
  // background-color: #ffffff;
  width: 100%;
  border-radius: 0.4rem;
  .input {
    border-radius: 0.4rem;
    border: none;
    background-color: #e1ebf7;
    width: 12vw;
    height: 30px;
    font-size: 15px;
    color: #7794cc;
  }
  .legend {
    font-size: 15px;
    font-weight: 100;
    color: #444;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .chart-content {
    width: 100%;
    height: 30px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    color: #444;
    // border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-around;

    .bar-item {
      height: 30px;
      background-color: #ddd;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 0.6rem;
      .bar_success {
        height: 100%;
        // border-radius: 0 4rem 4rem 0;
        border-radius: 0.4rem;
        background-color: #54b889;
      }
      .bar_danger {
        height: 100%;
        //border-radius: 4rem 0 0 4rem;
        border-radius: 4rem;
        background-color: #cf566c;
      }
    }
  }
}
</style>
