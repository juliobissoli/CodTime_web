<template>
  <multiselect
    v-model="value"
    :options="options_select"
    placeholder="Milestone"
    noOptions="Nenhum resultado"
    track-by="title"
    selectLabel=""
    selectGroupLabel=""
    deselectLabel=""
    label="title"
  >
    <template slot="singleLabel" slot-scope="{ option }">
      <small class="ml-1 text-dark text-truncate">{{ option.title }} </small>
    </template>
    <template slot="option" slot-scope="{ option }">
      <div class="d-flex text-truncate text-left flex-column ">
        <span> #{{ option.iid }} {{ option.title }} </span>
        <div class="d-flex mt-2">
          <span class="badge " :class="   option.state === 'closed' ? 'badge-secondary' : 'badge-primary' " >{{ option.state }}</span >
          <small
            v-if="option.star_date || option.due_date"
            class="ml-1 text-left text-truncate"
            >{{ option.start_date | formatDate}} a {{ option.due_date | formatDate}}
          </small>
          <small v-else class="ml-1 text-left text-truncate"  >Sem intervalo</small>
        </div>
      </div>
    </template>
  </multiselect>
</template>

<script>
import moment from 'moment';
import multiselect from "vue-multiselect";

export default {
  name: "MultiselectMilestone",
  props: { options_select: Array, revoque: Boolean },
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
    revoque() {
      this.value = this.revoque ? null : this.value;
    },
  },

  filters: {
      formatDate(date){
         return moment(date).format('DD/MMM')
      }
  }
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
    // background: rgba(0, 0, 0, 0.8);
    background-color: #cccccc;
  }

  .multiselect__option--disabled{
      background-color: rgba(219, 113, 126, 0.2) !important;;
  }

    //   select option:checked{
    //   background: #1aab8e -webkit-linear-gradient(bottom, #1aab8e 0%, #1aab8e 100%);
    // }

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
