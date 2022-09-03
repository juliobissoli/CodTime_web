<template>
  <section class="">
    <Modal
      v-show="changeUrlIsVisible"
      @close="changeUrlIsVisible = !changeUrlIsVisible"
      :small="true"
    >
      <template v-slot:header> Alterar forma de acesso </template>
      <template>
        <p class="text-center d-flex">
          Caso a sua conta esteja vinculado a um servidor privado e necessário
          que a URL de acesso seja alterado!
        </p>
        <small class="text-muted d-flex justify-content-center">
          Certifique se de que a url inserida esta correta
        </small>
      </template>
      <template v-slot:footer>
        <form>

        <div class="row">
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              placeholder="https://gitla.my-server.com"
              v-model="new_url"
            />
          </div>
          <div class="col-12 mt-2">
            <input
              type="text"
              class="form-control"
              placeholder="token"
              v-model="token"
            />
          </div>
          <div class="col-12 mt-2">
            <button class="w-100 mt-2 btn btn-dark" @click="handleChangeUrl()">
              logar
            </button>
          </div>
        </div>
        </form>
      </template>
    </Modal>
    <section class="row p-0 m-0">
      <aside class="col-6 p-5">
        <header class="w-100 p-0 mb-1 d-flex justify-content-between">
          <div class="d-flex logo justify-content-center">
            <img src="../assets/logo.svg" alt="" class="logo" />
            <span class="ml-2"> CodTime </span>
          </div>
        </header>

        <h1 style="margin-top: 120px" class="mb-5">Olá :)</h1>
        <span class="m-1">Para acessar, entre com sua conta do GitLab</span>
        <div class="d-flex mt-3 mb-5">
          <button
            @click.prevent="changeUrlIsVisible = !changeUrlIsVisible"
            class="btn btn-dark px-4 d-flex align-items-center"
          >
            Entrar com servidor privado
          </button>
          <!-- <button
            @click.prevent="login"
            class="btn btn px-4 btn-dark d-flex align-items-center"
          >
            <i class="icon icon-gitlab mr-2"></i>
            Entrar com GitLab
          </button>
          <button
            @click.prevent="changeUrlIsVisible = !changeUrlIsVisible"
            class="btn btn-dark px-4 d-flex align-items-center"
          >
            Entrar com servidor privado
          </button> -->
        </div>

        <small class="pt-4">
          Caso não tenha uma conta, faça seu cadastro no {{new_url}}
          <strong>
            <a href="https://gitlab.com/users/sign_in">GitLab</a>
          </strong>
        </small>
      </aside>
      <aside class="col-6 info-area p-5">
        <h3 class="text-center my-5">
          Sua plataforma de análise de desempenho integrada ao GitLab
        </h3>
        <div
          class="d-flex icons-area w-100 mt-5 justify-content-center align-items-center"
        >
          <i class="icon m-4 icon-gitlab"></i>
          <div class="line"></div>
          <i class="icon m-4 icon-codtime"></i>
          -->
        </div>
      </aside>
    </section>
  </section>
</template>

<script>
import AnimateLogin from "../components/AnimateLogin";
import auth from "../utils/auth";
import oauth2 from "../utils/oauth2";
import Loading from "../components/utils/AnimateLoad.vue";
import Modal from "../components/utils/Modal.vue";
import Table from "../components/utils/Table.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  components: { AnimateLogin, Loading, Modal, Table },
  data() {
    return {
      email: "",
      password: "",
      mensagemError: "",
      isLoading: false,
      isLogged: false,
      changeUrlIsVisible: false,
      token: "",
      new_url: "",
    };
  },

  created() {
    const hash = this.$route.hash;
    if (hash) {
      let split = hash.split("&");
      let str = split[0].split("=");
      const token = str[1];

      if (this.$route.query && this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect);
      } else {
        console.log("test ==> ", this.newUrl);
        oauth2.setAuth(token);
        this.$router.push({ name: "Home" });
      }
    }
  },
  computed: {
    ...mapGetters(["newUrl"]),
  },

  methods: {
    ...mapActions(["changeNewUrl"]),
    login() {
      oauth2.logout();
      oauth2.login();
    },
    handleChangeUrl() {
      this.changeNewUrl(this.new_url);
      this.$store.dispatch("changeNewUrl", this.new_url);
      // oauth2.login(this.new_url);
      localStorage.setItem("token", this.token);
      localStorage.setItem("logged", true);

      this.changeUrlIsVisible = false;
      this.new_url = null;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "../assets/styles/bootstrap";
.btn-dark {
  .icon {
    background-color: #ffffff;
    width: 20px;
    height: 20px;
  }
}
.colors-cicle {
  position: absolute;
  top: 100px;
  height: 500px;
  width: 500px;
}
.icons-area {
  .line {
    height: 2px;
    width: 100px;
    background-color: #999;
  }

  .icon {
    height: 100px;
    width: 100px;
    background-color: #999;
  }
}

.info-area {
  background: #f2f2f2;
  color: #6666;
  height: 100vh;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 40px;
    width: 40px;
  }
  span {
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: 300;
    color: #444;
  }
}
</style>
