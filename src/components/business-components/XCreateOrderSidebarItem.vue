<template>
  <li class="x-create-order-sidebar-item">
    <p class="x-create-order-sidebar-item__name">
      {{ itemName }}
    </p>
  </li>
</template>

<script>
import {
  snakeCaseToTitle,
} from '@/utils/helpers';

export default {
  name: 'x-create-order-sidebar-item',

  props: {
    name: {
      required: true,
      type: String,
    }
  },

  computed: {
    itemName() {
      return snakeCaseToTitle(this.name);
    }
  }
}
</script>

<style lang="scss" scoped>
.x-create-order-sidebar-item {
  $this: &;

  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #4c7d94;
  }

  &:first-child {
    background-color: #4c7d94;
  }

  &__name {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
}
</style>
