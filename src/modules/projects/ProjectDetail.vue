<template>
  <section class="row">
    <div class="col-12 p-2 pt-3 bg-white divider_bottom">
      <nav class="page-wrapper ">
        <li class="d-flex align-items-center ">
          <ul> <router-link :to="{ name: 'ProjectOverview' }"><span class="m-1">CodTime /</span></router-link> </ul>
          <ul> <router-link :to="{ name: 'ProjectOverview' }"><span class="m-1">Visão Gera</span></router-link></ul>
          <ul> <router-link :to="{ name: 'ProjectEpc' }"><span class="m-1">Epcs</span></router-link> </ul>
          <ul> <router-link :to="{ name: 'ProjectTask' }"><span class="m-1">Taréfas</span></router-link> </ul>
          <ul> <router-link :to="{ name: 'ProjectHours' }"><span class="m-1">Horas</span></router-link> </ul>
        </li>
      </nav>
    </div>
    <div class="col-12 page-wrapper py-3">  
      <router-view />
    </div>
  </section>
</template>

<style lang="scss" scoped>
nav {
    height: 33px;
}
li, ul, a{
    color: #444444;
}
</style>
