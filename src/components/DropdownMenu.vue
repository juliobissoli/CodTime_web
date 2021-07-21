<template>
  <div class="row statis">
    <div class="col-12 d-flex pr-0 justify-content-between align-items-start">
      <button
        @click.prevent="filterIsVisible = !filterIsVisible"
        class="btn p-0 m-0"
      >
        <slot name="header"></slot>
      </button>
      <dropdown v-show="filterIsVisible" class="dropdown shadow-sm" v-bind:style="css_styles">
        <template>
          <!-- <div class="row p-0">
            <div class="col-12 p-0">
              <slot></slot>
            </div>
          </div> -->
          <div class="row">
            <div class="col-12">
              <ul>
                <li class="" v-for="(item, i) in list_inputs" :key="i">
                  <button
                   @click.prevent="$emit('item-clicked', i), filterIsVisible = !filterIsVisible"
                   class="btn-item py-3 px-4"
                   :class="item.danger ? 'text-danger' : ''"
                   >
                    {{ item.label }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </dropdown>
    </div>
  </div>
</template>

<script>
import dropdown from "./utils/Dropdown.vue";

export default {
  name: "FilterStatistcs",
  props: {
    css_styles: Object,
    list_inputs: Array,
  },
  components: { dropdown },
  data() {
    return {
      filterIsVisible: false,

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
  methods: {},
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

  .btn-item{
    border: none;
    background-color: transparent;
    width: 100%;
    font-size: 16px;
    text-align: start;
  }
 li:not(:last-child){
    border-bottom: 1px solid #EAEAEA;
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
