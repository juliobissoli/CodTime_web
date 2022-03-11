<template>
  <section class="page-wrapper">
    <div class="row py-4 ">
      <div class="col-5 d-flex flex-column">
        <BoxImage :image="projectDetail.avatar_url" :rounded="true" />
        <button class="mt-2 btn btn-sm btn-outline-dark">Alterar imagem</button>
      </div>
      <div class="col-7">
        <div class="row">
          <section class="col-12">
            <legend>Descrição</legend>
            <div class="pr-4 d-flex flex-column">
              <p class="text-secondary">
                {{ projectDetail.description }}
              </p>
              <span class="mt-4"
                >ID do projeto:
                <span class="text-primary bg-white shadow-sm rounded p-2">{{
                  projectDetail.id
                }}</span>
              </span>
              <span class="mt-4 "
                >Repositório:
                <span class="text-primary bg-white shadow-sm rounded p-2">{{
                  projectDetail.web_url
                }}</span>
              </span>
              <small class="mt-4"
                >Ultimo acesso:
                {{ projectDetail.last_activity_at | fromNowFormatGlobal }}
              </small>
            </div>
          </section>
 
        </div>
        <div class="row mt-5">
          <legend class="p-0 col-12 my-1 d-flex justify-content-between align-items-center">
            Colaboradores
            <!-- <div class="d-flex align-items-center">
              <button class="btn btn-sm btn-block btn-dark">
                + colaborador
              </button>
            </div> -->
          </legend>
          <div class="col-12 py-2 chart shadow-sm bg-white rounded ">
            <Table>
              <tr>
                <th></th>
                <th>Nome</th>
                <th>Username</th>
                <th>Max role</th>
              </tr>
              <tr v-for="(item, i) in collaborators" :key="i">
                <td style="width: 40px"><Avatar :item="item" /></td>
                <td class="">{{ item.name }}</td>
                <td class="text-center">{{ item.username }}</td>
                <td class="text-center">
                  <span class="badge badge-secondary">
                    {{ accessMap.get(item.access_level).label }}
                  </span>
                </td>
              </tr>
            </Table>
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
import Table from "../../components/utils/Table.vue";
import Avatar from "../../components/utils/Avatar.vue";
export default {
  name: "ProjectOverview",
  components: { BoxImage, CollaboratorItem, Table, Avatar },
  props: ["id"],

  computed: {
    ...mapGetters("project", [
      "projectDetail",
      "collaboratorsList",
      "mapCollaborators",
    ]),

    collaborators() {
      const list = this.collaboratorsList.filter(
        (el) => el.project_id == this.id
      );
      return list.length > 0 ? list[0].list : [];
      // return project.length > 0 ? project.list : []
      // return this.mapCollaborators.get(this.id)
    },

    accessMap() {
      return this.$store.getters.mapGlobalAccessLevel;
    },
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
