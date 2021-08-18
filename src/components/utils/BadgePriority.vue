<template>
  <span class="badge" :class="mapPriority.get(priority).badge">
   {{ mapPriority.get(priority).label }}
  </span>
</template>

<script>
export default {
  name: "BadgePriority",
  props: { priority: Number },

  data() {
    return {};
  },

  computed: {
    mapPriority() {
      return new Map([
        [0, { label: "Alta", badge: "badge-danger" ,class: "danger" }],
        [1, { label: "Media",badge: "badge-warning" ,class: "warning" }],
        [2, { label: "Baixa",badge: "badge-secondary" ,class: "secondary"}]
      ]
      );
    },
  },
};
</script>

