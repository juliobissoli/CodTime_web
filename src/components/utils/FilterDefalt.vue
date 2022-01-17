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
        <div v-if="date_init && date_end" class="row d-flex flex-column">
          <header
            class="col-12 d-flex justify-content-between align-items-center"
            :class="!visibilities.period ? 'mb-3' : ''"
          >
            <span class="f-18"> Período </span>
            <BtnArrow v-bind:visible.sync="visibilities.period" />
          </header>
          <div v-show="visibilities.period" class="col-12 pb-3 px-4">
            <div class="row bg-light py-2 rounded">
              <div class="col-6 pr-1">
                <small class="text-muted">inicio</small>
                <input
                  class="form-control form-control-sm"
                  v-model="dateInit"
                  v-debounce:500ms="changeData"
                  type="date"
                />
              </div>
              <div class="col-6 pl-1">
                <small class="text-muted">fim</small>
                <input
                  class="form-control form-control-sm pl-1"
                  v-model="dateEnd"
                  v-debounce:500ms="changeData"
                  type="date"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="avatar_list && avatar_list.length > 0"
          class="row d-flex flex-column divider_top"
        >
          <header
            class="
              col-12
              d-flex
              justify-content-between
              mt-3
              align-items-center
            "
          >
            <span class="f-18"> Colaboradores </span>
            <BtnArrow v-bind:visible.sync="visibilities.avatar" />
          </header>
          <div v-show="visibilities.avatar" class="col-12 pb-3 px-4">
            <div class="row bg-light py-2 rounded">
              <div class="col-8 pr-1">
                <MultselectAvatar
                  @select_result="selectMember"
                  :options_select="avatar_list || []"
                  :all_members="all_members"
                />
              </div>
              <div
                class="col-4 pl-1 d-flex justify-content-end align-items-center"
              >
                <small class="text-muted mr-1">ver todos</small>
                <input
                  class=""
                  v-model="all_members"
                  @change="setAllMember"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div
          v-if="milestones && milestones.length > 0"
          class="row d-flex flex-column divider_top"
        >
          <header
            class="
              col-12
              d-flex
              mt-3
              justify-content-between
              align-items-center
            "
          >
            <span class="f-18"> Milestone </span>
            <BtnArrow v-bind:visible.sync="visibilities.milestone" />
          </header>
          <div v-show="visibilities.milestone" class="col-12  pb-3">
            <div class="bg-light p-2 rounded">
              <MultselectMilestone
                @select_result="selectMilestone"
                :options_select="milestone_validate"
                :revoque="false"
              />
            </div>
          </div>
        </div>

        <div
          v-if="filds_status && filds_status.length > 0"
          class="row d-flex flex-column "
        >
          <header
            class="
              col-12
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <span class="f-18"> Status </span>
            <BtnArrow v-bind:visible.sync="visibilities.state" />
          </header>
          <div v-show="visibilities.state" class="col-12 pb-3 px-4">
            <div class="row bg-light p-2 rounded d-flex">
              <BtnSwitch
                class="col-12"
                @change-select="setFieldsStatus"
                :labels="filds_status || []"
              />
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
import BtnArrow from "./BtnArrowIcon.vue";
import BtnSwitch from "./BtnSwitch.vue";
import MultselectMilestone from "../task/MultselectMilestone.vue";

export default {
  name: "FilterDefault",
  props: {
    date_init: String,
    date_end: String,
    avatar_list: Array,
    filds_status: Array,
    milestones: Array,
  },
  components: {
    Dropdown,
    BtnDropdown,
    MultselectAvatar,
    BtnArrow,
    BtnSwitch,
    MultselectMilestone,
  },
  data() {
    return {
      is_visible: false,
      visibilities: {
        period: true,
        avatar: true,
        state: true,
        milestone: true
      },
      messageError: "",
      dateInit: "",
      dateEnd: "",
      all_members: true,
    };
  },
  watch:{
    dateInit(){
      console.log("Altero dateInit => ", this.dateInit)
    }
  },
  created() {
    this.dateEnd = this.date_end;
    this.dateInit = this.date_init;
  },
  computed: {
    milestone_validate() {
      return this.milestones 
        ? this.milestones.map(el => ({...el, $isDisabled: el.start_date === null && el.due_date === null}))
        : []
    }
  },
  methods: {
    clickOut(event) {
      this.is_visible = this.is_visible ? false : this.is_visible;
    },
    setFieldsStatus(event) {
      const state = event === "all" ? null : event;
      this.$emit("change-filter", { state });
    },

    changeData(event) {
      if (moment(this.dateEnd).diff(moment(this.dateInit)) <= 0) {
        this.messageError = "Data invalida";
      } else
        this.$emit("change-filter", {
          date_init: this.dateInit,
          date_end: this.dateEnd,
        });
    },
    setAllMember(value) {
      if (this.all_members) {
        this.$emit("change-filter", {
          date_init: this.dateInit,
          date_end: this.dateEnd,
          assignee_list: [],
          assignee_id: null,
        });
      }
    },
    selectMember(member) {
      // this.all_members = true;

      const filter = {
        date_init: this.dateInit,
        date_end: this.dateEnd,
      };
      if (member) {
        this.all_members = false;
        filter.assignee_id = member.id;
        filter.assignee_list = [member];
      }
      this.$emit("change-filter", filter);
    },
    selectMilestone(milestone) {
      

      console.log("Miçlest ==> ", milestone);

      
      if(milestone){
        this.dateInit = milestone.start_date
        this.dateEnd  = milestone.due_date
      }
      else {
        this.dateInit =  this.date_init
        this.dateEnd =   this.date_end
      }
      const filter = {
          date_init: this.dateInit,
          date_end: this.dateEnd,
          milestone: milestone ? milestone.title : null
       }
      this.$emit('change-filter', filter)
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
