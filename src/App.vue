<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/variables";
@import "./assets/styles/bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;1,500&display=swap');

.app {
  font-family: 'Poppins', sans-serif, "Avenir Next W01", "Lato", "Karla", "Proxima Nova W01", "Rubik",
    -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
    Arial, sans-serif;
  .rounded {
    border-radius: 0.6rem !important;
  }
  color: #444444;
  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
}
.f-12{  font-size: 12px;}
.f-14{  font-size: 14px;}
.f-16{  font-size: 16px;}
.f-18{  font-size: 18px;}

.f-light{font-weight: 200;}
.f-medium{font-weight: 500;}
.f-bold{font-weight: 600;}

.title22{font-size: 22px;}
.title18{font-size: 18px;}

.f14-light{font-size: 14px; color: #999999;}
.divider_bottom{border-bottom: 1px solid #EAEAEA;}
.divider_left{border-left: 1px solid #EAEAEA;}
.divider_right{border-right: 1px solid #EAEAEA;}
.divider_top{border-top: 1px solid #EAEAEA;}

.truncate {
    display: -webkit-box;
    max-width: 100%;
    
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clap-2{-webkit-line-clamp: 2;}
.line-clap-4{-webkit-line-clamp: 4;}


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

  .badge-success {
    border: 1px solid #12B893;
    color: #048E6F;
    background-color: rgba($color: #50E3C2, $alpha: 0.5);
  }
    .badge-primary {
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

.btn:focus{
  box-shadow: none;
}
@media (min-width: 1024px) {
  .page-wrapper.document-page {
    // grid-template-columns: minmax(25%, 75%) minmax(75%, 25%);
    // grid-template-rows: repeat(3, auto) -webkit-max-content 1fr;
    // grid-template-rows: repeat(3, auto) max-content 1fr;
  }
}
</style>
