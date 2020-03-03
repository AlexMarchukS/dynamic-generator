<template>
  <div class="x-order-create-general-details">
    <h3 class="x-order-create-general-details__title">
      General Details
    </h3>
    <div v-for="(body, field, key) in fields" :key="key">
      <component
        v-model="$v.order[field].$model"
        :is="fieldsComponents[key]"
        :label="body.label"
      />
      <div v-if="getFirst(field)">{{ getFirst(field) }}</div>
    </div>
  </div>
</template>

<script>
import { v } from '@/v';

export default {
  name: 'x-order-create-general-details',

  mixins: [v],

  computed: {
    fieldsComponents() {
      if (!Object.entries(this.fields).length) return [];
      return Object.entries(this.fields).map((field) =>
        () => import(`@/components/ui-components/${field[1].componentName}`)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.x-order-create-general-details {
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
