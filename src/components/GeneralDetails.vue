<script>
import { v } from "@/v";
import XInput from './XInput';

export default {
  name: "GeneralDetails",

  mixins: [v],

  components: {
    XInput
  }
};
</script>

<template>
  <div class="general-details">
    <h3>General Details</h3>

    <div v-for="(body, field, key) in fields" :key="key">
      <component
        v-model="$v.order[field].$model"
        :is="body.componentName"
        :label="body.label"
      />
      <!-- <div v-if="getFirst(field)">{{ getFirst(field) }}</div> -->
    </div>
  </div>
</template>