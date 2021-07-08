<template>
  <!-- <router-view /> -->
  <section>
    <div class="row bg-white  divider_bottom p-2 pr-4 ">
      <div class="col-12 page-wrapper">
        <div class="row ">
          <div class="col-10">
            <input type="text" class="form-control" />
          </div>
          <button class="col-2 btn btn-dark">Filter</button>
        </div>
      </div>
    </div>
    <div class="row page-wrapper p-2">
      <div class="col-12 ">
        <div class="row">
          <router-link class="col-6  p-1 pb-3 " :to="{ name: 'ProjectDetail' }">
            <div class="p-5 shadow-sm bg-white rounded">
              <span> Projeto 1 </span> <br />
              <small>Descrição do projeto</small> <br /><br />
            </div>
          </router-link>
          <router-link class="col-6  p-1 pb-3 " :to="{ name: 'ProjectDetail' }">
            <div class="p-5 shadow-sm bg-white rounded">
              <span> Projeto 1 </span> <br />
              <small>Descrição do projeto</small> <br /><br />
            </div>
          </router-link><router-link class="col-6  p-1 pb-3 " :to="{ name: 'ProjectDetail' }">
            <div class="p-5 shadow-sm bg-white rounded">
              <span> Projeto 1 </span> <br />
              <small>Descrição do projeto</small> <br /><br />
            </div>
          </router-link><router-link class="col-6  p-1 pb-3 " :to="{ name: 'ProjectDetail' }">
            <div class="p-5 shadow-sm bg-white rounded">
              <span> Projeto 1 </span> <br />
              <small>Descrição do projeto</small> <br /><br />
            </div>
          </router-link><router-link class="col-6  p-1 pb-3 " :to="{ name: 'ProjectDetail' }">
            <div class="p-5 shadow-sm bg-white rounded">
              <span> Projeto 1 </span> <br />
              <small>Descrição do projeto</small> <br /><br />
            </div>
          </router-link>

          <!-- <button class="col-6  p-1 pb-3 " @click.prevent="changeToPage()">
            <div class="p-5 shadow-sm bg-white rounded">
              <span> Projeto 1 </span><br />
              <small>Descrição do projeto</small><br /><br />
            </div>
          </button>
          <button class="col-6  p-1 pb-3 " @click.prevent="changeToPage()">
            <div class="p-5 shadow-sm bg-white rounded">
              <span> Projeto 1 </span><br />
              <small>Descrição do projeto</small><br /><br />
            </div>
          </button>
          <button class="col-6  p-1 pb-3 " @click.prevent="changeToPage()">
            <div class="p-5 shadow-sm bg-white rounded">
              <span> Projeto 1 </span><br />
              <small>Descrição do projeto</small><br /><br />
            </div>
          </button> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectList",

  methods: {
    changeToPage() {
      this.$router.push({ name: "ProjectDetail" });
    },
  },
};
</script>
<style lang="scss" scoped>
// button{
//   border: none;
//   background-color: transparent;
// }
</style>
