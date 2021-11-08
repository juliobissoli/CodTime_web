<template>
  <div class="d-flex align-items-center" :class="'difficulty-' + contDifficulty(difficulty).class">
    <i class="icon icon-thermostat"></i>
    <small >{{contDifficulty(difficulty).value }}</small>
  </div>
</template>

<script>
export default {
  name: "DifficultyInfo",
  props: { difficulty: Number },

  methods: {
    contDifficulty(estimate) {
      let  difficulty =  Math.trunc((estimate / 60 / 60))
      return {
        class: difficulty < 4 ? 'low' : difficulty <= 14 ? 'medium' : difficulty <= 56 ? 'hight' : 'hard',
        value: difficulty,
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  height: 20px;
  width: 20px;
}

.difficulty-low{
  color: #999999;
  .icon { background-color: #999999 ;}
}

.difficulty-medium{
  color: #E3D486;
  .icon { background-color: #E3D486 ;}
}

.difficulty-hight{
  color: #BF78CA;
  .icon { background-color: #BF78CA ;}
}

.difficulty-hard{
  color: #DB717E;
  .icon { background-color: #DB717E ;}
}
</style>
