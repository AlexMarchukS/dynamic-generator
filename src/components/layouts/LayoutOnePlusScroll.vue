<template>
  <div class="layout-one-plus-scroll">
    <header class="layout-one-plus-scroll__header">
      <slot name="header" />
    </header>

    <section class="layout-one-plus-scroll__content">
      <div
        class="layout-one-plus-scroll__column layout-one-plus-scroll__column_first"
        :style="{ background: '#585660' }"
      >
        <slot name="column-1" />
      </div>

      <div class="layout-one-plus-scroll__column layout-one-plus-scroll__column_second">
        <slot name="column-2" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'layout-one-plus-scroll'
}
</script>

<style lang="scss" scoped>
.layout-one-plus-scroll {
  $this: &;
  $_header-height: 64px;
  $_first_column_width: 320px;

  &__header {
    position: fixed;
    width: 100%;
    height: $_header-height;
    box-shadow: inset 0 -1px 0 0 #e4e8eb;
    background-color: var(--light-default);
    z-index: 10;
  }

  &__content {

    // max-height: calc(100vh - #{$_header-height});
    position: relative;
    display: flex;

    // min-height: calc(100vh - #{$_header-height});
    background-color: #f8f7f6;
    margin: 0;
    padding: 0;
  }

  &__column {
    &_first {
      position: fixed;
      width: $_first_column_width;
      flex-shrink: 0;
      background-color: var(--tertiary-dark);
      color: var(--light-default);
      box-sizing: content-box;
      z-index: 9;
      min-height: calc(100vh - (2 * 30px));
      margin-top: $_header-height;
    }

    &_second {
      box-sizing: border-box;
      min-height: calc(100vh - (2 * 32px));
      width: calc(100% - #{$_first_column_width});
      margin-top: $_header-height;
      margin-left: $_first_column_width;
    }
  }
}
</style>
