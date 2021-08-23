<template>
  <div class="d-flex align-items-center">
    <i class="icon icon-thermostat"></i>
    <small class="text-muted">{{ difficulty }}</small>
  </div>
</template>

<script>
export default {
    name: "DifficultyInfo",
    props: {difficulty: Number}
}
</script>

<style lang="scss" scoped>
.icon{
    height: 20px;
    width: 20px;
}

</style>