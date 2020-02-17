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

    <div v-for="(body, field, key) in fields" :key="key">
      <label>
        {{ body.label }}
        {{ body.validations && body.validations.required && '*' }}
        <input
          v-model="$v.order[field].$model"
          :type="body.type"
        />
      </label>

      <div v-if="getFirst(field)">
        As string:
        {{ getFirst(field) }}
      </div>
      <div>
        As array:
        <pre>
          {{getErrors(field)}}
        </pre>
      </div>
    </div>
  </div>
</template>