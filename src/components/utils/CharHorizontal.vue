<template>
  <div class="chart px-0">
    <div class=" line chart-content" :class="small ? 'small' : 'big'">
      <div class="col-md-12 p-0 ">
        <div v-if="list_data.length > 0" class="bar-item">
          <div
            v-for="(item, i) in list_data"
            :key="i"
            :style="getStyles(item).style"
            class="sub-bar-item p-1 d-flex align-items-center"
            :class="[
              statusStyles.get(item.status).class,
              { unit: list_data.length === 1 },
            ]"
          >
            <span
              v-show="getStyles(item).percent != 0 && !small"
              class="p-1 text-truncate"
              :class="label_class"
            >
              {{ getStyles(item).percent }}%
              {{
                item.label ? item.label : statusStyles.get(item.status).label
              }}
            </span>
          </div>
        </div>

        <div v-else class="bar-item">
          <div class="sub-bar-item p-1 d-flex align-items-center">
            <span
              v-show="!small"
              class="p-1 text-truncate text-secondary"
              :class="label_class"
            >
              {{ label_null }}
            </span>
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
    small: Boolean,
    label_null: String,
    label_class: String,
  },
  computed: {
    statusStyles() {
      return this.$store.getters.mapGlobalTaskStatusStyle;
    },
    list_data() {
      return this.data_list.filter((el) => el.value > 0);
    },
  },
  methods: {
    getStyles(element) {
      let percent = ((element.value / this.total) * 100).toFixed(0);
      let style = { width: `${percent}%` };
      return {
        percent,
        style,
        label: this.statusStyles.get(element.status).label,
      };
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
    height: 100%;
    // margin-top: 8px;
    display: flex;
    align-items: center;
    color: #444;
    // border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-around;
    .bar-item {
      // height: 100%;
      background-color: #ddd;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 5px;
      .sub-bar-item {
        height: 100%;
        // border-radius: 5px;
      }
      .sub-bar-item:first-child {
        border-radius: 5px 0 0 5px;
      }
      .sub-bar-item:last-child {
        border-radius: 0 5px 5px 0;
      }

      .unit {
        border-radius: 5px !important;
      }

      .success {
        height: 100%;
        color: #5dbca7;
        background-color: rgba($color: #50e3c2, $alpha: 0.5);
      }
      .warning {
        height: 100%;
        color: #bf78ca;
        background-color: rgba($color: #bf78ca, $alpha: 0.5);
      }
      .primary {
        height: 100%;
        color: #0070f3;
        background-color: rgba($color: #0070f3, $alpha: 0.5);
      }
      .secondary {
        height: 100%;
        color: #999999;
        background-color: rgba($color: #999999, $alpha: 0.5);
      }
      .danger {
        height: 100%;
        color: #db717e;
        background-color: rgba($color: #db717e, $alpha: 0.5);
      }
    }
    .small {
      height: 5px;
    }
    .big {
      height: 40px;
    }
  }
}
</style>
