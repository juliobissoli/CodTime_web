<template>
  <div class="row">
    <div class="bar_top col-12 p-2">
      <div class="logo d-flex align-items-center">
        <img src="../assets/logo.svg" alt="" />
        <h2>CodTime</h2>
      </div>
      <div class="setings d-flex align-items-center">
        <img
          @click="logout()"
          src="../assets/setings.svg"
          class="mr-2"
          alt=""
        />
        <Avatar  :item="imageAvatar" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar";
export default {
  name: "BarTop",
  components: { Avatar },
  computed: {
     imageAvatar() {
      return this.$store.getters.avatar;
    },
  },
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
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    h2 {
      margin-top: 6px;
      font-weight: 300;
      color: #444;
    }
    img {
      height: 50px;
      width: 50px;
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
