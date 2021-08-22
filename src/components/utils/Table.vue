<template>
  <table class="table">
    <thead>
      <slot name="header"></slot>
    </thead>

    <slot></slot>
  </table>
</template>

<style lang="scss" scoped>
table {
  //   border-spacing: 5px;

  font-weight: 300;
  border-collapse: separate;
  border-spacing: 0 8px;
  margin-top: -8px;
  tbody {
  }

  td:first-child {
    // border-radius: 0.8rem 0 0 0.8rem;
    border-left: none !important;
  }
  td:last-child {
    // border-radius: 0 0.8rem 0.8rem 0;
  }
  th {
    // font-family: "Avenir Next W01", "Lato", "Karla", "Proxima Nova W01", "Rubik",
    //   -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
    //   Arial;
    text-align: center;
    vertical-align: 2;
    font-weight: 500;
    padding: 5px;
    border: none ;
    color: #999999 !important;
    border-bottom: 1px solid #EAEAEA;
  }
  td {
    // font-family: 'Roboto', sans-serif;
    // background-color: #f8f9fa !important;
    // border-left: 2px solid #eee !important;
    font-size: 14px;
    border-bottom: 1px solid #EAEAEA;
    border-top: none !important;
    height: 100%;
    padding: 5px !important;
    color: #000000;
  }
}
</style>
