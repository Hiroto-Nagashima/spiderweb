<template>
  <div id="app">
    <label for="lastName">姓</label>
    <input type="text" id="lastName" v-model="lastName" />
    <label for="firstName">名</label>
    <input type="text" id="firstName" v-model="firstName" />
    <button @click="onClickButton">Post Data</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "App",
  components: {},
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
