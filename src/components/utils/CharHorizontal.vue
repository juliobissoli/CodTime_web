<template>
  <div class="chart px-1">
    <div class=" line chart-content">
      <div class="col-md-12 p-0 ">
        <div class="bar-item">
          <div
            v-for="(item, i) in data_list"
            :key="i"
            :style="getStyles(item)"
            class="sub-bar-item"
          >
          </div>
          <!-- <div
            :class="getClass(data).sub_total"
            :style="getSizeWidth(data ? (data.value > 0 ? 100 - data.value : 100) : 0)"
          ></div> -->
        </div>
        <!-- <div class="col-12 p-0 legend">
          <span class="value_primary text-right"
            >{{ getClass(data).label }}
          </span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharHorizontal",
  props: {
    total: Number,
    data_list: Array
  },
  methods: {
    // getClass(data) {
    //   if (!data) {
    //     return {
    //       total: "primary",
    //       sub_total: "secondary",
    //       label: `0% preenchidos`,
    //     };
    //   }
    //   if (data.exceeded) {
    //     return {
    //       total: "danger",
    //       sub_total: "warning",
    //       label: !data.not_label
    //         ? `${100 - data.value.toFixed(0)}% acima do total`
    //         : "",
    //     };
    //   } else {
    //     if (data.value === 0) {
    //       return {
    //         total: "secondary",
    //         sub_total: "secondary",
    //         label: !data.not_label
    //           ? `${100 - data.value.toFixed(0)}% restante`
    //           : "",
    //       };
    //     } else if (data.value < 30) {
    //       return {
    //         total: "primary",
    //         sub_total: "secondary",
    //         label: !data.not_label
    //           ? `${100 - data.value.toFixed(0)}% restante`
    //           : "",
    //       };
    //     } else if (data.value < 55) {
    //       return {
    //         total: "primary",
    //         sub_total: "warning",
    //         label: !data.not_label
    //           ? `${100 - data.value.toFixed(0)}% restante`
    //           : "",
    //       };
    //     } else {
    //       return {
    //         total: "primary",
    //         sub_total: "secondary",
    //         label: !data.not_label
    //           ? `${data.value.toFixed(0)}% preenchidos`
    //           : "",
    //       };
    //     }
    //   }
    // },
    // getSizeWidth(data) {
    //   return "width:" + (data * 1).toFixed(0) + "%; ";
    // },
    getStyles(element) {
      return `width: ${( (element.value / this.total ) * 100).toFixed(0)}% !important;  background-color: ${element.color};` 
    },
    // date(date) {
    //   return moment(date).format("DD/MM/YYYY");
    // },
  },
};
</script>
<style lang="scss" scoped>
.chart {
  // background-color: #ffffff;
  border-radius: 0.4rem;
  .legend {
    font-size: 11px;
    font-weight: 100;
    text-align: right;
    color: #999;
  }
  .lineSelected {
    // border: 1px solid #adcdf5;
    background-color: #c1d7f1 !important;
    transform: scale(1.05);
  }
  .chart-content {
    width: 100%;
    height: 30px;
    // margin-top: 8px;
    display: flex;
    align-items: center;
    color: #444;
    // border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-around;

    .bar-item {
      height: 6px;
      background-color: #ddd;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 4rem;
      .sub-bar-item{
         height: 100%;
          border-radius: 4rem;
      }
      .success {
        height: 100%;
        // border-radius: 0 4rem 4rem 0;
        border-radius: 4rem;
        background-color: #54b889;
      }
      .warning {
        height: 100%;
        // border-radius: 0 4rem 4rem 0;
        border-radius: 4rem;
        background-color: #fcd07a;
      }
      .primary {
        height: 100%;
        // border-radius: 0 4rem 4rem 0;
        border-radius: 4rem;
        background-color: #9cb8ff;
      }
      .secondary {
        height: 100%;
        // border-radius: 0 4rem 4rem 0;
        border-radius: 4rem;
        background-color: #cccccc;
      }
      .danger {
        height: 100%;
        //border-radius: 4rem 0 0 4rem;
        border-radius: 4rem;
        background-color: #cf566c;
      }
    }
  }
}
</style>
