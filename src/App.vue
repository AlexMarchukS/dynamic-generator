<script>
import PageOrderCreate from '@/components/pages/PageOrderCreate';

export default {
  name: 'App',

  components: {
    PageOrderCreate,
  },
};
</script>

<template>
  <div id="app">
    <page-order-create />
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
