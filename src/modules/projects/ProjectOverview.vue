<template>
  <div class="row py-4">
    <div class="col-5 d-flex flex-column">
      <BoxImage :image="null" />
      <button class=" mt-2 btn btn-sm btn-outline-dark">Alterar imagem</button>
    </div>
    <div class="col-7">
      <div class="row">
        <section class="col-8 ">
          <legend>Descrição</legend>
          <div class="pr-4 describe_area divider_right">
            <p class="text-describe">
              Descrição do projeto, Descrição do projeto,Descrição do
              projeto,Descrição do projeto,Descrição do projeto,Descrição do
              projeto,Descrição do projeto,
            </p>
            <span class="text-muted mt-4">Tipo do projeto: <span class="text-dark">Web</span></span>
            <div class="row mt-2 p-2 m-0 rounded shadow-sm bg-white d-flex justify-content-around">
                <div class="d-flex flex-column col-4 align-items-center">
                    <span class="text-secondary">EPCS</span>
                    <span>12</span>
                </div>
                   <div class="divider_left divider_right d-flex flex-column col-4 align-items-center">
                    <span class="text-secondary">Taréfaz</span>
                    <span>12</span>
                </div>   <div class="d-flex flex-column col-4 align-items-center">
                    <span class="text-secondary">COMMITS</span>
                    <span>12</span>
                </div>
            </div>
          </div>
        </section>
        <div class=" col-4">
          <legend>Colaboradores</legend>
        </div>
      </div>
      <div class="row mt-5">
            <legend class="p-0 col-12">Andamento do projeto</legend>
            <div class="col-12 chart shadow-sm bg-white rounded p-5">
                <span>Hora x dia</span>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoxImage from "../../components/utils/BoxImage.vue";

export default {
  name: "ProjectOverview",
  components: { BoxImage },
};
</script>

<style lang="scss" scoped>
legend {
  font-size: 22px;
}
.text-describe {
  font-size: 12px;
}

.describe_area{
    min-height: 200px;
}
</style>
