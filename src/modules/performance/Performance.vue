<template>
  <!-- <router-view /> -->
  <section>
    <div class="row bg-white  divider_bottom ">
      <div class="col-12 p-2 page-wrapper">
        <div class="row px-1">
          <div class="col-8">
            <span class="title22">
              Estatísticas de
              <small class="f14-light">({{ filter | rangeDateGlobal }})</small>
            </span>
          </div>
          <div class="col-4 d-flex justify-content-end">
            <FilterDefault
              :date_end="filter.date_end"
              :date_init="filter.date_init"
              @change-filter="changeFilter"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row page-wrapper p-2">
      <div class="col-12 ">
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
        <div class="row p-1 mt-4">
          <legend class="col-12">Estatísticas de Issues</legend>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="TOTAL DE ISSUE"
              :value="statisticsTotals.list.length | parseString"
            />
          </div>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="ISSUE COM TEMPO ESTIMADO"
              :value="statisticsTotals.issues_estimation_count | parseString"
            />
          </div>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="ISSUE COM TEMPO CONTADO"
              :value="statisticsTotals.issues_timer_count | parseString"
            />
          </div>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="ISSUE STARTADAS"
              :value="statisticsTotals.isseus_started | parseString"
            />
          </div>
        </div>
        <div class="row   p-1  mt-2">
          <div class="col-12 p-4 shadow-sm bg-white rounded">
            <legend>Horas por Projeto</legend>

            <div class="col-12" v-for="(item, i) in horsForProject" :key="i">
              <div class="row mb-2">
                <span class="col-2">
                  {{
                    projectMap.get(item[0]) ? projectMap.get(item[0]).name : "-"
                  }}</span
                >
                <div class="col-10">
                  <CharHorizontal
                    :total="statisticsTotals.total_time_spent"
                    :data_list="getChartData(item[1])"
                  />
                </div>
              </div>
            </div>
            <!-- <ul>
              <li v-for="(item, i) in horsForProject" :key="i">
               
               {{projectMap.get(item[0]) ? projectMap.get(item[0]).name : '-' }} => {{item[1] /60 | horusFormatGlobal }}
               <span class="m-2">{{ item.status }}</span>
                <span class="m-2">{{ item.project_id }}</span>
                <span class="m-2">{{  item.updated_at | fromNowFormatGlobal}}</span>
              </li>
            </ul> -->
          </div>
        </div>
   
      </div>
    </div>
  </section>
</template>

<script>
import CardStatistics from "../../components/utils/CardStatistics.vue";
import CharHorizontal from "../../components/utils/CharHorizontal";
import FilterDefault from '../../components/utils/FilterDefalt.vue'
import ChartHours from '../../components/performance/ChartHours.vue'
import { mapActions, mapGetters } from "vuex";
import moment from 'moment'
export default {
  name: "Performance",
  components: { CardStatistics, CharHorizontal, FilterDefault, ChartHours },
  data() {
    return {
          fields_totals: [
            {entity: 'total_time_spent', title: "TOTAL DE HORAS"},
            {entity: 'total_time_avg_issues', title: "HORAS MEDIA POR ISSUE"},
            {entity: 'total_time_avg_issues_relative', title: "TEMPO MEDIA DE ISSUE RELAT."},
            {entity: 'time_estimate', title: "TOTAL HORAS ESTIMADO"},
            {entity: 'total_estimate_avg_issues', title: "HORAS ESTIMADA MEDIA POR ISSUE"},
            {entity: 'total_estimate_avg_issues_relative', title: "ESTIMATIVA MEDIA DE ISSUE RELAT."},
      ],
      filter: {
        date_init: moment().startOf("month").format("YYYY-MM-DD"), //fim
        date_end: moment().endOf("month").format("YYYY-MM-DD"), //inicio
        project_id: [],
        assignee_id: null

      },
    };
  },
  created() {
    if (this.projectList.length > 0) {
      this.filter.assignee_id = this.userID
      this.filter.project_id =  this.projectList.map((el) => el.id)
      this.setTasks(this.filter);
    }
  },
  watch: {
    projectList() {
      this.filter.project_id =  this.projectList.map((el) => el.id)
      this.setTasks(this.filter);
    },
  },
    watch: {
    taskList() {
      this.handleGetNotes();
    },
  },
  computed: {
    ...mapGetters("task", ["taskList", 'statisticsTotals']),
    ...mapGetters('project', ['projectList']),
    ...mapGetters("user_info", ["userID"]),
    ...mapGetters("hours", { hoursDate: "notesToDate" }),
    mapHours() {
      return this.hoursDate(this.filter);
    },
    ...mapGetters("project", ["projectMap"]),

    horsForProject() {
      const map = new Map();
      let res;
      this.taskList.forEach((el) => {
        res = map.get(el.project_id);
        map.set(el.project_id, (res || 0) + el.time_stats.total_time_spent);
      });

      return map;
    },
  },
  methods: {
    ...mapActions("task", ["setTasks"]),
    ...mapActions("hours", ["setNotes", "cleanNotes"]),

    changeFilter(event){
      Object.assign(this.filter, event)
      this.setTasks(this.filter);

    },

    getChartData(value) {
      return [
        {
          status: 1,
          value: value || 0,
          label: "",
        },
      ];
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

  filters: {
    parseString(value) {
      return value ? value.toString() : "-";
    },
  },
};
</script>

<style lang="scss" scoped></style>
