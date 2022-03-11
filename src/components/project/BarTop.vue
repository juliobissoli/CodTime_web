<template>
  <div class="row bar_top">
    <div class="col search-input">
      <input
        type="text"
        :placeholder="placeholder"
        class="form-control"
        v-model="serachTocken"
        v-debounce:500ms="serach"
      />
    </div>
    <div v-show="!not_scope" class="col-2 px-0">
      <!-- <button class="btn btn-block btn-outline-dark">Filtrar</button> -->
      <slot></slot>
    </div>
    <div v-show="btn_label" class="col-2 pr-0">
      <button @click="$emit('btn-clicked')" class="btn btn-dark btn-block">{{btn_label}}</button>
    </div>
  </div>
  <!-- <div class="bar_top row">
    <div class="col-lg-4">
      <h3
        v-show="title"
        class="title"
        :style="{ fontSize: font ? font + 'px' : '20px' }"
      >
        {{ title }}
      </h3>
    </div>
    <div v-show="input" class="col-lg-4 col-md-8 col-8 ">
      <div class="search-input ">
        <input
          v-debounce:500ms="serach"
          type="text"
          :placeholder="placeholder"
          class="form-control"
          :class="loading ? 'pulse_amine' : ''"
          v-model="serachTocken"
        />
      </div>
    </div>
    <div class="col d-flex justify-content-end">
      <button
        v-show="btn"
        @click="$emit(btn.btn_emit)"
        class="btn btn-dark btn-sm"
        :type="btn ? btn.type : ''"
      >
        {{ btn ? btn.label : "" }}
      </button>
      <slot></slot>
    </div>
  </div> -->
</template>

<script>
// import btn from "../utils/BtnDefault";

export default {
  name: "BarTop",
  // components: { btn },
  // props: ["title", "input", "btn", "placeholder", "font", "loading"],
  props: {
    placeholder: String,
    btn_label: String,
    not_scope: {type: Boolean, default: false},
  },
  data() {
    return {
      serachTocken: null,
    };
  },
  methods: {
    btnClicked() {
      this.$emit("button-clicked");
    },
    serach() {
      this.$emit("get-search",{search: this.serachTocken});
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes pulse {
  0% {
    border: 2px solid rgba($color: #eaeaea, $alpha: 0.2);
  }
  30% {
    border: 2px solid rgba($color: #84cda6, $alpha: 0.3);
  }
  60% {
    border: 2px solid rgba($color: #84cda6, $alpha: 0.6);
  }
  100% {
    border: 2px solid rgba($color: #eaeaea, $alpha: 1);
  }
}

.pulse_amine {
  animation: pulse 1500ms infinite linear;
  :focus {
    outline: none;
  }
}
.bar_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #555;
  .title {
    font-weight: 300;
  }

  .search-input {
    position: relative;
    // margin-bottom: 5px;
    input {
      border: 1px solid #4444;
      // background-color: #eaeaea;
      // border-radius: 0.4rem;
      width: 100%;
      // height: px;
      font-size: 15px;
      padding-left: 10px;
      :focus {
        outline: none !important;
      }
    }
    ::placeholder {
      color: #666;
    }
    &:after {
      position: absolute;
      font-family: "Font Awesome 5 Free";
      content: url(../../assets/Icons/svg/search.svg);
      font-weight: 900;
      right: 25px;
      top: 8px;
      color: #7794cc;
    }
  }
  @media (max-width: 765px) {
    .title {
      font-size: 20px !important;
      text-align: center;
    }
    .col-4,
    .col-8 {
      padding: 0 1rem;
    }
  }
}
</style>
