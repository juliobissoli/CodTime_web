<template>
  <div class="row p-0">
    <section class="col-12 bg-white p-3">
      <div class="page-wrapper">
        <BarTop 
          @get-search="handleChangeFilter"
          placeholder="Buscar milestone"
          btn_label="+ Milestone"
          @btn-clicked="showHelper({topic: 'milestone',  url_redirect: projectDetail.web_url || null})"
          >
          <FilterDefault
            :filds_status="filds_status"
            @change-filter="handleChangeFilter"
          />
        </BarTop>
      </div>
    </section>
    <section class="col-12 py-2 page-wrapper">
      <header class="d-flex divider_bottom justify-content-between">
        <div class="d-flex align-items-center">
          <h4 class="m-0">Milestone</h4>
        </div>
        <div v-show="filter.state">
          Status: 
          <span class="badge " :class="filter.state === 'active' ? 'badge-primary' : 'badge-secondary'">{{filter.state}}</span>
        </div>
      </header>

      <div v-for="(epc, i) in milestoneList" :key="i" class="col-12 py-3 px-0 ">
        <!-- <h1>Lista de Epcs</h1> -->
        <EpcItem :epc="epc" :issues_map="issuesMap" />
      </div>
    </section>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions, mapGetters } from "vuex";
import BarTop from "../../components/project/BarTop.vue";
import EpcItem from "../../components/project/EpcItem.vue";
import FilterDefault from "../../components/utils/FilterDefalt.vue";

export default {
  name: "ProjectEpc",
  props: ["id"],
  components: { BarTop, EpcItem, FilterDefault },
  data() {
    return {
      filter: {
        state: "active",
        project_id: this.id,
      },
      filds_status: [
        { value: "active", text: "Ativo" },
        { value: "closed", text: "Inativo" },
        { value: "all", text: "Todos" },
      ],
    };
  },
  created() {
    this.setMilestone(this.filter).then((res) => {
      this.setIssues({ milestone: res.map((el) => el.title) });
    });
  },
  computed: {
    ...mapGetters("milestone", ["milestoneList"]),
    ...mapGetters("project", ['projectDetail']),
    ...mapGetters("issue", ["issueList"]),
    issuesMap() {
      const map = new Map();
      let res;
      this.issueList.forEach((el) => {
        if (el.milestone) {
          res = map.get(el.milestone.id);
          map.set(
            el.milestone.id,
            res
              ? [...res, { title: el.title, status: el.status }]
              : [{ title: el.title, status: el.status }]
          );
        }
      });
      return map;
    },
    // epcsList(){
    //     return Epcs.epcs.filter(el => el.project_id == this.projectDetail.id)
    // }
  },

  watch: {
    milestoneList() {
      this.setIssues({ milestone: this.milestoneList.map((el) => el.title) });
    },
  },

  methods: {
    ...mapActions("milestone", ["setMilestone"]),
    ...mapActions("issue", ["setIssues"]),
    ...mapActions(['showHelper']),


    handleChangeFilter(event) {
      Object.assign(this.filter, event);
      this.setMilestone(this.filter);
    },
  },
};
</script>
