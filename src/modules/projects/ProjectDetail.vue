<template>
  <section class="row">
    <div class="col-12 p-0 bg-white divider_bottom"> 
      <nav class="px-2 btn_area page-wrapper">
        <button class="btn_menu_item title">
          <router-link :to="{ name: 'ProjectOverview' }">
            <span class="m-1">CodTime</span> <span class="mx-2 divider">/</span> </router-link>
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
          <router-link :to="{ name: 'ProjectTask' }"  ><span class="p-3">Taréfas</span></router-link>
        </button>
        <button  class="btn_menu_item f-light"   :class="selected === 'ProjectHours' ? 'selected' : ''">
          <router-link :to="{ name: 'ProjectHours' }"  ><span class="p-3">Horas</span></router-link>
        </button>
      </nav>
    </div>
    <div class="col-12 page-wrapper py-3">
      <router-view />
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectDetail",
  data (){
    return {
      selected: "ProjectOverview"
    }
  },
   watch: {
    $route(to, from) {
      this.selected = to.name;
    },
  },
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
