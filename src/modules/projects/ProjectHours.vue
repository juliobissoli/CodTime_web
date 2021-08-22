<template>
  <div class="row p-0">
    <section class="col-12 bg-white p-3">
      <div class="page-wrapper">
        <BarTop placeholder="Buscar Horas" btn_label="Iniciar" />
      </div>
    </section>
    <div class="col-12 py-3 px-0 page-wrapper">
      <!-- <h1>Lista de Epcs</h1> -->
      <header class="d-flex divider_bottom justify-content-between">
        <div class="d-flex align-items-center">
          <h4 class="m-0">Horas trabalhadas</h4>
          <span class="ml-2 f14-light">({{labelFilterDate}})</span>
        </div>
        <div class="d-flex">
          <AvatarList :list="projectDetail.collaborators" />
          <h4 class="ml-5 text-secondary">Total: {{totalMinutes | horusFormatGlobal}}</h4>
        </div>
      </header>
      <section class="mt-4 w-100">
        <Table class="w-100">
          <thead>
            <th>TAREFAS</th>
            <th>DESCRIÇÃO</th>
            <th>INICIO</th>
            <th>FIM</th>
            <th>HORAS</th>
          </thead>
          <tbody>
            <tr v-for="(commit, i) in commitsList" :key="i">
              <td style="width: 30%">
                <div class="d-flex align-items-center">
                  <div style="heigth: 30px; width: 30px">
                    <Avatar :item="commit.collaborator.avatar_url" />
                  </div>
                  <span class="ml-2"> Creiação do compnent de input </span>
                </div>
              </td>
              <td style="width: 30%">
                {{ commit.message }}
              </td>
              <td class="text-center text-uppercase">
                {{ commit.date_init | formateDate }}
              </td>
              <td class="text-center text-uppercase">
                {{ commit.date_end | formateDate }}
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <span class="badge badge-secondary">{{
                    commit.minutes | horusFormatGlobal
                  }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </div>
  </div>
</template>

<script>
import BarTop from "../../components/project/BarTop.vue";
import AvatarList from "../../components/utils/AvatarList.vue";
import Avatar from "../../components/utils/Avatar.vue";
import Table from "../../components/utils/Table.vue";
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "ProjectHours",
  components: { BarTop, AvatarList, Avatar, Table },
  data() {
    return {
      list_avatar: [{ url: null }, { url: null }, { url: null }],
      filter_init: moment().startOf('month').format('YYYY-MM-DD'),
      filter_end: moment().endOf('month').format('YYYY-MM-DD'),

    };
  },
  computed: {
    ...mapGetters("project", ["commitsList",   "projectDetail"]),
    totalMinutes() {
      return this.commitsList
        ? this.commitsList.map((el) => el.minutes).reduce((ac, at) => ac + at)
        : 0;
    },
    labelFilterDate(){
        return `de ${moment(this.filter_init).format('DD')} a ${moment(this.filter_end).format('DD/MMMM')}`
    }
  },
  filters: {
    formateDate(date) {
      return moment(date).format("DD MMM HH:mm");
    },
  },
};
</script>