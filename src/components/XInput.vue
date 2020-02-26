<template>
  <label>
    {{ label }}

    <input
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'XInput',

  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>