<template>
    <div class="card shadow-sm rounded d-flex flex-column">
        <section class=" divider_bottom">
            <BoxImage :image="null"/>
        </section>
        <section class="body p-4">
            <header class="d-flex justify-content-between">
                <legend>CodTime</legend>
                <div><span class="badge badge-primary">Gerente</span></div>
            </header>
            <div class="mb-2">
                <span class="text-primary pr-1 divider_right">Sprint atual: 21</span>
                <span class="text-secondary ml-1">Contribuição 32h 24min </span>
            </div>
            <span class="w-100">Tarefas:</span>
            <div class="mt-1">

            <TaskLabel class_color="success" >
                    <span class="text-secondary mr-1">#1853</span>
                    <span>Crinação do componente de input</span>
            </TaskLabel >
            </div>
        </section>
        <footer class="d-flex flex-row-reverse px-4">
            <AvatarList :list="[{url:null},{url:null}]"/>
        </footer>
    </div>
</template>

<script>
import TaskLabel from "../utils/LabelColorIndicator.vue"
import AvatarList from '../utils/AvatarList.vue'
import BoxImage from '../utils/BoxImage.vue'

export default {
    name: "CardProject",
    components: {TaskLabel, AvatarList, BoxImage}

}
</script>

<style lang="scss" scoped>
.card{
    .text-secondary{
        color: #999999;
        font-weight: 400;
    }
    span{
        font-size: 14px;
    }
}
</style>