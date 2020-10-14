<template>
  <div class="load">
    <div class="area_transition">
      <svg height="30" width="30" class="item" style="">
        <circle cx="15" cy="15" r="15" fill="#333dca" />
        Sorry, your browser does not support inline SVG.
      </svg>
      <svg height="30" width="30" class="item">
        <circle cx="15" cy="15" r="15" fill="#333dca" />
        Sorry, your browser does not support inline SVG.
      </svg>
      <svg height="30" width="30" class="item" style="">
        <circle cx="15" cy="15" r="15" fill="#333dca" />
        Sorry, your browser does not support inline SVG.
      </svg>
      <svg height="30" width="30" class="item">
        <circle cx="15" cy="15" r="15" fill="#333dca" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      path: '../assets/loading.svg'
    }
  }
}
</script>

<style lang="scss" scoped>
.load {
  height: 100%;
  width: 100%;
  display: flex;
  color: #ffff;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
}

@keyframes rotation {
  0% {
    transform: scale(1);
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  25% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

.area_transition {
  animation: rotation 1s infinite linear;
  height: 100px;
  width: 100px;
  .item {
    margin: 10px;
  }
}
</style>
