<template>
  <div class="rounded bg-white shadow-sm p-4">
    <legend class="mb-2">Horas por colaborador</legend>

    <div class="col-12" v-for="(assignee, i) in members" :key="i">
      <div class="row mb-2">
        <div
          class="col p-0 d-flex justify-content-center justify-content-center"
        >
          <Avatar style="height: 30px; width: 30px" :item="assignee" />
        </div>
        <div class="col-9 px-1">
          <CharHorizontal
            :total="total_time_spent"
            label_class="f-12"
            :data_list="getChartData(mapAssignee.get(assignee.id).second_spend)"
            label_null="Nenhum trabalho"
          />
        </div>
        <div class="col d-flex align-items-center justify-content-center">
          <span class="badge badge-secondary ">
            {{
              (mapAssignee.get(assignee.id).second_spend / 60)
                | horusFormatGlobal
            }}
          </span>
        </div>
      </div>
    </div>

    <!-- <div
            v-for="(assignee, i) in members_filtered"
            :key="i"
            class="d-flex align-items-center"
          >
            {{ mapAssignee.get(assignee.id).second_spend }}
          </div> -->
  </div>
</template>

<script>

import CharHorizontal  from '../utils/CharHorizontal.vue'
import Avatar from '../utils/Avatar.vue'
import { mapGetters } from "vuex";
export default {
  name: "ChartByMember",
  props: {
    members: { type: Array, require: true },
    total_time_spent: { type: Number },
  },
  components: {CharHorizontal, Avatar},
  computed: {
    ...mapGetters("project", ["projectDetail"]),
    ...mapGetters("user_info", ["userID"]),
    ...mapGetters("hours", { hoursAssignee: "notesToAssignee" }),

    mapAssignee() {
      // return this.projectDetail
      return this.hoursAssignee(
        this.projectDetail
          ? this.projectDetail.members_visible.map((el) => el.id)
          : [this.userID]
      );
    },
  },
  methods: {
    getChartData(value) {
      return [
        {
          status: 1,
          value: value || 0,
          label: "do trabalhado",
        },
      ];
    },
  },
};
</script>
