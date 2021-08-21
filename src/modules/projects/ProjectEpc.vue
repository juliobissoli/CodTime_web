<template>
    <div class="row p-0">
      <section class="col-12 bg-white  p-3">
          <div class="page-wrapper">
          <BarTop placeholder="Buscar Epc" btn_label="+ Epcs" />
          </div>
      </section>
          <div class="col-12 py-3 px-0 page-wrapper">
          <!-- <h1>Lista de Epcs</h1> -->
          <EpcItem />
      </div>
    </div>
</template>

<script>
import BarTop from  '../../components/project/BarTop.vue'
import EpcItem from '../../components/project/EpcItem.vue'
export default {
    name: "ProjectEpc",
    components: {BarTop, EpcItem}
}
</script>