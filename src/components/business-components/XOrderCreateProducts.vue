<template>
  <div class="x-order-create-products">
    <h3 class="x-order-create-products__title">
      Products
    </h3>
    <button @click="handleAdd">Add entry</button>
    <pre>
      {{ order.entries }}
    </pre>
  </div>
</template>

<script>
import { v } from '@/v';

export default {
  name: 'x-order-create-products',

  mixins: [v],

  methods: {
    handleAdd() {
      const entries = [
        ...this.order.entries,
        { productName: 'test', price: 10 }
      ];
      this.updateModel({
        entries
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.x-order-create-products {
  $this: &;

  background-color: #fff;
  border: 1px solid #e4e2e0;
  box-sizing: border-box;
  padding: 30px;
  margin: 20px;

  &__title {
    color: #342f2f;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
  }
}
</style>
