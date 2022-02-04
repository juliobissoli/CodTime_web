<template>
  <div class="px-5">
    <div class="row my-4">
      <h3 class=" col-12 text-center">Projeto: {{ project.name }}</h3>
      <div class="col-12 mt-5 text-center">
        <h5>Horas trabalhadas: {{ timeFormated(project.totla_minuts) }}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-12 p-4">
        <div class="row body">
          <legend class="subtitle mb-2 p-3">
            Horas trabalhadas:
          </legend>
          <ChartHorizontal :list="task_list" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="body">
          <legend class=" p-3 subtitle mb-2">
            Ultimas atividades:
          </legend>

          <div class="p-4">
            <div class="row">
              <div class="col-5">
                Commit
              </div>
              <div class="col-2">
                Tarefa
              </div>
              <div class="col-2">
                Horario de Init.
              </div>
              <div class="col-2">
                Horario Fim
              </div>
              <div class="col-1">
                Horas trab.
              </div>
            </div>

            <div
              class="line row my-2"
              v-for="(line, i) in commits.data"
              :key="i"
            >
              <div class="col-5">
                {{ line.mensage }}
              </div>
              <div class="col-2">
                {{ line.task }}
              </div>
              <div class="col-2">
                {{ dataFormat(line.time_start) }}
              </div>
              <div class="col-2">
                {{ dataFormat(line.time_end) }}
              </div>

              <div class="text-right col-1">
                {{ timeFormated(line.minuts) }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-2 p-0 d-flex justify-content-end">
          <pagination
            :totalPages="parseInt(commits.lastPage)"
            @change-page="changePageCommit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ChartHorizontal from "../../components/ChartHorizontal";
import pagination from "../../components/Pagination";
export default {
  name: "ProjectDetail",
  components: { ChartHorizontal, pagination },
  data() {
    return {
      perPage: 15,
    };
  },
  created() {
    this.$store.dispatch("getCommits", {
      cuurentPage: 1,
      perPage: this.perPage,
    });
  },
  computed: {
    project() {
      return this.$store.state.projectDetail;
    },
    commits() {
      return this.$store.getters.commitList;
    },
    task_list() {
      let tasks = this.project.tasks;
      // let max = 100;
      let min = 0;
      let max = tasks
        .map((el) => {
          return el.minuts;
        })
        .reduce(function(a, b) {
          return Math.max(a, b);
        });

      return tasks.map((el) => {
        return {
          name: el.name,
          minuts:
            Math.trunc((el.minuts / max) * 100) > 2
              ? Math.trunc((el.minuts / max) * 100)
              : 5,
          label:
            el.minuts < 60
              ? `00:${el.minuts}`
              : `${Math.trunc(el.minuts / 60)}:${el.minuts % 60}`,
        };
      });
    },
  },

  methods: {
    timeFormated(minutis) {
      return minutis < 60
        ? `${minutis}min`
        : `${Math.trunc(minutis / 60)}:${minutis % 60}min`;
    },
    dataFormat(item) {
      return moment(item).format("(HH:ss) DD MMM");
    },
    changePageCommit(page) {
      this.$store.dispatch("getCommits", {
        currentPage: page,
        perPage: this.perPage,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  border-radius: 0.5rem;
  background-color: #fafafa;

  .line {
    font-style: italic;
    font-size: 15px;
  }
  .title {
    font-weight: 400;
  }
  .subtitle {
    font-size: 18px;
    border-bottom: 1px solid #ccc;
  }
}

.pagnation {
  width: 30%;
}
</style>
