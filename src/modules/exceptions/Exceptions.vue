<template>
  <div class="row p-5">
    <div class="col-12 text-center">
      <h1 class="text-center">Ops :(</h1>
      <div v-if="code === 401">
      <h3  class="mt-5">
        {{code}}. Usuário não autorizado!
      </h3>
        <ul class="mt-5">
          <li>  <small> Verifique se a sua conta do GitLab esta habilitada. </small></li>
          <li>  <small class="mt-3"> Caso seu usuário pertença a um grupo  privado (com url diferente de gitlab.com)</small></li>
            <li><small>Altere a url de acesso a API do GitLab nas configurações de usuário</small></li>
        </ul>
      </div>
      <h3 v-else-if="mode === 'connection'" class="mt-5">
        Não foi possível obter os dados necessários. <br />
        Verifique sua conexão com a internet!<br />
        <small class="mt-5"
          >Caso a conexão seja restabelecida recarregue a pagina. (pressione F5
          ou Ctrl + R)</small
        >
      </h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Exceptions",
  props: {mode: String, route: String, code: Number},
  computed: {
    ...mapGetters("user", ["userID"]),
  },
  watch: {
    userID() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>