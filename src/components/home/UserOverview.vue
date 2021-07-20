<template>
  <div class="row">
    <div class="col-5 px-4">
      <Avatar />
    </div>
    <div class="col-7 d-flex flex-column">
      <h1>Dev Master</h1>
      <Chart :total="10" :data_list="percentStatsUser.list" />
      <section class="d-flex flex-wrap">
        <LabelColor
          v-for="(item, i) in percentStatsUser.list"
          :key="i"
          :color="item.color"
        >
          <small class="mr-4">{{ item.label }}: <small class="text-muted">{{item.value | formatFloatGlobal}}%</small></small>
        </LabelColor>
      </section>
    </div>
  </div>
</template>

<script>
import Avatar from "../utils/Avatar.vue";
import Chart from "../utils/CharHorizontal.vue";
import LabelColor from "../utils/LabelColorIndicator.vue";
export default {
  name: "UserOverview",
  components: { Avatar, Chart, LabelColor },
  computed: {
    percentStatsUser() {
      return {
        total: 10,
        list: [
          { color: "#50E3C2", value: 3.33333, label: "Concluídas" },
          { color: "#BF78CA", value: 3.33333, label: "Revisão" },
          { color: "#DB717E", value: 3.43333, label: "Pendente" },
        ],
      };
    },
  },
};
</script>
