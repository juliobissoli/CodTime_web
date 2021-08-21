<template>
    <div class="row p-0">
      <section class="col-12 bg-white  p-3">
          <div class="page-wrapper">
          <BarTop placeholder="Buscar Epc" btn_label="+ Epcs" />
          </div>
      </section>
          <div v-for="(epc, i) in epcsList" :key="i" class="col-12 py-3 px-0 page-wrapper">
          <!-- <h1>Lista de Epcs</h1> -->
          <EpcItem :epc="epc"/>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BarTop from  '../../components/project/BarTop.vue'
import EpcItem from '../../components/project/EpcItem.vue'
import Epcs from '../../data/epc'

export default {
    name: "ProjectEpc",
    props: ['id'],
    components: {BarTop, EpcItem},
    computed:{
        ...mapGetters('project', ['projectDetail', 'epcList']),
        epcsList(){
            return Epcs.epcs.filter(el => el.project_id == this.projectDetail.id)
        }
    }
}
</script>