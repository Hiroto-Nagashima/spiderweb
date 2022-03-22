<template>
  <div>
    <textField for="lastName" id="lastName" v-model="lastName">姓</textField>
    <computedTextField for="firstName" id="firstName" v-model="firstName"
      >名</computedTextField
    >
    <button @click="onClickButton">Post Data</button>
    <div>{{ this.firstName }}</div>
    <div>{{ this.lastName }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import textField from "../Atoms/TextField.vue";
import computedTextField from "../Atoms/ComputedTextField.vue";

export default Vue.extend({
  name: "App",
  components: {
    textField,
    computedTextField,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    onClickButton() {
      axios
        .post("http://localhost:3000/users", {
          first_name: this.firstName,
          last_name: this.lastName,
        })
        .then((response: any) => {
          console.log(response.data.first_name);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>

<style></style>
