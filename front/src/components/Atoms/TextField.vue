<template>
  <div>
    <label :for="this.for"><slot /></label>
    <input
      type="text"
      :id="this.id"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TextField",
  props: {
    for: String,
    id: Number,
    value: String,
  },
});
</script>
