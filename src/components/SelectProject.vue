<template>
  <div class="work_area ">
    <ModalSelectProject v-show="modaIsVisible" @close="modaIsVisible = false" />
    <h4 class="col-12 mt-4 text-center ">Comesse a Codar!!</h4>
    <div class="row p-4">
      <div class="col-8">
        <div class="btn btn-lg  btn-outline-dark">Start</div>
      </div>
      <div class="col-4 text-right" style="font-size:30px">
        <span>00:00</span>
      </div>
      <div class="col-12 my-4">
        <button
          @click="modaIsVisible = true"
          class="btn_select_project text-center p-3 "
        >
          Selecione o projeto
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ModalSelectProject from "../components/Projects/ModalSelectProject";

export default {
  name: "AreaWorking",
  components: { ModalSelectProject },
  data() {
    return {
      modaIsVisible: false,
    };
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
  background-color: #eee;
  border: 1px dashed #f8f8fa;
  //   border-style: dashed;
  border-radius: 0.5rem;
  font-size: 18px;
  font-weight: 300;
}
</style>
