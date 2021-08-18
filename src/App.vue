<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/variables";
@import "./assets/styles/bootstrap";

.app {
  font-family: "Poppins", "Avenir Next W01", "Lato", "Karla", "Proxima Nova W01", "Rubik",
    -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
    Arial, sans-serif;
  .rounded {
    border-radius: 0.6rem !important;
  }
  color: #444444;
}

.title22{font-size: 22px;}
.title18{font-size: 18px;}

.text14_light{font-size: 14px; color: #999999;}
.divider_bottom{border-bottom: 1px solid #EAEAEA;}
.divider_top{border-top: 1px solid #EAEAEA;}


.btn-dark {
     background-color: #333333;
    border-color: #333333;
}

.page-wrapper {
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;

  display: grid;
  grid-template-columns: 100%;
}

.badge {
  border-radius: 8px;
  padding: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 0px;
}

  .badge-primary {
    border: 1px solid #12B893;
    color: #048E6F;
    background-color: rgba($color: #50E3C2, $alpha: 0.5);
  }
    .badge-success {
    border: 1px solid #0070F3;
    color: #0751A8;
    background-color: rgba($color: #0070F3, $alpha: 0.5);
  }
  .badge-danger {
    border: 1px solid #db717e;
    color: #c93a4b;
    background-color: rgba($color: #db717e, $alpha: 0.5);
  }

  .badge-warning {
    border: 1px solid #b974c5;
    color: #9127a3;
    background-color: rgba($color: #b974c5, $alpha: 0.5);
  }

  .badge-secondary {
    border: 1px solid #999999;
    color: #666666;
    background-color: rgba($color: #f1f1f1f1, $alpha: 1);
  }

@media (min-width: 1024px) {
  .page-wrapper.document-page {
    // grid-template-columns: minmax(25%, 75%) minmax(75%, 25%);
    // grid-template-rows: repeat(3, auto) -webkit-max-content 1fr;
    // grid-template-rows: repeat(3, auto) max-content 1fr;
  }
}
</style>
