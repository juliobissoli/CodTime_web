<template>
  <div class="row">
    <div class="col-12 col-md-5 px-4 d-flex justify-content-center">
      <Avatar  style="width: 218px;" :size="218" :item="userInfo" />
    </div>
    <div class="col-12 col-md-7 d-flex pt-4 flex-column">
      <h1>{{ userInfo.username }}</h1>
      <Chart
        :small="true"
        :total="this.statisticsTotals.total_issues"
        :data_list="percentStatsUser.list"
      />
      <section class="d-flex flex-wrap">
        <LabelColor
          v-for="(item, i) in percentStatsUser.list"
          :key="i"
          :class_color="item.class"
        >
          <small class="mr-4"
            >{{ item.label }}:
            <small class="text-muted"
              >{{ item.percent | formatFloatGlobal }}%</small
            ></small
          >
        </LabelColor>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Avatar from "../utils/Avatar.vue";
import Chart from "../utils/CharHorizontal.vue";
import LabelColor from "../utils/LabelColorIndicator.vue";
export default {
  name: "UserOverview",
  components: { Avatar, Chart, LabelColor },
  computed: {
    ...mapGetters("user_info", ["userInfo"]),
    ...mapGetters("issue", ["statisticsTotals"]),
    stylesIssues() {
      return this.$store.getters.mapGlobalTaskStatusStyle;
    },
    percentStatsUser() {
      return {
        total: this.statisticsTotals.total_issues,
        list: this.statisticsTotals.total_by_status.map((el) => ({
          ...this.stylesIssues.get(el.status),
          percent: (  (el.total_issues / this.statisticsTotals.total_issues) *  100).toFixed(0),
          value: el.total_issues,
          status: el.status,
        })),

        // [
        //   { color: "#50E3C2", status: 3 ,class: "success" ,value: 3.33333, label: "Concluídas" },
        //   { color: "#BF78CA", status:2  ,class: "warning" ,value: 3.33333, label: "Revisão" },
        //   { color: "#DB717E", status: 0 ,class: "danger" ,value: 3.43333, label: "Pendente" },
        // ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.box-full{
  // height: 300px;
  // width: 300px;
}
</style>
