<template>
  <section class="row bg-white ">
    <div class="col-12  page-wrapper ">
      <div class="row">
        <aside class="col-4 mt-5 p-5">
          <Avatar />
          <footer class="d-flex justify-content-center">
            <button class="mt-1 btn btn-outline-dark">
              Alterar avatar
            </button>
          </footer>
        </aside>
        <aside class="col-8 mt-5 pr-5">
          <div class="row box-input divider_bottom" style="  margin-top: 6em;">
            <label class="col-12" for=""
              >Username
              <button class="btn p-0">
                <i class="icon icon-edite"></i>
              </button>
            </label>
            <h1 class="col-12">Dev Master</h1>
          </div>
          <div class="row box-input divider_bottom" style="  margin-top: 6em;">
            <label class="col-12" for="">
                Email de acesso
              <button class="btn p-0">
                <i class="icon icon-edite"></i>
              </button>
            </label>
            <h1 class="col-12">dev@master.com</h1>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
<script>
import Avatar from "../../components/utils/Avatar";
export default {
  name: "UserSettings",

  components: { Avatar },
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
