<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["chartdata", "options"],
  mounted() {
    console.log('Bateu aqui')
    if(this.chartdata) this.renderChart(this.chartdata, this.options);
  },
};
</script>
