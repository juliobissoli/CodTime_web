<template>
  <paginate
    :page-count="totalPages"
    :page-range="2"
    :margin-pages="1"
    :click-handler="clickCallback"
    prev-text="<<"
    next-text=">>"
    :container-class="'pagination'"
    page-class="page"
    next-class="btn-next"
    prev-class="btn-prev"
    active-class="current"
  >
  </paginate>
</template>

<script>
import Paginate from "vuejs-paginate";
export default {
  name: "Prgination",
  components: { Paginate },
  props: ["totalPages"],
  methods: {
    clickCallback(page) {
      this.$emit("change-page", page);
    },
  },
};
</script>

<style lang="scss">
.pagination {
  // margin: 5% 25%;
  // min-width: 8;
  // max-width: 20em;
  border-radius: 0.6rem;
  border: 1px solid #ccc;
  // display: flex;
  // justify-content: space-between;
  .page {
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    border-left: 1px solid #ccc;
    padding: 5px 10px;
    a {
      width: 100% !important;
      height: 100% !important;
      color: #444;
    }
  }
  .btn-next {
    padding: 5px 10px;
    font-size: 18px;
    font-weight: 300;
    color: #444;
    border-left: 1px solid #ccc;
    // border-radius: 0 0.5rem 0.5rem 0;
  }
  .btn-prev {
    padding: 5px 10px;
    font-size: 18px;
    font-weight: 300;
    color: #444;
  }
  .current {
    background-color: #ccc;
    color: #444;
  }
}
</style>
