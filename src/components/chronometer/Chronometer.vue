<template>
  <div class="d-flex justify-content-between">
    <ModalSelectTesck v-show="selectTesck" @close="selectTesck = false" />
    <div class="">
      <button @click="finishRun()" class="btn btn-lg  btn-outline-dark">
        Finish
      </button>
      <!-- <button class="btn btn-lg  btn-outline-primary ml-2">||</button> -->
    </div>
    <div class="text-right chrometer run px-4">
      <span>{{ clock }}</span>
    </div>
  </div>
</template>

<script>
import ModalSelectTesck from "../statistcst/ModalSelectTesck";
import moment from "moment";
export default {
  name: "Chronometer",
  components: { ModalSelectTesck },
  data() {
    return {
      selectTesck: false,
    };
  },
  computed: {
    clock() {
      let c = this.$store.state.timeRuning.minuts;
      return c < 60
        ? `${c} min`
        : `${Math.trunc(c / 60)}:${(c % 60).toFixed(0)} hrs`;
    },
  },
  created() {
    // if (this.$store.state.timeRuning.isRuning) {
    this.$store.commit("clockStriking");
    setInterval(() => {
      this.$store.commit("clockStriking");
    }, 60000);
    // }
  },
  methods: {
    finishRun() {
      this.selectTesck = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.chrometer {
  border-radius: 0.5rem;
  border: 2px solid #cccccc;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1, 2);
  }
  82% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
.run {
  //   animation: pulse 2000ms infinite;
}
</style>
