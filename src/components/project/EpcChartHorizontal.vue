<template>
  <div class="chart px-1">
    <div class=" line chart-content">
      <div class="col-md-12 p-0 ">
        <div class="bar-item">
          <div
            v-for="(item, i) in data_list"
            :key="i"
            :style="getStyles(item).style"
            class="sub-bar-item p-1 d-flex align-items-center"
            :class="statusStyles.get(item.priority).class"
          >
          {{getStyles(item).percent}}% {{statusStyles.get(item.priority).label}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharHorizontal",
  props: {
    total: Number,
    data_list: Array,
  },
  computed: {
    statusStyles(){
     return this.$store.getters.mapGlobalTaskStatusStyle
    }
  },
  methods: {
    getStyles(element) {
      let percent =  ( (element.value / this.total ) * 100).toFixed(0)
      let style = {  width: `${percent}%`,}
      return {
        percent, 
        style,
        label: this.statusStyles.get(element.priority).label
      }
    },
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
    // background: rgba($color: #000000, $alpha: 1.0);
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
      height: 40px;
      background-color: #ddd;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius:5px;
      .sub-bar-item{
         height: 100%;
          // border-radius: 5px;
       
      }
      .sub-bar-item:first-child{border-radius: 5px 0 0 5px;}
      .sub-bar-item:last-child{border-radius: 0 5px   5px 0;}

      .success {
        height: 100%;
        color: #50E3C2;
        background-color: rgba($color: #50E3C2, $alpha: 0.5)
      }
      .warning {
        height: 100%;
        color: #BF78CA;
        background-color: rgba($color: #BF78CA, $alpha: 0.5)
      }
      .primary {
        height: 100%;
        color: #0070F3;
        background-color: rgba($color: #0070F3, $alpha: 0.5)
      }
      .secondary {
        height: 100%;
        color: #999999;
        background-color: rgba($color: #999999, $alpha: 0.5)
      }
      .danger {
        height: 100%;
        color: #DB717E;
        background-color: rgba($color: #DB717E, $alpha: 0.5);
      }
    }
  }
}
</style>
