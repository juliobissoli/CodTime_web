<template>
  <div class="row p-0">
    <section class="col-12 bg-white p-3">
      <div class="page-wrapper">
        <header class="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <span class="title22">{{(!projectDetail.preferential ? 'Seu d' : 'D') + "esempenho de"}}
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
    <section class="col-12 py-3 px-0 page-wrapper">
      <div class="row">
        <div v-for="(field, i) in fields_totals" :key="i" class="col-4  p-1">
          <CardStatistics
            :title="field.title"
            :value="
              (statisticsTotals[field.entity] / 60) | horusFormatGlobal
            "
          />
        </div>
      </div>
      <div class="row p-0 mt-3">
        <div class="col-12 p-1">
          <ChartHours
            :map_hors="mapHours"
            :date_init="filter.date_init"
            :date_end="filter.date_end"
          />
        </div>
      </div>
      <div class="row p-0 mt-3">
        <div class="col-8 p-0">
          <ChartStatus 
          :list_data="statisticsTotals.total_by_status"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AvatarList from "../../components/utils/AvatarList.vue";
import FilterDefault from "../../components/utils/FilterDefalt.vue";
import CardStatistics from "../../components/utils/CardStatistics.vue";
import ChartHours from "../../components/performance/ChartHours.vue";
import ChartStatus from '../../components/performance/ChartIssuesByStatus.vue'

import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "ProjectPerformance",
  components: { AvatarList, FilterDefault, CardStatistics, ChartHours, ChartStatus },
  props: ["id"],

  data() {
    return {
      list_avatar: [{ url: null }, { url: null }, { url: null }],
      fields_totals: [
            {entity: 'total_time_spent', title: "TOTAL DE HORAS"},
            {entity: 'total_time_avg_issues', title: "HORAS MEDIA POR ISSUE"},
            {entity: 'total_time_avg_issues_relative', title: "TEMPO MEDIA DE ISSUE RELAT."},
            {entity: 'time_estimate', title: "TOTAL HORAS ESTIMADO"},
            {entity: 'total_estimate_avg_issues', title: "HORAS ESTIMADA MEDIA POR ISSUE"},
            {entity: 'total_estimate_avg_issues_relative', title: "ESTIMATIVA MEDIA DE ISSUE RELAT."},
      ],
      filter: {
        date_init: moment().startOf("month").format("YYYY-MM-DD"),
        date_end: moment().endOf("month").format("YYYY-MM-DD"),
        project_id: this.id,
        assignee_list: [],
        assignee_id: null
      },
    };
  },
  created() {
    if(!this.projectDetail.preferential ){
       this.filter.assignee_id = this.userID
      }
    this.setTasks(this.filter).then((res) => this.handleGetNotes());
  },
  watch: {
    taskList() {
      this.handleGetNotes();
    },
  },
  computed: {
    ...mapGetters("project", [
      "projectDetail",
      "mapCollaborators",
      "collaboratorsList",
    ]),
    ...mapGetters("task", ["taskList", "statisticsTotals"]),
    ...mapGetters("user_info", ["userID"]),
    ...mapGetters("hours", { hoursDate: "notesToDate" }),
    mapHours() {
      return this.hoursDate(this.filter);
    },
    members_filtered() {
      return this.filter.assignee_list.length > 0 ? this.filter.assignee_list : this.projectDetail.members_visible
    },
  },

  methods: {
    ...mapActions("hours", ["setNotes", "cleanNotes"]),
    ...mapActions("task", ["setTasks"]),

    handleChangeFilter(event) {
      Object.assign(this.filter, event)
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
  },

};
</script>

<style lang="scss" scoped>
.icon {
  height: 20px;
  width: 20px;
  background-color: #999999;
}
</style>
