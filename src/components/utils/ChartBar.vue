<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["chartdata", "options"],
  mounted() {
    if(this.chartdata) this.renderChart(this.chartdata, this.options);
  },
};
</script>
