<script>
import { v } from "@/v";

export default {
  name: "Products",

  mixins: [v],

  methods: {
    handleAdd() {
      const entries = [
        ...this.order.entries,
        { productName: "asdasdasdad", price: 10 }
      ];
      this.updateModel({
        entries
      });
    }
  }
};
</script>

<template>
  <div class="products">
    <h3>Products</h3>
    <button @click="handleAdd">Add entry</button>

    <pre>
      {{ order.entries }}
    </pre>
  </div>
</template>