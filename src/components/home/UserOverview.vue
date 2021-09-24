<template>
  <div class="row">
    <div class="col-5 px-4">
      <Avatar :item="userInfo" />
    </div>
    <div class="col-7 d-flex flex-column">
      <h1>{{userInfo.username}}</h1>
      <Chart :small="true" :total="10" :data_list="percentStatsUser.list" />
      <section class="d-flex flex-wrap">
        <LabelColor
          v-for="(item, i) in percentStatsUser.list"
          :key="i"
          :class_color="item.class"
        >
          <small class="mr-4">{{ item.label }}: <small class="text-muted">{{item.value | formatFloatGlobal}}%</small></small>
        </LabelColor>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Avatar from "../utils/Avatar.vue";
import Chart from "../utils/CharHorizontal.vue";
import LabelColor from "../utils/LabelColorIndicator.vue";
export default {
  name: "UserOverview",
  components: { Avatar, Chart, LabelColor },
  computed: {
    ...mapGetters('user_info', ['userInfo']),
    percentStatsUser() {
      return {
        total: 10,
        list: [
          { color: "#50E3C2", status: 3 ,class: "success" ,value: 3.33333, label: "Concluídas" },
          { color: "#BF78CA", status:2  ,class: "warning" ,value: 3.33333, label: "Revisão" },
          { color: "#DB717E", status: 0 ,class: "danger" ,value: 3.43333, label: "Pendente" },
        ],
      };
    },
  },
};
</script>
