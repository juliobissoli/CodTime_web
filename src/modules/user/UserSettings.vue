<template>
  <section class="row bg-white">
    <div class="col-12 page-wrapper">
      <div class="row">
        <aside class="col-12 col-md-4 mt-5 p-5">
          <Avatar :item="userInfo" :size="250" style="width: 250px"/>
          <!-- <footer class="d-flex justify-content-center">
            <button class="mt-1 btn btn-outline-dark">
              Alterar avatar
            </button>
          </footer> -->
        </aside>
        <aside class="col-12 col-md-8 mt-5 pr-5">
          <div class="row box-input divider_bottom" style="margin-top: 6em">
            <label class="col-12" for="">
              Username
              <!-- <button class="btn p-0">
                <i class="icon icon-edite"></i>
              </button> -->
            </label>
            <h1 class="col-12">{{ userInfo.username }}</h1>
          </div>
          <div class="row box-input divider_bottom" style="margin-top: 6em">
            <label class="col-12" for="">
              Email de acesso
              <!-- <button class="btn p-0">
                <i class="icon icon-edite"></i>
              </button> -->
            </label>
            <h1 class="col-12">{{ userInfo.email }}</h1>
          </div>

          <div class="row box-input divider_bottom" style="margin-top: 6em">
            <label class="col-12 mb-4"> Url do servido GitLab </label>
            <div class="col-12 pb-4">
              <span class="text-primary bg-white shadow-sm rounded p-2">{{
                urlGitLab
              }}</span>
            </div>
          </div>

          <div class="row box-input divider_bottom" style="margin-top: 6em">
            <label class="col-12 mb-4">Painel de ajudas </label>
            <div class="col-12 pb-4">
              <BtnSwitch
                @change-select="setFieldsHelper"
                :labels="fields_helper || []"
                :first="modeHelperStart"
              />
              <small class="text-secondary">
                Os painéis de ajuda dão a opção de redirecionamento para o
                GitLab. Deseja abri-los ou ser redirecionado diretamente?
              </small>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Avatar from "../../components/utils/Avatar";
import BtnSwitch from "../../components/utils/BtnSwitch.vue";
export default {
  name: "UserSettings",
  data() {
    return {
      fields_helper: [
        { value: "modal", text: "Sempre mostrar ajuda" },
        { value: "redirect", text: "Sempre ser redirecionado" },
      ],
    };
  },
  created() {
    if (this.userInfo.id === -1) {
      this.setUser();
    }
  },
  components: { Avatar, BtnSwitch },
  computed: {
    ...mapGetters("user_info", ["userInfo"]),
    ...mapGetters(["urlGitLab"]),

    modeHelperStart() {
      return localStorage.getItem("mode_helper") || "modal";
    },
  },
  methods: {
    ...mapActions("user_info", ["setUser"]),
    setFieldsHelper(event) {
      localStorage.setItem("mode_helper", event);
    },
  },
};
</script>
<style lang="scss" scoped>
section {
   max-height: calc(100vh - 65px);
  height: 100vh;
  background-color: #ffffff;
}

label {
  color: #999999;
  font-size: 22px;
  font-weight: 500;
}

h1 {
  font-size: 36px;
  color: #444444;
  font: bold;
}
.box-input {
  margin-top: 42px;
}

.icon {
  height: 24px;
  width: 24px;
  background: #999999;
}
</style>
