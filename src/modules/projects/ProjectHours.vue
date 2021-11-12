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
          <span class="ml-2 f14-light">({{ labelFilterDate }})</span>
        </div>
        <div class="d-flex">
          <AvatarList :list="projectDetail.collaborators" />
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
            <th>INICIO</th>
            <th>FIM</th>
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
                    {{ note.issue.title }}
                  </span>
                </div>
              </td>
              <td style="width: 30%">
                {{ note.body }}
              </td>
              <td class="text-center text-uppercase">
                {{ note.created_at | formateDate }}
              </td>
              <td class="text-center text-uppercase">
                {{ note.created_at | formateDate }}
              </td>
              <td>
                <div class="d-flex justify-content-center">
                  <span class="badge badge-secondary">{{
                    (note.minutes || 0) | horusFormatGlobal
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
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "ProjectHours",
  components: { BarTop, AvatarList, Avatar, Table },
  props: ["id"],

  data() {
    return {
      list_avatar: [{ url: null }, { url: null }, { url: null }],
      filter_init: moment()
        .startOf("month")
        .format("YYYY-MM-DD"),
      filter_end: moment()
        .endOf("month")
        .format("YYYY-MM-DD"),
    };
  },
  created() {
    this.cleanNotes();
    if (this.taskList.length > 0) {
      this.taskList.forEach((el) => {
        this.setNotes(el);
      });
    } else {
      this.setTasks(this.id);
    }
  },
  watch: {
    taskList() {
      console.log("Trigo a task");
      if (this.taskList.length > 0) {
        this.taskList.forEach((el) => {
          this.setNotes(el);
        });
      }
    },
    id() {
      console.log("Muda id");
    },
  },
  methods: {
    ...mapActions("hours", ["setNotes", "cleanNotes"]),
    ...mapActions("task", ["setTasks"]),
  },
  computed: {
    ...mapGetters("project", ["commitsList", "projectDetail"]),
    ...mapGetters("task", ["taskList"]),
    ...mapGetters("hours", ["noteList"]),

    totalMinutes() {
      return 0;
      // return this.commitsList
      //   ? this.commitsList.map((el) => el.minutes).reduce((ac, at) => ac + at)
      //   : 0;
    },
    labelFilterDate() {
      return `${moment(this.filter_init).format("DD")} a ${moment(
        this.filter_end
      ).format("DD [de] MMMM")}`;
    },
  },
  filters: {
    formateDate(date) {
      return moment(date).format("DD MMM HH:mm");
    },
  },
};
</script>
