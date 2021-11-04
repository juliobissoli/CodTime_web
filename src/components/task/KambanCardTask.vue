<template>
    <div class="card shadow-sm">
        <header class=" px-3 py-2">
            <h5 class="">{{projectMap.get(task.project_id).name}}</h5>
        </header>
        <section class=" px-3 py-1">
            <span class="text-muted">#{{task.iid}}</span>
            <span class="ml-1">{{task.title}}</span>
        </section>
        <footer class="d-flex justify-content-between divider_top px-3 py-2">
            <div class="d-flex align-items-center">
                <i class="icon icon-thermostat"></i>
                <!-- <small class="text-muted">{{task.difficulty}}</small> -->
            </div>
            <div class="d-flex align-items-center">
                <small class="text-muted" v-show="task.milestone" >Epc: #{{task.milestone ? task.milestone.id : ''}}</small>
                <!-- <BadgePriority class="ml-1" :priority="task.epc.priority" /> -->
                <div class="avatar ml-1">
                 <Avatar :item="task.collaborator" :small="true"/>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import BadgePriority from '../utils/BadgePriority.vue'
import Avatar from '../utils/Avatar.vue'
export default {
    name: "KambanCardTask",
    props: {task: Object},
    components: {BadgePriority, Avatar},
    computed: {
        projectMap(){
            return this.$store.getters.mapProjects
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    border-radius: 10px;
    border:1px solid  #f1f1f1f1 ;
    background-color: #ffffff;
    font-size: 14px;
    cursor: pointer;

    .avatar{
        height: 34px;
        width: 34px;
    }
}
.icon{
    height: 20px;
    width: 20px;
}

.text-muted{
    color: #999999;
}
small{
    font-size: 12px;
}
</style>