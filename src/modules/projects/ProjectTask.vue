<template>
  <div class="row p-0">
    <section class="col-12 bg-white p-3">
      <div class="page-wrapper">
        <BarTop placeholder="Buscar tarefa" btn_label="+ Tarefa" />
      </div>
    </section>
    <div class="col-12 py-3 px-0 page-wrapper">
      <!-- <h1>Lista de Epcs</h1> -->
      <h1>Tarefa</h1>
    </div>
  </div>
</template>

<script>
import BarTop from "../../components/project/BarTop.vue";
export default {
  name: "ProjectTask",
  components: { BarTop },
};
</script>