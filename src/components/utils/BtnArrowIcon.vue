<template>
  <button @click.prevent="$emit('update:visible', !visible)" class="btn btn-sm">
    <i class="icon" :class="'icon-arrow_' + (visible ? 'down' : 'up')"></i>
  </button>
</template>

<script>
export default {
  name: "BtnArrowIcon",
  props: { visible: { type: Boolean, default: true } },
  computed: {
      is_visible:{
          get(){return this.visible},
          set(value){this.visible = value}
     }
  },
};
</script>



<style lang="scss" scoped>
.icon {
  height: 20px;
  width: 20px;
  background-color: #555555;
}
</style>