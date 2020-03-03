<template>
  <label class="x-input">
    <span class="x-input__label">
      {{ label }}
    </span>
    <input
      class="x-input__field"
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

<style lang="scss" scoped>
.x-input {
  $this: &;
  margin-top: 28px;
  display: block;

  &__field {
    border: 1px solid #c5c4c3;
    border-radius: 4px;
    width: 100%;
    font-size: 16px;
    height: 40px;
    padding: 0 44px;
    box-sizing: border-box;
    color: #342f2f;
    display: block;
    font-family: Roboto,Arial,sans-serif;
    line-height: 1.5;
    transition: box-shadow .2s,border .2s;
  }

  &__label {
    box-sizing: border-box;
    color: #787676;
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.21;
    margin-bottom: 5px;
    text-align: left;
  }
}
</style>
