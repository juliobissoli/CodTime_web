<template>
    <div class="row p-0">
      <section class="col-12 bg-white  p-3">
          <div class="page-wrapper">
          <BarTop placeholder="Buscar Horas" btn_label="Iniciar" />
          </div>
      </section>
          <div class="col-12 py-3 px-0 page-wrapper">
          <!-- <h1>Lista de Epcs</h1> -->
          <h1>Horas</h1>
          </div>
    </div>
</template>

<script>
import BarTop from  '../../components/project/BarTop.vue'
export default {
    name: "ProjectHours",
    components: {BarTop}
}
</script>