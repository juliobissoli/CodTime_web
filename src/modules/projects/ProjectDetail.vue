<template>
  <div class="px-5">
    <div class="row my-4">
      <h3 class=" col-12 text-center">Projeto: {{ project.name }}</h3>
      <div class="col-12 mt-5 text-center">
        <h5>Horas trabalhadas: {{ timeFormat(project.totla_minuts) }}</h5>
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
              <div class="col-4">
                Commit
              </div>
              <div class="col-3">
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
              v-for="(line, i) in project.commits"
              :key="i"
            >
              <div class="col-4">
                {{ line.mensage }}
              </div>
              <div class="col-3">
                {{ line.task }}
              </div>
              <div class="col-2">
                {{ dataFormat(line.time_start) }}
              </div>
              <div class="col-2">
                {{ dataFormat(line.time_end) }}
              </div>

              <div class="text-right col-1">{{ timeFormat(line.minuts) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 p-4">
        <div class="row body">
          <legend class="subtitle mb-2 p-3">
            Ultimas atividades:
          </legend>
          <ChartHorizontal :list="task_list" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ChartHorizontal from "../../components/ChartHorizontal";
export default {
  name: "ProjectDetail",
  components: { ChartHorizontal },
  computed: {
    project() {
      return this.$store.state.projectDetail;
    },
    task_list() {
      let max = 100;
      let min = 0;
      return this.project.tasks.map((el) => {
        return { name: el.name, minuts: Math.random() * (max - min) + min };
      });
    },
  },

  methods: {
    timeFormat(minutis) {
      return minutis < 60
        ? `${minutis}min`
        : `${(minutis / 60).toFixed(0)}:${(minutis % 60).toFixed(0)}min`;
    },
    dataFormat(item) {
      return moment(item).format("(HH:ss) DD MMM");
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
</style>
