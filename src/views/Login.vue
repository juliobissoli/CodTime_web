<template>
  <section class="">
    <section class="row p-0 m-0">
      <aside class="col-6 p-5">
        <header class="w-100 p-0 mb-1 d-flex justify-content-between">
          <div class="d-flex logo justify-content-center">
            <img src="../assets/logo.svg" alt="" class="logo" />
            <span class="ml-2"> CodeTime </span>
          </div>

          <!-- <button
        @click.prevent="login"
        class="btn btn-dark d-flex align-items-center"
      >
        Entrar com GitLab
        <i class="icon icon-gitlab ml-2"></i>
      </button> -->
        </header>
        <h1 style="margin-top: 120px" class="mb-5">Olá :)</h1>
        <spam class="my-3">Para acessas, entre com sua conta do GitLab</spam>
        <button
          @click.prevent="login"
          class="btn px-4 mt-3 mb-5 btn-dark d-flex align-items-center"
        >
          <i class="icon icon-gitlab mr-2"></i>
          Entrar com GitLab
        </button>

        <small class="pt-4">
          Caso não tenha uma conta, faça seu cadastro no
          <strong>
            <a href="https://gitlab.com/users/sign_in">GitLab</a>
          </strong>

        </small>
      </aside>
      <aside class="col-6 info-area p-5">
        <h3 class="text-center my-5">
          Sua plataforma de análse de desempenho integrada ao GitLab
        </h3>
        <div
          class="
            d-flex
            icons-area
            w-100
            mt-5
            justify-content-center
            align-items-center
          "
        >
          <i class="icon m-4 icon-gitlab"></i>
          <div class="line"></div>
          <i class="icon m-4 icon-codetime"></i>
          <!-- <img class="colors-cicle" src="../assets/img/colors-cicle.svg" alt=""> -->
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

export default {
  name: "Login",
  components: { AnimateLogin, Loading },
  data() {
    return {
      email: "",
      password: "",
      mensagemError: "",
      isLoading: false,
      isLogged: false,
    };
  },
  computed: {
    // isLogged() {
    //   return this.$store.state.isLogged;
    // },
  },

  created() {
    const hash = this.$route.hash;
    if (hash) {
      let split = hash.split("&");
      let str = split[0].split("=");
      const token = str[1];

      // console.log('Tonken ===> ',token);

      if (this.$route.query && this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect);
      } else {
        // this.setUserLogin(this.isLogged);
        oauth2.setAuth(token);
        this.$router.push({ name: "Home" });

        // this.isLoading = false;
      }
    }
  },

  methods: {
    // async login() {
    //   // this.$store.commit("loading");
    //   console.log(auth.loggedIn());
    //   const isLogeed = await auth.login(this.email, this.password);
    //   if (isLogeed) {
    //     if (this.$route.query && this.$route.query.redirect) {
    //       this.$router.push(this.$route.query.redirect);
    //     } else {
    //       // this.$store.commit("setUser");
    //       // this.$store.commit("notLoading");
    //       // await this.$store.commit("changeLogged", true);
    //       await this.$store.dispatch("setValues");
    //     }
    //   } else {
    //     this.$store.commit("notLoading");
    //     this.mensagemError = "Erro na autenticação :(";
    //   }
    // },
    async login() {
      oauth2.login();
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
