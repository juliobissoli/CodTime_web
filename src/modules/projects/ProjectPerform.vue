<template>
  <div class="row p-0">
    <section class="col-12 bg-white p-3">
      <div class="page-wrapper">
        <header class="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <span class="title22">
              <small class="f14-light mr-4"
                >({{ filter | rangeDateGlobal }})</small
              >
            </span>
            <AvatarList :list="members" />
          </div>
          <FilterDefault
            :date_init="filter.date_init"
            :date_end="filter.date_end"
            :avatar_list="members"
            @change-filter="handleChangeFilter"
          />
        </header>
      </div>
    </section>
    <section class="col-12 py-3 px-0 page-wrapper">
      <div class="row">
        <div class="col-4  p-1  ">
          <CardStatistics
            title="TOTAL DE HORAS"
            :value="
              (statisticsTotals.total_time_spent / 60) | horusFormatGlobal
            "
          />
        </div>

        <div class="col-4  p-1  ">
          <CardStatistics
            title="HORAS MEDIA POR ISSUE"
            :value="
              (statisticsTotals.total_time_avg_issues / 60) | horusFormatGlobal
            "
          />
        </div>
        <div class="col-4  p-1  ">
          <CardStatistics
            title="TEMPO MEDIA DE ISSUE RELAT."
            :value="
              (statisticsTotals.total_time_avg_issues_relative / 60)
                | horusFormatGlobal
            "
          />
        </div>
        <div class="col-4  p-1  ">
          <CardStatistics
            title="TOTAL HORAS ESTIMADO"
            :value="(statisticsTotals.time_estimate / 60) | horusFormatGlobal"
          />
        </div>

        <div class="col-4  p-1  ">
          <CardStatistics
            title="HORAS ESTIMADA MEDIA POR ISSUE"
            :value="
              (statisticsTotals.total_estimate_avg_issues / 60)
                | horusFormatGlobal
            "
          />
        </div>

        <div class="col-4  p-1  ">
          <CardStatistics
            title="ESTIMATIVA MEDIA DE ISSUE RELAT."
            :value="
              (statisticsTotals.total_estimate_avg_issues_relative / 60)
                | horusFormatGlobal
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
    </section>
  </div>
</template>

<script>
import AvatarList from "../../components/utils/AvatarList.vue";
import FilterDefault from "../../components/utils/FilterDefalt.vue";
import CardStatistics from "../../components/utils/CardStatistics.vue";
import ChartHours from "../../components/performance/ChartHours.vue";

import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "ProjectPerformace",
  components: { AvatarList, FilterDefault, CardStatistics, ChartHours },
  props: ["id"],

  data() {
    return {
      list_avatar: [{ url: null }, { url: null }, { url: null }],
      filter: {
        date_init: moment()
          .startOf("month")
          .format("YYYY-MM-DD"),
        date_end: moment()
          .endOf("month")
          .format("YYYY-MM-DD"),
      },
    };
  },
  created() {
    this.setTasks({ project_id: this.id }).then((res) => this.handleGetNotes());
  },
  watch: {
    taskList() {
      this.handleGetNotes();
    },
  },
  methods: {
    ...mapActions("hours", ["setNotes", "cleanNotes"]),
    ...mapActions("task", ["setTasks"]),

    handleChangeFilter(event) {
      this.filter.date_init = event.date_init;
      this.filter.date_end = event.date_end;
      this.setTasks({ ...event, project_id: this.id });
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
  computed: {
    ...mapGetters("project", [
      "commitsList",
      "projectDetail",
      "mapCollaborators",
      "collaboratorsList",
    ]),
    ...mapGetters("task", ["taskList", "statisticsTotals"]),
    ...mapGetters("hours", { hoursDate: "notesToDate" }),
    ...mapGetters("hours", ["noteList"]),
    mapHours() {
      return this.hoursDate(this.filter);
    },
    members() {
      const list = this.collaboratorsList.filter(
        (el) => el.project_id == this.id
      );
      return list.length > 0 ? list[0].list : [];
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
