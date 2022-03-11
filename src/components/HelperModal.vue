<template>
  <Modal v-show="helperIsVisible" @close="collapseHelper()">
    <template v-slot:header>
      {{ helperInfo.title }}
    </template>
    <template>
      <div class="row info-area">
        <h5 class="col-12">Passo a passo</h5>
        <ol class="col-12 p-4">
          <li v-for="(item, i) in helperInfo.stages" :key="i" class="mx-1 p-1">
            <small>{{ item }}</small>
          </li>
        </ol>
        <h6 v-show="helperInfo.obs" class="col-12">Obs.:</h6>
        <ul v-show="helperInfo.obs" class="col-12 p-3">
          <li v-for="(item, i) in helperInfo.obs" :key="i" class="mx-1 p-1">
            <small>{{ item }}</small>
          </li>
        </ul>
        <div class="col-12 p-2 bg-light rounded" style="height: 300px">
          <span class="text-secondary">imagem</span>
        </div>
      </div>

      
    </template>
    <template v-slot:footer>
      <div class="d-flex flex-column">
        <a
          :href="helperInfo.redirect"
          target="_blank"
          class="btn btn-outline-dark d-flex justify-content-center"
           @click="collapseHelper()"
        >
          <i class="icon icon-gitlab mr-4"></i>
          Ir ao GitLab
        </a>
        <a
          :href="helperInfo.url_doc"
          class="mt-3 btn btn-outline-secondary"
          target="_blank"
          style="border: none"
        >
          <!-- @click="collapseHelper()" -->
          Ler documentação
        </a>
      </div>
    </template>
  </Modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Modal from "./utils/Modal.vue";

export default {
  name: "HelperModal",
  components: { Modal },
  computed: {
    ...mapGetters(["helperIsVisible", "helperInfo"]),
  },
  methods: {
    ...mapActions(["collapseHelper"]),
  },
};
</script>

<style lang="scss" scoped>
.icon {
  height: 24px;
  width: 24px;
  // background: #ffffff;
}
.info-area {
  max-height: 500px;
  overflow-y: auto;


}

  .info-area::-webkit-scrollbar {
    width: 3px;
    border-radius: 3px;
  }

  /* Track */
  .info-area::-webkit-scrollbar-track {
    background: #cccccc;
  }

  /* Handle */
  .info-area::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  .info-area::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
