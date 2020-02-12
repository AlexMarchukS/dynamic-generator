<script>
import { v } from "@/v";

export default {
  name: "GeneralDetails",

  mixins: [v],

  created() {
    this.updateSchema(this.fields);
  }
};
</script>

<template>
  <div class="general-details">
    <h3>General Details</h3>

    <label>
      Order date*
      <input v-model="order.orderDate" type="text" />
    </label>

    <label>
      Order date
      <input v-model="order.purchaseNumber" type="text" />
    </label>
  </div>
</template>