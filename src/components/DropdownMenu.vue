<template>
  <div class="row statis" >
    <div v-click-outside="clickOut" class="col-12 d-flex pr-0 justify-content-between align-items-start">
      <button
        @click.prevent="menuIsVisible = !menuIsVisible"
        class="btn p-0 m-0"
      >
        <slot name="header"></slot>
      </button>
      <Dropdown
        
        v-show="menuIsVisible"
        :only_body="true"
        class="dropdown shadow-sm"
        v-bind:style="css_styles"
      >
        <template>
          <!-- <div class="row p-0">
            <div class="col-12 p-0">
              <slot></slot>
            </div>
          </div> -->
          <!-- <div class=""> -->
          <!-- <div > -->
          <ul class="">
            <li class="row p-0" v-for="(item, i) in list_inputs" :key="i">
              <button
                @click.prevent="
                  $emit('item-clicked', i), (menuIsVisible = !menuIsVisible)
                "
                class="col-12 btn-item py-3 px-4"
                :class="item.danger ? 'text-danger' : ''"
              >
                {{ item.label }}
              </button>
            </li>
          </ul>
          <!-- </div> -->
          <!-- </div> -->
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from "./utils/Dropdown.vue";

export default {
  name: "FilterStatistcs",
  props: {
    css_styles: Object,
    list_inputs: Array,
  },
  components: { Dropdown },
  data() {
    return {
      menuIsVisible: false,

      messageError: "",
    };
  },
  watch: {
    messageError() {
      setTimeout(() => {
        this.messageError = "";
      }, 2340);
    },
  },
  created() {},
  methods: {
    clickOut(event) {
      
      this.menuIsVisible = this.menuIsVisible ? false : this.menuIsVisible;
    },

  },
};
</script>

<style lang="scss" scoped>
.icon {
  height: 24px;
  width: 24px;
  background: #444;
}
.alert {
  font-size: 15px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  // margin-right: -10px;
}

.dropdown {
  right: 0.8rem;
  top: 2rem;
  width: 250px;

  .btn-item {
    border: none;
    background-color: transparent;
    width: 100%;
    font-size: 16px;
    text-align: start;
  }
  li:not(:last-child) {
    border-bottom: 1px solid #eaeaea;
  }

  @media (max-width: 720px) {
    max-width: 100%;
  }
  .title-filter {
    font-size: 18px;
    color: #444;
    font-weight: 400;
  }
}
</style>
