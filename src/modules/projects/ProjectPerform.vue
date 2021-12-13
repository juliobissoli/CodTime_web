<template>
  <div class="row p-0">
    <section class="col-12 bg-white p-3">
      <div class="page-wrapper">
        <header class="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <span class="title22">
              {{
                (!projectDetail.preferential ? "Seu d" : "D") + "esempenho de"
              }}
              <small class="f14-light mr-4">
                ({{ filter | rangeDateGlobal }})
              </small>
            </span>
            <AvatarList :list="members_filtered" />
          </div>
          <FilterDefault
            :date_init="filter.date_init"
            :date_end="filter.date_end"
            :avatar_list="projectDetail.members_visible"
            @change-filter="handleChangeFilter"
          />
        </header>
      </div>
    </section>
    <section class="col-12 p-4  page-wrapper">
      <div class="row">
        <div v-for="(field, i) in fields_totals" :key="i" class="col-4  p-1">
          <CardStatistics
            :title="field.title"
            :value="(statisticsTotals[field.entity] / 60) | horusFormatGlobal"
          />
        </div>
      </div>
      <div class="row p-0 mt-3">
        <div class="col-7 p-1">
          <ChartHours
            :map_hors="mapHours"
            :date_init="filter.date_init"
            :date_end="filter.date_end"
          />
        </div>
        <div class="col-5 p-1">
          <ChartStatus :list_data="statisticsTotals.total_by_status" />
          <IssuesStats class="mt-2" :issues="taskList" />
        </div>
      </div>
      <div class="row p-0 mt-3">
        <div class="col-5">
          <CardComparative
            :comparing="statisticsTotals.total_time_spent"
            comparing_label="Total de horas"
            :base="statisticsTotals.time_estimate"
            base_label="Total estimado"
          />
        </div>
        <div class="col-5 rounded bg-white shadow-sm p-4">
          <legend class="mb-2">Horas por colaborador</legend>

          <div
            class="col-12"
            v-for="(assignee, i) in members_filtered"
            :key="i"
          >
            <div class="row mb-2">
              <div class="col p-0 d-flex justify-content-center justify-content-center">
                <Avatar style="height: 30px; width: 30px" :item="assignee" />
              </div>
              <div class="col-9 px-1">
                <CharHorizontal
                  :total="statisticsTotals.total_time_spent"
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
      </div>
    </section>
  </div>
</template>

<script>
import AvatarList from "../../components/utils/AvatarList.vue";
import Avatar from "../../components/utils/Avatar.vue";
import FilterDefault from "../../components/utils/FilterDefalt.vue";
import CardStatistics from "../../components/utils/CardStatistics.vue";
import ChartHours from "../../components/performance/ChartHours.vue";
import ChartStatus from "../../components/performance/ChartIssuesByStatus.vue";
import CardComparative from "../../components/performance/CardComparative.vue";
import IssuesStats from "../../components/performance/ListIssues.vue";
import CharHorizontal from "../../components/utils/CharHorizontal.vue";

import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "ProjectPerformance",
  components: {
    Avatar,
    AvatarList,
    FilterDefault,
    CardStatistics,
    ChartHours,
    ChartStatus,
    IssuesStats,
    CardComparative,
    CharHorizontal,
  },
  props: ["id"],

  data() {
    return {
      list_avatar: [{ url: null }, { url: null }, { url: null }],
      fields_totals: [
        { entity: "total_time_spent", title: "TOTAL DE HORAS" },
        { entity: "total_time_avg_issues", title: "HORAS MEDIA POR ISSUE" },
        {
          entity: "total_time_avg_issues_relative",
          title: "TEMPO MEDIA DE ISSUE RELAT.",
        },
        { entity: "time_estimate", title: "TOTAL HORAS ESTIMADO" },
        {
          entity: "total_estimate_avg_issues",
          title: "HORAS ESTIMADA MEDIA POR ISSUE",
        },
        {
          entity: "total_estimate_avg_issues_relative",
          title: "ESTIMATIVA MEDIA DE ISSUE RELAT.",
        },
      ],
      filter: {
        date_init: moment()
          .startOf("month")
          .format("YYYY-MM-DD"),
        date_end: moment()
          .endOf("month")
          .format("YYYY-MM-DD"),
        project_id: this.id,
        assignee_list: [],
        assignee_id: null,
      },
    };
  },
  created() {
    if (!this.projectDetail.preferential) {
      this.filter.assignee_id = this.userID;
    }
    this.setTasks(this.filter).then((res) => this.handleGetNotes());
  },
  watch: {
    taskList() {
      this.handleGetNotes();
    },
  },
  computed: {
    ...mapGetters("project", ["projectDetail"]),
    ...mapGetters("task", ["taskList", "statisticsTotals"]),
    ...mapGetters("user_info", ["userID"]),
    ...mapGetters("hours", { hoursDate: "notesToDate" }),
    ...mapGetters("hours", { hoursAssignee: "notesToAssignee" }),

    ...mapGetters("hours", ["housToAssignee"]),

    mapHours() {
      return this.hoursDate(this.filter);
    },

    mapAssignee() {
      // return this.projectDetail
      return this.hoursAssignee(
        this.projectDetail
          ? this.projectDetail.members_visible.map((el) => el.id)
          : [this.userID]
      );
    },

    members_filtered() {
      return this.filter.assignee_list.length > 0
        ? this.filter.assignee_list
        : this.projectDetail.members_visible;
    },
  },

  methods: {
    ...mapActions("hours", ["setNotes", "cleanNotes"]),
    ...mapActions("task", ["setTasks"]),

    handleChangeFilter(event) {
      Object.assign(this.filter, event);
      this.setTasks(this.filter);
    },

    handleGetNotes() {
      this.cleanNotes();
      if (this.taskList.length > 0) {
        this.taskList.forEach((el) => {
          this.setNotes(el);
        });
      }
    },
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

<style lang="scss" scoped>
.icon {
  height: 20px;
  width: 20px;
  background-color: #999999;
  padding: 10px 0;
}

.page-wrapper {
  max-width: 1440px;
}
</style>
