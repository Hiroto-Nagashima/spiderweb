<template>
  <div>
    <label :for="this.for"><slot /></label>
    <input type="text" :id="this.id" v-model="inputData" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TextField",
  model: {
    prop: "propData",
    event: "input",
  },
  props: {
    for: String,
    id: Number,
    propData: String,
    value: String,
  },
  computed: {
    inputData: {
      get() {
        return this.propData;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
});
</script>
