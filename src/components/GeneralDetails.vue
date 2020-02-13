<script>
import { v } from "@/v";

export default {
  name: "GeneralDetails",

  mixins: [v]
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
      Purchase number
      <input v-model="order.purchaseNumber" type="text" />
    </label>
  </div>
</template>