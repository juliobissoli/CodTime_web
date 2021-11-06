<template>
  <!-- <router-view /> -->
  <section>
    <div class="row bg-white  divider_bottom ">
      <div class="col-12 p-2 page-wrapper">
        <div class="row px-1">
          <div class="col-8">
            <span class="title22">
              Estatísticas desse mês
              <small class="f14-light">(01 a 30 Abr 2021)</small></span
            >
          </div>
          <div class="col-4 d-flex justify-content-end">
            <div>
              <button class="btn btn-outline-dark">Filter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row page-wrapper p-2">
      <div class="col-12 ">
        <div class="row">
          <div class="col-3  p-1  ">
            <CardStatistics
              title="TOTAL DE HORAS"
              :value="(statistics.total_time_spent / 60) | horusFormatGlobal"
            />
          </div>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="TOTAL HORAS ESTIMADO"
              :value="(statistics.time_estimate / 60) | horusFormatGlobal"
            />
          </div>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="HORAS MEDIA POR ISSUE"
              :value="
                (statistics.total_time_avg_issues / 60) | horusFormatGlobal
              "
            />
          </div>

          <div class="col-3  p-1  ">
            <CardStatistics
              title="HORAS ESTIMADA MEDIA POR ISSUE"
              :value="
                (statistics.total_estimate_avg_issues / 60) | horusFormatGlobal
              "
            />
          </div>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="TEMPO MEDIA DE ISSUE RELAT."
              :value="
                (statistics.total_time_avg_issues_relative / 60) | horusFormatGlobal
              "
            />
          </div>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="ESTIMATIVA MEDIA DE ISSUE RELAT."
              :value="
                (statistics.total_estimate_avg_issues_relative / 60)
                  | horusFormatGlobal
              "
            />
          </div>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="TEMPO MÉDIO POR COLABORADOR"
              value="Calc/rannking"
            />
          </div>
          
        </div>
        <div class="row p-1 mt-4">
          <legend class="col-12">Estatísticas de Issues</legend>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="TOTAL DE ISSUE"
              :value="statistics.list.length  | parseString"
            />
          </div>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="ISSUE COM TEMPO ESTIMADO"
              :value="statistics.issues_estimation_count | parseString"
            />
          </div>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="ISSUE COM TEMPO CONTADO"
              :value="statistics.issues_timer_count | parseString"
            />
          </div>
          <div class="col-3  p-1  ">
            <CardStatistics
              title="ISSUE STARTADAS"
              :value="statistics.isseus_started | parseString"
            />
          </div>
        </div>
        <div class="row   p-1  mt-2">
          <div class="col-12 p-4 shadow-sm bg-white rounded">
            <legend>Horas por Projeto</legend>
            <ul>
              <li v-for="(item, i) in horsForProject" :key="i">
               
               {{projectMap.get(item[0]) ? projectMap.get(item[0]).name : '-' }} => {{item[1] /60 | horusFormatGlobal }}
                <!-- <span class="m-2">{{ item.status }}</span>
                <span class="m-2">{{ item.project_id }}</span>
                <span class="m-2">{{  item.updated_at | fromNowFormatGlobal}}</span> -->
              </li>
            </ul>
          </div>
        </div>
        <div class="row   p-1  mt-2">
          <div class="col-12 p-4 shadow-sm bg-white rounded">
            <legend>Horas por dia</legend>
            <span>Gráficos de desempenho</span><br /><br />
          </div>
        </div>
        <div class="row   p-1  mt-2">
          <div class="col-12 p-4 shadow-sm bg-white rounded">
            <legend>Horas por dia</legend>
            <span>Gráficos de desempenho</span><br /><br />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardStatistics from "../../components/utils/CardStatistics.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Performance",
  components: { CardStatistics },
  created() {
    this.setTasks();
  },
  computed: {
    ...mapGetters("task", ["taskList"]),

    statistics() {
      if (this.taskList.length > 0) {
        let total_time_spent = 0;
        let time_estimate = 0;
        let isseus_started = 0;
        let issues_estimation_count = 0;
        let issues_timer_count = 0;
        const list = this.taskList.map((el) => {
          time_estimate += el.time_stats.time_estimate;
          total_time_spent += el.time_stats.total_time_spent;
          isseus_started += el.status != 0 ? 1 : 0;
          issues_estimation_count += el.time_stats.time_estimate != 0 ? 1 : 0;
          issues_timer_count += el.time_stats.total_time_spent != 0 ? 1 : 0;
          return {
            ...el.time_stats,
            created_at: el.created_at,
            updated_at: el.updated_at,
            issues_id: el.id,
            iid: el.iid,
            project_id: el.project_id,
            status: el.status,
          };
        });
        return {
          list,
          time_estimate,
          total_time_spent,
          isseus_started,
          issues_timer_count,
          issues_estimation_count,

          total_time_avg_issues: total_time_spent / issues_timer_count,
          total_estimate_avg_issues: time_estimate / issues_estimation_count,

          total_time_avg_issues_relative: total_time_spent / (list.length || 1),
          total_estimate_avg_issues_relative: time_estimate / (list.length || 1),
        };
      } else {
        return {
          list: [],
          total: 0,
        };
      }
    },

    projectMap(){
      return this.$store.getters.mapProjects
    },

    horsForProject(){
      const map = new Map()
      let res
      this.taskList.forEach(el => {
        res = map.get(el.project_id)
        map.set(el.project_id, ((res || 0) + el.time_stats.total_time_spent))
        
      });

      return map
    }
  },
  methods: {
    ...mapActions("task", ["setTasks"]),
  },

  filters: {
    parseString(value){
      return value ? value.toString() : '-'
    }
  }
};
</script>

<style lang="scss" scoped></style>
