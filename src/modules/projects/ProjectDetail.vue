<template>
  <div class="px-5">
    <div class="row my-4">
      <h3 class=" col-12 text-center">Projeto: {{ project.name }}</h3>
      <div class="col-12 mt-5 text-center">
        <h5>Horas trabalhadas: {{ timeFormat(project.totla_minuts) }}</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-6 p-4">
        <div class="row body">
          <legend class="subtitle mb-2">
            Ultimas atividades:
          </legend>
          <table>
            <tr class="line" v-for="(line, i) in project.commits" :key="i">
              <td class="col-10">
                {{ line.mensage }}
              </td>
              <td class="col-2 text-right ">{{ timeFormat(line.minuts) }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-6 p-4">
        <div class="row body">
          <legend class="subtitle mb-2">
            Ultimas atividades:
          </legend>
          <table>
            <tr class="line" v-for="(line, i) in project.tasks" :key="i">
              <td class="col-10">
                {{ line.name }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  computed: {
    project() {
      return this.$store.state.projectDetail;
    },
  },
  methods: {
    timeFormat(minutis) {
      return minutis < 60
        ? `${minutis}min`
        : `${(minutis / 60).toFixed(0)}:${(minutis % 60).toFixed(0)}min`;
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
