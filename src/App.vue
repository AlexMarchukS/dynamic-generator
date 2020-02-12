<script>
import { required } from "vuelidate/lib/validators";
import Context from "./components/Context";

export default {
  name: "App",

  components: {
    Context,
    GeneralDetails: () => import("./components/GeneralDetails.vue"),
    Products: () => import("./components/Products.vue")
  },

  data: () => ({
    schema: {
      generalDetails: {
        fields: {
          orderDate: {
            value: "",
            validations: {
              required
            }
          },
          purchaseNumber: {
            value: ""
          }
        }
      }
    }
  }),

  methods: {
    loadSection() {
      this.schema = {
        ...this.schema,
        products: {
          fields: {
            entries: {
              value: [], // {productName: string; price: number}
              validations: {
                required,
                $each: {
                  productName: {
                    required
                  }
                }
              }
            }
          }
        }
      };
    }
  }
};
</script>

<template>
  <context id="app" v-slot="{ order, v }">
    <!-- For example: -->
    <p :style="{color: v.$invalid ? 'red' : 'green'}">Is valid: {{ !v.$invalid }}</p>
    <pre>
      {{order}}
    </pre>

    <button @click="loadSection">Load section</button>

    <component
      v-for="(body, component, idx) in schema"
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
