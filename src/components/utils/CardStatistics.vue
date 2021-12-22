<template>
  <div
    class=" py-4 px-1 shadow-sm bg-white rounded d-flex flex-column align-items-center"
  >
    <small class="text-center text-uppercase"> {{ title }} </small>
    <h3 class="mt-2">
      {{ value }}
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: "CardStatistics",
  props: {
    title: String,
    value: String,
  },
};
</script>
