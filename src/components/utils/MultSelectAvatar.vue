<template>
  <multiselect
    v-model="value"
    :options="options_select"
    placeholder="Colaborador"
    noOptions="Nenhum resultado"
    track-by="name"
    selectLabel=""
    selectGroupLabel=""
    deselectLabel=""
    label="name"
  >
    <template slot="singleLabel" slot-scope="{ option }">
      <small class="ml-1 text-dark text-truncate">{{ option.name }} </small>
    </template>
    <template slot="option" slot-scope="{ option }">
      <div class="d-flex align-items-center">
        <div style="width: 30px; height: 30px">
          <Avatar :item="option" />
        </div>
        <small class="ml-1 text-truncate">{{ option.name }} </small>
      </div>
    </template>
  </multiselect>
</template>

<script>
import multiselect from "vue-multiselect";
import Avatar from "./Avatar.vue";
export default {
  name: "MultselectAvatar",
  props: ["options_select"],
  components: { multiselect, Avatar },
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

<style lang="scss">
// .multiselect__tags {
//   border: 2px solid #ced4da !important;
//   padding-top: 3px;
//   line-height: 14px !important;
//   min-height: 28px;
//   height: 30px;
//   overflow: hidden;
// }

.multiselect {
  min-height: 31px;

  .multiselect__content {
    max-width: 100%;
    // display: inline-block;
  }

  .multiselect__input,
  .multiselect__option,
  .multiselect__single {
    // font-size: 0.8em;
  }

  .multiselect__select {
    min-height: 31px;
    height: 31px;
  }

  .multiselect__option--highlight {
    // background: #047bf8;
    background: rgba(0, 0, 0, 0.2);
  }

  //     select option:checked{
  //     background: #1aab8e -webkit-linear-gradient(bottom, #1aab8e 0%, #1aab8e 100%);
  //   }

  .multiselect__tags {
    border: 1px solid #ced4da !important;
    // border-radius: 0.6rem;
    min-height: 28px;
    height: 31px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .multiselect__tag-icon {
    line-height: 14px !important;
    margin-left: 3px !important;
  }

  .multiselect__tag-icon:focus,
  .multiselect__tag-icon:hover {
    background: #f0f0f0 !important;
  }

  .multiselect__tag-icon:focus:after,
  .multiselect__tag-icon:hover:after {
    color: red !important;
  }
  .multiselect__single {
    line-height: 24px;
  }
}
</style>
