<template>
  <section class="">
    <header class="w-100 p-4 d-flex justify-content-between">
      <div class="d-flex logo justify-content-center">
        <img src="../assets/logo.svg" alt="" class="logo" />
        <span class="ml-2"> CodTime </span>
      </div>

      <button
        @click.prevent="login"
        class="btn btn-dark d-flex align-items-center"
      >
        Entrar com GitLab
        <i class="icon icon-gitlab ml-2"></i>
      </button>
    </header>
    <aside class="w-100 page-wrapper p-5">
      <h1 class="text-center mt-5">
        Sua plataforma de análse de desempenho integrada ao GitLab
      </h1>
      <div
        class="
          d-flex
          icons-area
          w-100
          justify-content-center
          align-items-center
        "
      >
        <!-- <img class="colors-cicle" src="../assets/img/colors-cicle.svg" alt=""> -->
        <i class="icon m-4 icon-gitlab"></i>
        <div class="line"></div>
        <i class="icon m-4 icon-codetime"></i>
      </div>
    </aside>
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

  watch: {
    // isLogged() {
    //   if (this.isLogged) {
    //     this.$router.push({ name: "Home" });
    //   }
    // },
    mensagemError() {
      if (this.mensagemError.length > 0) {
        setTimeout(() => {
          document.querySelector(".alert").classList.add("alert-remove");
        }, 2000);
        setTimeout(() => {
          this.mensagemError = "";
          document.querySelector(".alert").classList.add("alert-remove");
        }, 3000);
      } else document.querySelector(".alert").classList.add("alert-remove");
    },
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
  height: 300px;
  width: 300px;
}
.icons-area {
  .line {
    height: 2px;
    width: 100px;
    background-color: #333333;
  }

  .icon {
    height: 130px;
    width: 130px;
  }
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
