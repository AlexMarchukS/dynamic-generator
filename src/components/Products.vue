<script>
import { v } from "@/v";

export default {
  name: "Products",

  mixins: [v],

  methods: {
    handleAdd() {
      const entries = [...this.order.entries, { productName: "", price: 0 }];
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

    <div v-for="(entry, key) in order.entries" :key="key">
      <label>
        Product name*
        <input type="text" v-model="entry.productName" />
      </label>
      <label>
        Price
        <input type="number" v-model="entry.price" />
      </label>
    </div>
  </div>
</template>