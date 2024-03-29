<template>
  <div class="row p-0">
    <section class="col-12 bg-white p-3">
      <div class="page-wrapper">
        <header class="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <span class="title22">
              {{
                (!projectDetail.preferential ? "Suas estatísticas de" : "Estatísticas de")
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
            :milestones="milestoneList"
            @change-filter="handleChangeFilter"
          />
        </header>
      </div>
    </section>
    <section class="col-12 p-4  page-wrapper">
      <div class="row">
        <div class="col-7 p-1">
          <CardComparative
            :comparing="statisticsTotals.total_time_spent"
            comparing_label="Total de horas"
            :base="statisticsTotals.time_estimate"
            base_label="Total estimado"
          />
        </div>
        <div class="col-5 p-1">
          <CardComparative
            :comparing="statisticsTotals.total_time_avg_issues_relative"
            comparing_label="Media por issues"
            :base="statisticsTotals.total_estimate_avg_issues_relative"
            base_label="Media estimado"
            :has_compare="false"
          />
        </div>
        <!-- <div v-for="(field, i) in fields_totals" :key="i" class="col-4  p-1">
          <CardStatistics
            :title="field.title"
            :value="(statisticsTotals[field.entity] / 60) | horusFormatGlobal"
          />
        </div> -->
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
          <IssuesStats class="mt-2" :issues="issueList" />
        </div>
      </div>
      <div class="row p-0 mt-3">
        <div class="col-6 p-1">
          <ChartByMember
            :members="members_filtered"
            :total_time_spent="statisticsTotals.total_time_spent"
          />
        </div>
        <div class="col-3 p-1">
          <CardStatistics title="Issue mais longa">
            #{{ statisticsTotals.more_lasting_issues.iid }}
            <small class="text-muted f-16">
            {{  (statisticsTotals.more_lasting_issues.total_time_spent / 60)    | horusFormatGlobal}}
            </small>
          </CardStatistics>
        </div>
        <div class="col-3 p-1">
          <CardStatistics
            title="Issue mains curta"
          >
              #{{ statisticsTotals.less_lasting_issues.iid }}
            <small class="text-muted f-16">
            {{  (statisticsTotals.less_lasting_issues.total_time_spent / 60)    | horusFormatGlobal}}
            </small>
          </CardStatistics>
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
// import CharHorizontal from "../../components/utils/CharHorizontal.vue";
import ChartByMember from "../../components/performance/ChartByMember.vue";
import CardIssue from "../../components/project/CardTasksFull.vue";

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
    ChartByMember,
    CardIssue,
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
          title: "TEMPO MÉDIA DE ISSUE REAL.",
        },
        { entity: "time_estimate", title: "TOTAL HORAS ESTIMADO" },
        {
          entity: "total_estimate_avg_issues",
          title: "HORAS ESTIMADA MEDIA POR ISSUE",
        },
        {
          entity: "total_estimate_avg_issues_relative",
          title: "ESTIMATIVA MÉDIA DE ISSUE REAL.",
        },
      ],
      filter: {
        date_init: moment().startOf("month").format("YYYY-MM-DD"),
        date_end: moment().endOf("month").format("YYYY-MM-DD"),
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
    this.setIssues(this.filter).then((res) => this.handleGetNotes());
    this.setMilestone({project_id: this.id})
  },
  watch: {
    issueList() {
      this.handleGetNotes();
    },
  },
  computed: {
    ...mapGetters("project", ["projectDetail"]),
    ...mapGetters("issue", ["issueList", "statisticsTotals"]),
    ...mapGetters("milestone", ["milestoneList"]),
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
    ...mapActions("issue", ["setIssues"]),
    ...mapActions('milestone', ['setMilestone']),

    handleChangeFilter(event) {
      Object.assign(this.filter, event);
      this.setIssues(this.filter);
    },

    handleGetNotes() {
      this.cleanNotes();
      if (this.issueList.length > 0) {
        this.issueList.forEach((el) => {
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
