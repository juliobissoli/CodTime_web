<template>
  <button
    @click="$emit('clicked')"
    class="btn d-flex align-items-center p-0 justify-content-between w-100 btn-dropdown"
  >
    <span style="padding:6px">
      {{label}}
    </span>
    <div class="h-100 d-flex divider_left align-items-center px-2">
      <i
        class="icon icon-arrow_down"
        :class="!is_visible ? 'icon-arrow_down' : 'icon-arrow_up'"
      ></i>
    </div>
  </button>
</template>

<script>
export default {
    name: 'BtnDropdown',
    props: {is_visible: Boolean, label: String}
}
</script>
<style lang="scss" scoped>

.btn-dropdown{
  
  border: 1px solid #9999;
  color: #666666;
  // padding: 0 6px !important;

.icon-arrow_down{
  height: 20px;
  width:  20px;
  background-color: #555555;
  }
}
</style>
