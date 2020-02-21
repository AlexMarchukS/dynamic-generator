<script>
import Context from "./components/Context";

export default {
  name: "App",

  components: {
    Context,
    GeneralDetails: () => import("./components/GeneralDetails.vue"),
    Products: () => import("./components/Products.vue")
  },

  computed: {
    status() {
      return isInvalid => (isInvalid ? "red" : "green");
    }
  }
};
</script>

<template>
  <context id="app" v-slot="{ schema, order, v }">
    <p :style="{color: status(v.$invalid)}">Is valid: {{ !v.$invalid }}</p>

    <component
      v-for="(body, component, idx) in schema.components"
      :key="idx"
      :fields="body.fields"
      :is="component"
    />
  </context>
</template>

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
