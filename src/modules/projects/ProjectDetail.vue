<template>
  <section class="row p-0">
    <div class="col-12 m-0 p-0 bg-white divider_bottom"> 
      <nav class="px-2 btn_area page-wrapper">
        <button class="btn_menu_item title">
          <router-link :to="{ name: 'ProjectOverview' }">
            <span class="m-1">{{projectDetail.name}}</span> <span class="mx-2 divider">/</span> </router-link>
        </button>
        <button class="btn_menu_item f-light" :class="selected === 'ProjectOverview' ? 'selected' : ''">
          <router-link :to="{ name: 'ProjectOverview' }">
            <span class="m-1">Visão Gera</span></router-link>
        </button>
        <button class="btn_menu_item f-light"  :class="selected === 'ProjectEpc' ? 'selected' : ''">
          <router-link :to="{ name: 'ProjectEpc' }" >
            <span class="p-3">Epcs</span></router-link >
        </button>
        <button  class="btn_menu_item f-light"   :class="selected === 'ProjectTask' ? 'selected' : ''">
          <router-link :to="{ name: 'ProjectTask' }"  ><span class="p-3">Tarefas</span></router-link>
        </button>
        <button  class="btn_menu_item f-light"   :class="selected === 'ProjectHours' ? 'selected' : ''">
          <router-link :to="{ name: 'ProjectHours' }"  ><span class="p-3">Horas</span></router-link>
        </button>
      </nav>
    </div>
    <div class="col-12">
      <router-view />
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "ProjectDetail",
  props: ['id'],
  data (){
    return {
      selected: "ProjectOverview"
    }
  },
  created(){
    this.getProjectDetail(this.id)
     let router = this.$router.history.current.name;
     this.selected = router
  },
   watch: {
    $route(to, from) {
      this.selected = to.name;
    },
  },
  computed: {
    ...mapGetters('project', ['projectDetail']),
  },
  methods: {
    ...mapActions('project', ['getProjectDetail'])
  }

}
</script>

<style lang="scss" scoped>
nav {
  height: 33px;
}
li,ul,a {color: #444444;}

  .btn_area {
    flex: 0 40%;
    display: flex;
    height: 100%;
    align-content: center;
  }
  .btn_menu_item {
    padding: 0;
    background-color: transparent;
    border: none;
    margin-top: 5px;

    // background-color: red;
    border-bottom: 3px solid #ffffff;
    font-size: 16px;
    font-weight: 400;
    a {
      // background: red;
      // height: 605px;
      text-decoration: none;
      color: #444444;
    }
  }


  .selected {
    border-bottom: 3px solid #333333;
  }

  .title{
   font-size: 22px;
   font-weight: 500;
  }
  .f-light{
    font-weight: 300;
  }
  .divider{
    color: #EAEAEA;
    font-size: 24px;
  }

</style>
