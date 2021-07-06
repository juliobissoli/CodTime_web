<template>
  <multiselect
    v-model="value"
    :options="options_select"
    placeholder="Escolha um projeto para trabalhar"
    noOptions="Nenhum resultado"
    track-by="name"
    label="name"
  >
    <template slot="singleLabel" slot-scope="{ option }">
      <strong>{{ option.name }}</strong>
    </template>
  </multiselect>
</template>

<script>
import multiselect from "vue-multiselect";

export default {
  name: "MultselectProject",
  props: ["options_select"],
  components: { multiselect },
  data() {
    return {
      value: null,
      options: ["list", "of", "options"],
    };
  },
  watch: {
    value() {
      this.$emit("select_result", this.value);
      // this.$store.commit("selectProject", this.value);
      // console.log(this.$store.state.projectSelected);
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
.multiselect__tags {
  border: 2px solid #ced4da !important;
  padding-top: 3px;
  line-height: 14px !important;
  min-height: 28px;
  height: 32px;
  overflow: hidden;
}
</style>
