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
        <button
          class="btn_menu_item"
          :class="selected === 'ProjectsList' ? 'selected' : ''"
        >
          <router-link :to="{ name: 'ProjectsList' }"
            ><span class="m-1">Projetos</span></router-link
          >
        </button>
        <button
          class="btn_menu_item"
          :class="selected === 'TaskList' ? 'selected' : ''"
        >
          <router-link :to="{ name: 'Tasks' }"
            ><span class="m-1">Tarefas</span></router-link
          >
        </button>
        <button
          class="btn_menu_item"
          :class="selected === 'Performance' ? 'selected' : ''"
        >
          <router-link :to="{ name: 'Performance' }"
            ><span class="m-1">Desempenho</span></router-link
          >
        </button>
      </div>
      <div class="setings d-flex align-items-center">
        <div class="mr-4">
          <DropdownMenu
            :list_inputs="list_menu"
            :css_styles="position_dropdown"
            @item-clicked="handleClickDropdown"
          >
            <template v-slot:header>
              <div class="p-0" style="height: 40px; width: 40px">
                <Avatar size="40" />
              </div>
            </template>
          </DropdownMenu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./utils/Avatar.vue";
import DropdownMenu from "./DropdownMenu.vue";

import auth from '../utils/auth'
export default {
  name: "BarTop",
  components: { Avatar, DropdownMenu },
  data() {
    return {
      selected: "",
      list_menu: [
        { danger: false, label: "Iniciar Trabalho" },
        { danger: false, label: "Criara Projeto" },
        { danger: false, label: "Configurações" },
        { danger: true, label: "Deslogar" },
      ],
      position_dropdown: {
        right: "0.3rem",
        top: "3rem",
        width: "250px",
      },
      // position_dropdown: 'right: 0.6rem;  top: 2rem; width: 250px;'
    };
  },
  created() {
    this.selected = this.$router.history.current.name;
  },
  methods: {
    logout() {
      auth.logout()
      this.$store.commit("logout");
      this.$router.push({ name: "Login" });
    },

    goToSettings(){
         this.$router.push({ name: "UserSettings" });
    },

    handleClickDropdown(id) {
      switch (id) {
        case 2: this.goToSettings(); break;
        case 3: this.logout(); break;
        default:
          console.log(`Resolver esses botoes ${expr}.`);
      }
    },
  },
  watch: {
    $route(to, from) {
      this.selected = to.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.bar_top {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn_area {
    flex: 0 40%;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-content: center;
  }
  .btn_menu_item {
    padding: 0;
    background-color: transparent;
    border: none;
    margin-top: 20px;
    // background-color: red;
    border-bottom: 3px solid #ffffff;
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

  .selected {
    border-bottom: 3px solid #333333;
  }
}
</style>
