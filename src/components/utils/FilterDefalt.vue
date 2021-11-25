<template>
  <div class="d-flex justify-content-end" v-click-outside="clickOut">
    <BtnDropdown
      @clicked="is_visible = !is_visible"
      :is_visible="is_visible"
      label="Filtrar"
    />
    <Dropdown
      :messageError="messageError"
      @clean-error="messageError = ''"
      v-show="is_visible"
      class="mt-5"
      style="width: 360px"
    >
      <template v-slot:header>
        <div class="d-flex justify-content-between align-items-center">
          <legend class="m-0 p-0 title22">Filtrar</legend>
          <button @click="is_visible = !is_visible" class="btn">
            <i class="icon icon-close"></i>
          </button>
        </div>
      </template>
      <template>
        <div class="row d-flex flex-column divider_bottom">
          <header
            class="col-12 d-flex justify-content-between align-items-center"
          >
            <span class="f-18">
              Período
            </span>
            <button class="btn btn-sm">
              <i class="icon icon-arrow_down"></i>
            </button>
          </header>
          <div class="col-12 pb-3 px-4">
            <div class="row bg-light py-2 rounded">
              <div class="col-6 pr-1">
                <small class="text-muted">inicio</small>
                <input
                  class="form-control form-control-sm "
                  v-model="dateInit"
                  @change="changeData"
                  type="date"
                />
              </div>
              <div class="col-6 pl-1">
                <small class="text-muted">fim</small>
                <input
                  class="form-control form-control-sm pl-1"
                  v-model="dateEnd"
                  @change="changeData"
                  type="date"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row d-flex flex-column mt-2 ">
          <header
            class="col-12 d-flex justify-content-between align-items-center"
          >
            <span class="f-18">
              Colaboradores
            </span>
            <button class="btn btn-sm">
              <i class="icon icon-arrow_down"></i>
            </button>
          </header>
          <div class="col-12 pb-3 px-4">
            <div class="row bg-light py-2 rounded">
              <div class="col-8 pr-1">
                <MultselectAvatar
                  @select_result="selectMember"
                  :options_select="avatar_list"
                />
              </div>
              <div
                class="col-4 pl-1 d-flex justify-content-end align-items-center"
              >
                <small class="text-muted mr-1">ver todos</small>
                <input class="" :value="all_members" @change="setAllMember" type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
import BtnDropdown from "./BtnDropdown.vue";
import moment from "moment";
import MultselectAvatar from "./MultSelectAvatar.vue";
export default {
  name: "FilterDefault",
  props: { date_init: String, date_end: String, avatar_list: Array },
  components: { Dropdown, BtnDropdown, MultselectAvatar },
  data() {
    return {
      is_visible: false,
      messageError: "",
      dateInit: "",
      dateEnd: "",
      all_members: true,
    };
  },
  created() {
    this.dateEnd = this.date_end;
    this.dateInit = this.date_init;
  },
  methods: {
    clickOut(event) {
      this.is_visible = this.is_visible ? false : this.is_visible;
    },
    changeData(event) {
      console.log(moment(this.dateEnd).diff(moment(this.dateInit)));
      if (moment(this.dateEnd).diff(moment(this.dateInit)) <= 0) {
        this.messageError = "Data invalida";
      } else
        this.$emit("change-filter", {
          date_init: this.dateInit,
          date_end: this.dateEnd,
        });
    },
    setAllMember(value) {
      console.log('Value =>', value)
      if (this.all_members) {
        this.$emit("change-filter", {
          date_init: this.dateInit,
          date_end: this.dateEnd,
        });
      }
    },
    selectMember(member) {
      this.$emit("change-filter", {
        date_init: this.dateInit,
        date_end: this.dateEnd,
        assignee_id: member.id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-close {
  height: 20px;
  width: 20px;
  background-color: #555555;
}
input {
  color: #666666;
}
.btn-dropdown {
  border: 1px solid #9999;
  color: #666666;
  // padding: 0 6px !important;

  .icon-arrow_down {
    height: 20px;
    width: 20px;
    background-color: #555555;
  }
}
</style>
