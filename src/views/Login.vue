<template>
  <div>
    <div class="row login-page p-0 m-0">
      <div class="col-lg-8 p-0 m-0 reght-area">
        <div class="row p-0 mt-3 mb-3 mx-0 d-flex logo justify-content-center">
          <img src="../assets/logo.svg" alt="" class="logo" />
          <span class="ml-2">
            CodTime
          </span>
        </div>
        <div class="row logo p-0 m-0">
          <span
            style="font-size: 22px;"
            class="col-md-12 p-3 d-flex justify-content-center"
          >
            Sua plataforma de gerenciamento de trabalho personalizada.
          </span>
        </div>

        <div class="mx-5 p-5">
          <AnimateLogin />
        </div>
      </div>
      <div class="col-lg-4 p-0">
        <Loading v-show="isLoading" />
        <div class="left-area p-4 bg-whigt">
          <div class="my-5">
            <h1 class="mt-5">
              Bem-vindo ;)
            </h1>
          </div>

          <form class="mt-5 pt-5">
            <div class="form-group">
              <input
                type="email"
                v-model="email"
                placeholder="Email"
                class="form-control"
                id="input-email"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group my-4">
              <input
                type="password"
                v-model="password"
                class="form-control"
                placeholder="Senha"
                id="input-password"
              />
            </div>
            <button @click.prevent="login" class="btn btn-block">
              Entrar
            </button>
            <div class="row mt-3">
              <div class="col-lg-6">
                <input type="checkbox" />
                <span class="ml-2">Lembrar-me</span>
              </div>
              <div class="col-lg-6 text-right">
                <span class="text-danger">
                  Esqueci minha senha
                </span>
              </div>
            </div>
          </form>
          <div
            v-show="mensagemError"
            class="alert alert-danger mt-3"
            role="alert"
          >
            {{ mensagemError }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimateLogin from "../components/AnimateLogin";
import auth from "../utils/auth";
import Loading from "../components/AnimateLoad";

export default {
  name: "Login",
  components: { AnimateLogin, Loading },
  data() {
    return {
      email: "",
      password: "",
      mensagemError: "",
      isLoading: false,
    };
  },
  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    },
  },

  watch: {
    isLogged() {
      if (this.isLogged) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  methods: {
    async login() {
      // this.$store.commit("loading");
      this.isLoading = true;
      console.log(auth.loggedIn());
      const isLogeed = await auth.login(this.email, this.password);
      if (isLogeed) {
        if (this.$route.query && this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        } else {
          // this.$store.commit("setUser");
          // this.$store.commit("notLoading");
          // await this.$store.commit("changeLogged", true);
          await this.$store.dispatch("setValues");
          this.isLoading = false;
        }
      } else {
        this.$store.commit("notLoading");
        this.mensagemError = "Erro na autenticação :(";
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "../assets/styles/bootstrap";
.left-area {
  padding: 0;
  height: 100vh;
  color: #3f67cc;
  h1 {
    color: #333333;
    font-weight: 300;
  }
  span {
    // color: #3f67cc;
    font-size: 13px;
    // color: #022069
  }
  .btn {
    background-color: transparent;
    border: 1px solid #333333;
    border-radius: 0.5rem !important;
    color: #333333;
  }
}
.reght-area {
  padding: 0;
  background-color: #f1f1f1;
  height: 100vh;
}
.login-page {
  // background-color: #f8f9fa;
  height: 100vh;
  width: 100vw;
  font-family: "Avenir Next W01", "Lato", "Karla", "Proxima Nova W01", "Rubik",
    -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
    Arial, sans-serif;
  .form-control {
    border-radius: 0.5rem !important;
    border: 1px solid #333333;
    input {
      ::placeholder {
        color: #444;
      }
    }
  }
  // background-color: #282733;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 45px;
    width: 45px;
  }
  span {
    display: flex;
    align-items: center;
    font-size: 35px;
    font-weight: 300;
    color: #444;
  }
}
</style>
