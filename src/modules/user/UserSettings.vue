<template>
  <section class="row bg-white">
    <div class="col-12 page-wrapper">
      <div class="row">
        <aside class="col-4 mt-5 p-5">
          <Avatar :item="userInfo" />
          <!-- <footer class="d-flex justify-content-center">
            <button class="mt-1 btn btn-outline-dark">
              Alterar avatar
            </button>
          </footer> -->
        </aside>
        <aside class="col-8 mt-5 pr-5">
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
            <label class="col-12 mb-4"> Ajudas </label>
            <div class="col-12 pb-4">
              <span>Url</span>
         
            </div>
          </div>

          <div class="row box-input divider_bottom" style="margin-top: 6em">
            <label class="col-12 mb-4"> URL de acesso </label>
            <div class="col-12 pb-4">
              <span></span>
              <BtnSwitch
                @change-select="setFieldsHelper"
                :labels="fields_helper || []"
              />
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
        { value: "modal", text: "Mostrar popup de ajuda" },
        { value: "redirect", text: "Redirecionamento diretamente" },
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
  },
  methods: {
    ...mapActions("user_info", ["setUser"]),
    setFieldsHelper(event) {
      console.log("mudo ", event);
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  height: calc(100vh - 65px);
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
