<template>
  <div class="shadow-sm bg-white rounded">
    <!-- <span class="title18">Pendente</span> -->
    <header class="d-flex align-items-center justify-content-between  py-3  px-4 divider_bottom">
        <legend>{{title}}</legend>
        <div><span class="badge" :class="badge_class">{{list.length}}</span></div>
    </header>

    <section class="d-flex flex-column pt-3  px-4">
        <div v-for="(task, i) in list" :key="i" class="mb-3">
            <CardTask :task="task" />
        </div>
    </section>
  </div>
</template>

<script>
import CardTask from './KambanCardTask.vue'

export default {
    name: "ListTaskItem",
    props: {title: String, badge_class: String ,list: Array},
    components: {CardTask}
}
</script>

<style lang="scss" scoped>
h3{
    font-size: 18px;
}
</style>
