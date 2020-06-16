<template>
  <div class="work_area ">
    <ModalSelectProject v-show="modaIsVisible" @close="modaIsVisible = false" />
    <div v-if="!projectSelected">
      <h4 class="col-12 mt-4 text-center ">Começar a Codar!!</h4>
      <div class="row p-4">
        <!-- <div class="col-8">
          <div class="btn btn-lg  btn-outline-dark" disabled>Start</div>
        </div>
        <div class="col-4 text-right" style="font-size:30px">
          <span>00:00</span>
        </div> -->
        <div class="col-12 my-4">
          <button
            @click="modaIsVisible = true"
            class="btn_select_project text-center p-3 "
          >
            Selecione o projeto
          </button>
        </div>
        <!-- <div v-else class="col-12 p-4">
        <ProjectDescribe :item="projectSelected" />
      </div> -->
      </div>
    </div>

    <div v-else>
      <h4 class="col-12 mt-4 text-center ">Codando!!</h4>
      <div class="row p-4">
        <div class="col-12">
          <Chronometer />
        </div>
        <div class="col-12 p-4">
          <ProjectDescribe :item="projectSelected" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalSelectProject from "../components/Projects/ModalSelectProject";
import ProjectDescribe from "../components/Projects/ProjectDescibe";
import Chronometer from "../components/chronometer/Chronometer";
import moment from "moment";
export default {
  name: "AreaWorking",
  components: { ModalSelectProject, ProjectDescribe, Chronometer },
  data() {
    return {
      modaIsVisible: false,
    };
  },
  computed: {
    projectSelected() {
      return this.$store.state.productSelected;
    },
    isRunig() {
      return this.$store.state.timeRuning.isRunig;
    },
    timeNow() {
      return moment().format("YYYY-MM-DD HH:MM");
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.work_area {
  width: 500px;
  //   background-color: #f1f1f1;
  border: 1px solid #d1d1d1;
  border-radius: 0.3rem;
}
.btn_select_project {
  width: 100%;
  background-color: #fafafa;
  border: 3px dashed #eee;
  //   border-style: dashed;
  border-radius: 0.5rem;
  font-size: 18px;
  font-weight: 300;
}
</style>
