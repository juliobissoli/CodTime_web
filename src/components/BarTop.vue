<template>
  <div class="bg-white">
    <div class="bar_top divider_bottom  p-0 px-4">
      <router-link
        :to="{ name: 'Home' }"
        class="logo d-flex align-items-center"
      >
        <img src="../assets/logo.svg" alt="" />
      </router-link>
      <div class="btn_area">
        <button class="btn_menu_item">
          <router-link :to="{ name: 'Projects' }"><span class="m-1">Projetos</span></router-link>
        </button>
        <button class="btn_menu_item">
          <router-link :to="{ name: 'Tasks' }"><span class="m-1">Tarefas</span></router-link>
        </button>
        <button class="btn_menu_item">
          <router-link :to="{ name: 'Performance' }"><span class="m-1">Desempenho</span></router-link>
        </button>
      </div>
      <div class="setings d-flex align-items-center">
        <img
          @click="logout()"
          src="../assets/setings.svg"
          class="mr-2"
          alt=""
        />
        <Avatar />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar";
export default {
  name: "BarTop",
  components: { Avatar },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.bar_top {
  height: 60px;
  // border-bottom: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn_area{
    flex: 0 40%;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .btn_menu_item {
    padding: 0;
    background-color: transparent;
    border: none;
    margin-top: 20px;
    height: 27px;
    // background-color: red;
    // border-bottom: 2px solid #444444;
    font-size: 18px;
    font-weight: 400;
    a {
      // background: red;
      height: 60px;
      text-decoration: none;
      color: #444444;
    }
  }

  .logo {
    h2 {
      margin-top: 6px;
      font-weight: 300;
      color: #444;
    }
    img {
      height: 40px;
      width: 40px;
    }
  }
  .setings {
    img {
      height: 30px;
      width: 30px;
    }
  }
}
</style>
