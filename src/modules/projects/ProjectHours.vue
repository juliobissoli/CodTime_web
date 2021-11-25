<template>
  <div class="row p-0">
    <section class="col-12 bg-white p-3">
      <div class="page-wrapper">
        <BarTop placeholder="Buscar Horas" btn_label="Iniciar">
          <FilterDefault
            :date_init="filter.date_init"
            :date_end="filter.date_end"
            :avatar_list="mapCollaborators.get(id)"
            @change-filter="handleChangeFilter"
          />
        </BarTop>
      </div>
    </section>
    <div class="col-12 py-3 px-0 page-wrapper">
      <!-- <h1>Lista de Epcs</h1> -->
      <header class="d-flex divider_bottom justify-content-between">
        <div class="d-flex align-items-center">
          <h4 class="m-0">Horas trabalhadas</h4>
          <span class="ml-2 f14-light">({{ filter | rangeDateGlobal }})</span>
        </div>
        <div class="d-flex">
          <AvatarList :list="mapCollaborators.get(id)" />
          <h4 class="ml-5 text-secondary">
            Total: {{ totalMinutes | horusFormatGlobal }}
          </h4>
        </div>
      </header>
      <section class="mt-4 w-100">
        <Table class="w-100">
          <thead>
            <th>TAREFAS</th>
            <th>DESCRIÇÃO</th>
            <th>DATA</th>
            <th>REGISTRADO</th>
            <th>HORAS</th>
          </thead>
          <tbody>
            <tr v-for="(note, i) in noteList" :key="i">
              <td style="max-width: 200px">
                <div class="d-flex align-items-center">
                  <div style="heigth: 30px; width: 30px">
                    <Avatar :item="note.issue.assignee" />
                  </div>
                  <span style="width: 80%" class="ml-2 text-truncate">
                    #{{ note.issue.iid }} {{ note.issue.title }}
                  </span>
                </div>
              </td>
              <td style="width: 30%">
                {{ note.body }}
              </td>
              <td class="text-center text-uppercase">
                {{ note.date | fromDateGlobal }}
              </td>
              <td class="text-center text-uppercase">
                {{ note.created_at | formateDate }}
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <span
                    class="badge "
                    :class="
                      note && note.time.subtracted
                        ? 'badge-danger'
                        : 'badge-secondary'
                    "
                  >
                    {{ note.time.subtracted ? "-" : "" }}
                    {{
                      ((note.time.second_spend || 0) / 60) | horusFormatGlobal
                    }}</span
                  >
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
import FilterDefault from "../../components/utils/FilterDefalt.vue";

import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "ProjectHours",
  components: { BarTop, AvatarList, Avatar, Table, FilterDefault },
  props: ["id"],

  data() {
    return {
      list_avatar: [{ url: null }, { url: null }, { url: null }],
      filter: {
        date_init: moment().startOf("month").format("YYYY-MM-DD"),
        date_end: moment().endOf("month").format("YYYY-MM-DD"),
      },
    };
  },
  created() {

    this.setTasks({ project_id: this.id }).then((res) =>
      this.handleGetNotes()
    );
  },
  watch: {
    taskList() {
      console.log("Trigo a task");
      this.handleGetNotes()
    },

  },
  methods: {
    ...mapActions("hours", ["setNotes", "cleanNotes"]),
    ...mapActions("task", ["setTasks"]),


    handleChangeFilter(event) {
      this.filter.date_init = event.date_init;
      this.filter.date_end = event.date_end;
      this.setTasks({...event, project_id: this.id});
    },

    handleGetNotes(){
      this.cleanNotes()
      if (this.taskList.length > 0) {
        this.taskList.forEach((el) => {
          this.setNotes(el);
        });
      }
    }
  },
  computed: {
    ...mapGetters("project", [
      "commitsList",
      "projectDetail",
      "mapCollaborators",
    ]),
    ...mapGetters("task", ["taskList"]),
    ...mapGetters("hours", ["noteList"]),

    totalMinutes() {
      // return 0;
      if (this.noteList) {
        // console.length('pasok')
        return this.noteList.length > 0
          ? this.noteList
              .map((el) => (el.time.subtracted ? -1 : 1) * el.time.second_spend)
              .reduce((ac, at) => ac + at) / 60
          : 0;
      } else return 0;
    },
  },
  filters: {
    formateDate(date) {
      return moment(date).format("DD MMM HH:mm");
    },
  },
};
</script>
