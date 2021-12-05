<template>

  <div class="d-flex swith-model-vuew">
    <div v-for="(item, i) in labels" :key="i" class="box text-truncate" >
      <input
        type="radio"
        :id="item.value"
        :value="item.value"
        v-model="select"
      />
        <!-- :style="{ width:  labels.length > 0 ? +  `${100 / labels.length}% !important` : '100%'}" -->

      <label
        :for="item.value"
        class="text-truncate"
        
        :class="{
          'button-selected': select === item.value,
          left: i === 0,
          reigt: i === labels.length - 1,
        }"
      >
        <i v-if="item.icon" :class="item.icon" />
        <span v-else>{{ item.text }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnSwutch",
  props: ["labels", "first"],
  data() {
    return {
      select: null,
    };
  },
  created() {
    this.first
      ? (this.select = this.first)
      : (this.select = this.labels[0].value);
  },
  watch: {
    first() {
      this.select = this.first;
    },
    select() {
      this.$emit("change-select", this.select);
    },
  },
};
</script>

<style lang="scss" scoped>
.swith-model-vuew {
  .box{
    width: 100%;
  }
  .icon {
    height: 18px;
    width: 18px;
    background: #343a40;
  }
  span {
    font-size: 15px;
  }
  padding: 0;
  height: 30px;
    // width: 100px;
  border-radius: 5px !important;
  border: 0.8px solid #343a40;
  color: #343a40;
  font-size: 20px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    padding: 0;
    // width: 100%;
    padding: 0 12px;
    margin-top: 8px;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.left {
  border-radius: 4px 0 0 4px;
}
.reigt {
  border-radius: 0 4px 4px 0;
}
.button-selected {
  background: #343a40;

  color: #fff;
  .icon {
    background: #fff;
  }
}
</style>
