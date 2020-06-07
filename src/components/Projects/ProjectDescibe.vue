<template>
  <div class="row body p-3">
    <h4 class="col-12 p-1 text-center title">{{ item.name }}</h4>
    <div class="col-6">
      <strong> Total de horas: {{ item.total_hours }} </strong>
    </div>
    <div class="col-6 text-right">
      <strong> Total de tarefas: {{ item.tescks.length }} </strong>
    </div>
    <div class="col-12 mt-5 ">
      <legend class="subtitle mb-2">
        Ultimas atividades:
      </legend>
      <table>
        <tr class="row" v-for="(line, i) in item.commits" :key="i">
          <td class="col-10">
            {{ line.mensage }}
          </td>
          <td class="col-2 text-right ">{{ line.hours }}Horas</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PorjectDescribe",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.body {
  border-radius: 0.5rem;
  background-color: #fafafa;

  .row {
    font-style: italic;
    font-size: 12px;
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
