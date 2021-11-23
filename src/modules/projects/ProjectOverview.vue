<template>
  <section class="page-wrapper">
    <div class="row py-4 ">
      <div class="col-5 d-flex flex-column">
        <BoxImage :image="projectDetail.avatar_url"  :rounded="true" />
        <button class="mt-2 btn btn-sm btn-outline-dark">Alterar imagem</button>
      </div>
      <div class="col-7">
        <div class="row">
          <section class="col-8">
            <legend>Descrição</legend>
            <div class="pr-4 describe_area divider_right">
              <p class="text-describe">
                {{ projectDetail.description }}
              </p>
              <span class="text-muted mt-4"
                >Tipo do projeto:
                <span class="text-dark">{{ projectDetail.type }}</span></span
              >
              <div class=" row mt-2 p-2 m-0 rounded shadow-sm bg-white d-flex justify-content-around " >
                <div class="d-flex flex-column col-4 align-items-center">
                  <span class="text-secondary">EPCS</span>
                  <span>12</span>
                </div>
                <div
                  class="
                    divider_left divider_right
                    d-flex
                    flex-column
                    col-4
                    align-items-center
                  "
                >
                  <span class="text-secondary">Tarefas</span>
                  <span>12</span>
                </div>
                <div class="d-flex flex-column col-4 align-items-center">
                  <span class="text-secondary">COMMITS</span>
                  <span>{{projectDetail.statistics ? projectDetail.statistics.commit_count : ''}}</span>
                </div>
              </div>
            </div>
          </section>
          <div class="col-4 p-1">
            <legend>Colaboradores</legend>
            <div
              v-for="(collaborator, c) in collaborators"
              :key="c"
            >
              <CollaboratorItem class="mt-3" :collaborator="collaborator" />
            </div>
            <button class="mt-3 btn btn-sm btn-block btn-dark">
              + colaborador
            </button>
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
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BoxImage from "../../components/utils/BoxImage.vue";
import CollaboratorItem from "../../components/project/CollaboratorItemAction.vue";

export default {
  name: "ProjectOverview",
  components: { BoxImage, CollaboratorItem },
  props: ['id'],

  computed: {
    ...mapGetters("project", ["projectDetail", "collaboratorsList", "mapCollaborators"]),

    collaborators(){
      const list = this.collaboratorsList.filter(el => el.project_id == this.id)
      return list.length > 0 ? list[0].list : []
      // return project.length > 0 ? project.list : []
      // return this.mapCollaborators.get(this.id)
    },


    // ...mapGetters("project", ["collaboratorsList"]),

    // collaborators() {
    //   const map = new Map();
    //   this.collaboratorsList.forEach((el) => {
    //     map.set(el.project_id, el.list);
    //   });
    //   return map;
    // },
  },
};
</script>

<style lang="scss" scoped>
legend {
  font-size: 22px;
}
.text-describe {
  font-size: 12px;
}

.describe_area {
  min-height: 200px;
}
</style>
