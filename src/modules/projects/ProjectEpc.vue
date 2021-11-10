<template>
    <div class="row p-0">
      <section class="col-12 bg-white  p-3">
          <div class="page-wrapper">
          <BarTop placeholder="Buscar Epc" btn_label="+ Epcs" />
          </div>
      </section>
          <div v-for="(epc, i) in milestoneList" :key="i" class="col-12 py-3 px-0  page-wrapper">
          <!-- <h1>Lista de Epcs</h1> -->
          <EpcItem :epc="epc" :issues_map="issuesMap"/>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BarTop from  '../../components/project/BarTop.vue'
import EpcItem from '../../components/project/EpcItem.vue'
import Epcs from '../../data/epc'

export default {
    name: "ProjectEpc",
    props: ['id'],
    components: {BarTop, EpcItem},
    created(){
        this.setMilestone(this.id).then(
            this.setTasks(this.id)
        )
    },
    computed:{
        ...mapGetters('milestone', ['milestoneList']),
        ...mapGetters('task', ['taskList']),
        issuesMap(){
            const map = new Map()
            let res
            this.taskList.forEach(el => {
                if(el.milestone){
                    res = map.get(el.milestone.id)
                    map.set(el.milestone.id, res ? [...res, {title: el.title, status: el.status}] : [{title: el.title, status: el.status}])
                }
            });
            return map
        }
        // epcsList(){
        //     return Epcs.epcs.filter(el => el.project_id == this.projectDetail.id)
        // }
    },

    methods: {
        ...mapActions('milestone', ['setMilestone']),
        ...mapActions('task', ['setTasks'])

    }
}
</script>